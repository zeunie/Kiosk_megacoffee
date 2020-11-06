//파는 상품의 클래스를 정의한다.
class Item {
	constructor(name = "", price = 0, imageUrl = "/static/picture/default.png"	) {
		this.name = name
		this.price = price

		this.image = new Image()
		this.image.url =imageUrl	
	}

	getValue() {
		return {
			'name': this.name
			, 'price': this.price
			, 'inageUrl':this.image.url
		}
	}
}

class Drinks extends Item {
	constructor(name, price,imageUrl,temperature=false) {
		super(name, price, imageUrl)
		this.temperature=temperature
	}

	getValue() {
		let ret = super.getValue()
		ret['temperature']=this.temperature
		return ret
	}
}

class DrinksCream extends Drinks {
	constructor(name, price, imageUrl, temperature, cream = true) {
		super(name, price, imageUrl, temperature)
		this.cream=cream
	}

	getValue() {
		let ret = super.getValue()
		ret['cream'] = this.cream
		return ret
	}
}

module.exports = Item
module.exports = Drinks
module.exports = DrinksCream