const fs = require("fs")
const Time = require("./static/class/Time")
const DB = require("./DB")
let DB_adapter = new DB()
const ServerLog = require("./static/class/ServerLog")
const Log = new ServerLog()

module.exports = (app, partials) => {
	app.get(routes.cover, (req, res) => {
		res.render("cover", { routes })
	})
	app.get(routes.menu, async (req, res) => {
		Log.tell("Menu Page Requested")
		if (req.headers["referer"] === undefined) {
			res.status(400)
			res.render("error", { routes })
		}
		else {
			let menu = []
			await DB_adapter.getMenu().then((ret) => { menu = ret })//가공된 값이 모두 넘어올 때까지 기다렸다 처리

			res.render("menulist", { routes, menu })
		}
	})
	app.post(routes.check, (req, res) => {
		Log.tell("Payment Requested")
		if (req.headers["referer"] === undefined) {
			res.status(400)
			res.render("error", { routes })
		}
		else {
			const order = JSON.parse(req.body["orderList"])

			const timestr = new Time(order.id).getTimeDBString()
			res.render("check", { routes, order, timestr })
		}
	})
	app.post(routes.change_to_checkpoint, (req, res) => {
		Log.tell("Stamp Requested")
		if (req.headers["referer"] === undefined) {
			res.status(400)
			res.render("error", { routes })
		}
		else {
			const order = JSON.parse(req.body["orderList"])

			res.render("numberpad", { routes, order })
		}
	})
	app.post(routes.stamp, async (req, res) => {
		Log.tell(`Stamp Accumulation Requested`)

		const menumanage = req.body

		Log.tell(`Phone numer: ${menumanage["ph"]}\tstamp: ${menumanage["stamp"]}`, false)

		await DB_adapter.setStamp(menumanage["ph"], menumanage["stamp"]).then((ret) => {
			Log.tell(ret)
		})
	})
	app.post(routes.change_to_complete, async (req, res) => {
		Log.tell("Payment Complete Requested")
		if (req.headers["referer"] === undefined) {
			res.status(400)
			res.render("error", { routes })
		}
		else {
			if (req.headers["referer"] === undefined) {
				res.status(400)
				res.render("error", { routes })
			}
			else {
				const order = JSON.parse(req.body["orderList"])
				Log.tell(order)
				await DB_adapter.setOrderList(order).then((ret) => {
					Log.tell(`Saving Order Information: ${ret}`, false, 1)
				})

				const timestr = new Time(order.id).getTimeDBString()
				res.render("complete", { routes, order, timestr })
			}
		}
	})

	app.get(routes.entermanagerpage, (req, res) => {
		Log.tell("Entering Manager Page Requested - Identifying...")

		res.render("password_check", { routes })
	})
	app.get(routes.managerpage, (req, res) => {
		if (req.headers["referer"] === undefined) {
			Log.tell("Manager Identified")
			res.status(400)
			res.render("error", { routes })
		}
		else {
			res.render("managerpage", { routes })
		}
	})

	app.get(routes.refund, async (req, res) => {
		Log.tell(`Refund Requested\nQUERY: ${JSON.stringify(req.query)}`)
		let refund = []
		let orderMenus=[]
		let target_day = ""
		let target_id=""
		if (req.query.id) {
			await DB_adapter.getOrderList(req.query.id).then((ret) => { refund = ret })
			target_day = refund[0].orderTime.getTimeDBString().slice(0, 10)
			target_id = req.query.id

			await DB_adapter.getOrderMenu(target_id).then((ret) => { orderMenus = ret })
		}
		else {
			target_day = (req.query.date) ? req.query.date : new Time().getTimeDBString().slice(0, 10)
			await DB_adapter.getOrderList(target_day).then((ret) => { refund = ret })
			refund.reverse()

			if (refund.length != 0) {
				await DB_adapter.getOrderMenu(refund[0].id.slice(0, 8)).then((ret) => { orderMenus = ret })
			}
		}

		res.render("refund", { routes, refund, target_day,target_id , orderMenus})
	})
	app.post(routes.refund, async (req, res) => {
		const idToRefund = req.body["id"]
		Log.tell(`ID ${idToRefund} Refund Requested`)

		let refundResult = false
		await DB_adapter.refund(idToRefund).then((ret) => { refundResult = ret })
	})
	app.get(routes.monthlysales, async (req, res) => {
		Log.tell("Monthlysales Requested")

		let resultTable = ""
		await DB_adapter.getSales("monthly").then((ret) => { resultTable = JSON.stringify( ret )})

		res.render("monthlysales", { routes, resultTable})
	})
	app.get(routes.password_check_for_cpw, (req, res) => {
		if (req.headers["referer"] === undefined) {
			res.status(400)
			res.render("error", { routes })
		}
		else {
			res.render("password_check_for_cpw", { routes })
		}
	})
	app.get(routes.change_pw, (req, res) => {
		if (req.headers["referer"] === undefined) {
			res.status(400)
			res.render("error", { routes })
		}
		else {
			res.render("newpassword_input", { routes })
		}
	})
	app.get(routes.change_ordernum, (req, res) => {
		if (req.headers["referer"] === undefined) {
			res.status(400)
			res.render("error", { routes })
		}
		else {
			res.render("bill_option", { routes })
		}
	})
	app.get(routes.menumanage, async (req, res) => {
		Log.tell("Menumanage Page Requested")
		let menu = []
		await DB_adapter.getMenu().then((ret) => { menu = ret })
		let category = []
		await DB_adapter.getCategory().then((ret) => { category = ret })//가공된 값이 모두 넘어올 때까지 기다렸다 처리
		res.render("menumanage", { routes, menu, category })
	})
	app.post(routes.menumanage, async (req, res) => {
		Log.tell(`Menu manage update Requested`)
		//console.log(req.body)
/* 		{
			cat: 'ADE',
			name: 'dd',
			topping: 'shotCinnamon',
			price: '3,500',
			ice: 'ice',
			image: ''
		} */
		//console.log(req.body['ice'] == undefined) = true
		const menumanage = req.body
		if (menumanage['addcat'] != '' & menumanage['addcat'] != undefined){
			DB_adapter.addCategoryCore(menumanage["addcat"])
		}
		if (menumanage['deletecm'] != undefined){
			//console.log('defined')
			if (menumanage['deletecm'].slice(-3,) === 'cat'){
				DB_adapter.deleteCategoryCore(menumanage["deletecm"].slice(0,-3))
			}
			else if(menumanage['deletecm'].slice(-4,) === 'menu'){
				//console.log('it is menu')
				//console.log(`delete from menu where(name = '${menumanage['deletecm'].slice(0,-4)}')`)
				DB_adapter.deleteMenuCore(menumanage['deletecm'].slice(0,-4))
			}
			return
		}
		let findmenu =[]
		await DB_adapter.findMenu(menumanage["name"]).then((ret) => { findmenu = ret })
/* 		console.log(findmenu)
		console.log(findmenu == null)
		console.log(findmenu != []) */
		DB_adapter.setMenucore(findmenu, menumanage)

/*		console.log(findmenu)
		console.log(findmenu[0]['cat'])
 		   Menu {
			cat: 'ADE',
			name: '유니콘매직에이드(핑크)',
			price: 3500,
			quantity: 0,
			image: '/static/picture/ADE/유니콘매직에이드(핑크).jpg',
			shot: false,
			cream: false,
			cinnamon: false,
			ice: true,
			soldout: false
		  } */
	})

	//JH	test페이지 내의 기능 테스트
	app.get(routes.test, (req, res) => {
		res.render("test", { routes })
	})
	app.post(routes.test, async (req, res) => {
		let result = []
		await DB_adapter.getSales(req.body["period"]).then((ret) => { result = ret })
		Log.tell(result, false, 3)
		res.send(result)
	})
}

const routes = {
	cover: "/"
	, menu: "/menu"
	, check: "/check"
	, change_to_checkpoint: "/change_to_checkpoint"
	, stamp: "/stamp"
	, change_to_complete: "/change_to_complete"

	, entermanagerpage: "/entermanagerpage"
	, managerpage: "/managerpage"

	, refund: "/refund"
	, refund_request: "/refund_request"
	, monthlysales: "/monthlysales"
	, password_check_for_cpw: "/password_check_for_cpw"
	, change_pw: "/change_pw"
	, change_ordernum: "/change_ordernum"
	, menumanage: "/menumanage"

	, test: "/test"
	, error: "/error"
}

export default routes
