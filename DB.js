const Menu = require("./static/class/Menu")
const OrderList = require("./static/class/ShoppingCart")
const Time = require("./static/class/Time")
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
			ret.push(new Menu(i.Cat, i.Name, i.Price, (i.Image) ? i.Image : undefined))//DB에서 전달받은 raw 데이터에서 카테고리, 이름, 가격, 이미지(null -> default)만 뽑아서 메뉴를 구성한다(나머지는 다음에)
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

	getSalesCore(period) {
		return new Promise((resolve, reject) => {
			//time/daily/monthly에 따라 다른 query
			let query_string = ""
			if (period == "time") {
				query_string = "SELECT time, Quantity from orderlist where Date(time) = Date(CURDATE())"
			}
			else {
				const interval = `${(period == "daily") ? "7 DAY" : "6 MONTH"}`
				query_string = `SELECT time, Totalprice from orderlist WHERE time > DATE_FORMAT( DATE_ADD(NOW(), INTERVAL - ${interval}), '%Y-%m-%d 00:00:00' )`
			}
			//데이터가 많이 들어있지 않으므로 일단 전체를 가져오도록 한다. 추후 장바구니, 결제, DB에 주문내역 저장이 만들어지면 조건에 맞는 것을 가져오도록 바꾼다.
			query_string="SELECT * from orderlist"
			DB.query(query_string, (err, result) => {
				return (err) ? reject(err) : resolve(result)
			})
		})
	}
	async getSales(period) {
		//DB 출력 결과를 받아 가공함
		let ret=[]
		let salesRaw = []
		await this.getSalesCore(period).then((result) => { salesRaw = result })
		for (const i of salesRaw) {
			ret.push({ "time": new Time(i.Time.getFullYear(), i.Time.getMonth(), i.Time.getDate(), i.Time.getHours(), i.Time.getMinutes(), i.Time.getSeconds()), "price":i.TotalPrice})
		}

		console.log(`\t\t${ret}\n`);
		return ret;
	}
}

module.exports = DB_adapter

