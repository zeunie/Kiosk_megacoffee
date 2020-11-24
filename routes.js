const DB = require("./DB")
let DB_adapter = new DB()

module.exports = (app, partials) => {
	app.get(routes.cover, (req, res) => {
		res.render("cover", { routes })
	})

	app.get(routes.menu, async (req, res) => {
		let menu = []
		await DB_adapter.getMenu(`${req.query.category}`).then((ret) => { menu = ret })//가공된 값이 모두 넘어올 때까지 기다렸다 처리
		res.render("menulist", { routes, menu })
	})

	//JH 결제요청으로 전송된 json 받기
	app.post(routes.order, (req, res) => {
		console.log(req.body)
		const order = req.body
		let amount = 0
		for (var it of order["order_list"]) {
			amount += it["item_price"]
		}
		order["total_price"] = amount
		order["total_quantity"] = order["order_list"].length

		res.send(JSON.stringify(order))
	})

	app.get(routes.refund, async (req, res) => {
		let refund = []
		await DB_adapter.getOrderList().then((ret) => { refund = ret })
		//JH 201121 주문내역 엄청 많이 나오도록 테스트를 위해 
		refund = refund.concat(refund)
		refund = refund.concat(refund)
		refund = refund.concat(refund)
		refund = refund.concat(refund)
		refund = refund.concat(refund)
		refund = refund.concat(refund)
		res.render("refund", { routes, refund })
	})

	app.get(routes.timesales, (req, res) => {
		res.sendFile("sales/timesales.php")
	})

	//JH test페이지 내의 기능 테스트
	app.get(routes.test, (req, res) => {
		res.render("test", {routes})
	})
	app.post(routes.test, async (req, res) => {
		let result = []
		await DB_adapter.getSales(req.body["period"]).then((ret) => { result = ret })
		res.send(result)
	})
}

const routes = {
	cover: "/"
	, menu: "/menu"
	, coffeeHot: "/coffeeHot"
	, coffeeIce: "/coffeeIce"
	, beverage: "/beverage"
	, tea: "/tea"
	, juice: "/juice"
	, ade: "/ade"
	, smoothieFraffe: "/smoothieFraffe"
	, dessert: "/dessert"
	, americano: "/americano"

	, order: "/order"
	, refund: "/refund"
	, timesales: "/timesales"

	, test: "/test"
}

export default routes
