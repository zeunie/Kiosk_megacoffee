const Menu = require("./static/class/Menu")
const OrderList = require("./static/class/ShoppingCart")
const mysql = require("mysql")

const DB = mysql.createConnection({
	host: 'localhost'
	, port: 3306
	, user: 'root'
	, password: '1234'
	, database: 'megacoffeedb'
})

class DB_adapter {
	//어댑터 패턴, DB에서 요청한 결과를 object로 가공해서 반환
	constructor() {
		DB.connect((err) => {
			if (err) throw err
			console.log(`[${Date()}]\nTEAM13>> DATABASE CONNECTED`)
		})
	}

	getMenuCore(categoryName) {
		return new Promise((resolve, reject) => {
			DB.query(`select * from menu where cat = '${categoryName}'`, (err, result) => {
				return (err) ? reject(err) : resolve(result)
			})
		})
	}
	async getMenu(categoryName) {
		console.log(`[${Date()}]\nTEAM13>> getMenu requested: ${categoryName} `)
		//DB에서 데이터를 result에 받은 다음 그 데이터로 메뉴 객체를 만든 다음 그것을 반환한다. 
		let ret = []
		let menuListRaw = []

		await this.getMenuCore(categoryName).then((result) => { menuListRaw = result }) //DB에서 모든 값이 넘어올 때까지 기다려서 실행한다.
		for (const i of menuListRaw) {
			ret.push(new Menu(i.Cat, i.Name, i.Price))//DB에서 전달받은 raw 데이터에서 카테고리, 이름, 가격만 뽑아서 메뉴를 구성한다(나머지는 다음에)
		}

		return ret
	}

	getOrderListCore() {
		return new Promise((resolve, reject) => {
			DB.query(`select * from orderlist`, (err, result) => {
				return (err) ? reject(err) : resolve(result)
			}) 
		})
	}
	async getOrderList() {
		let ret = []
		let orderListRaw = []

		await this.getOrderListCore().then((result) => { orderListRaw = result })
		for (const i of orderListRaw) {
			ret.push(new OrderList(0, 0, 0, i.Price, i.Quantity))  //.setIdArb("" + String(parseInt(Math.random() * 2020)).padStart(4, '0') + "05140809110204")  임시로 붙인 ID, 다음에 데이터베이스까지 수정해야 함
		}

		return ret
	}
}

module.exports = DB_adapter

