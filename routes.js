const DB = require("./DB")
let DB_adapter = new DB()

module.exports = (app, partials) => {
	let menu = []

	app.get(routes.cover, (req, res) => {
		res.render("cover", { routes })
	})
	app.get(routes.coffeeHot, (req, res) => {
		DB_adapter.getMenu("COFFEE(HOT)").then((ret) => { menu = ret })
		console.log("served: " + menu)
		res.render("coffeeHot", { routes, menu })
	})
	app.get(routes.coffeeIce, (req, res) => {
		DB_adapter.getMenu("COFFEE(ICE)").then((ret) => { menu = ret })
		console.log("served: " + menu)
		res.render("coffeeIce", { routes, menu })
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
}

const routes = {
	cover: "/",
	coffeeHot: "/coffeeHot",
	coffeeIce: "/coffeeIce",
	beverage: "/beverage",
	tea: "/tea",
	juice: "/juice",
	ade: "/ade",
	smoothieFraffe: "/smoothieFraffe",
	dessert: "/dessert",
	americano: "/americano",

	order: "/order",
}

export default routes
