module.exports = (app, partials) => {
	app.get(routes.cover, (req, res) => {
		res.render("cover", { routes })
	})
	app.get(routes.coffeeHot, (req, res) => {
		res.render("coffeeHot", { coffeeHot, routes })
	})
	app.get(routes.coffeeIce, (req, res) => {
		res.render("coffeeIce", { routes, coffeeIce })
	})
	app.get(routes.americano, (req, res) => {
		res.render("americano", { routes })
	})

	//JH 결제요청으로 전송된 json 받기
	app.post(routes.order, (req, res) => {
		console.log(req.body)
		const order=req.body
		let amount = 0
		for (var it of order["order_list"]) {
			amount+=it["item_price"]
		}
		order["total_price"] = amount
		order["total_quantity"] = order["order_list"].length

		res.send(JSON.stringify(order))
	})
}

import { coffeeHot, coffeeIce } from "./fakedb"

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
