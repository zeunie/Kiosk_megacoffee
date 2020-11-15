//파는 상품의 클래스를 정의한다.

class Menu {
	constructor(cat="", name = "", price = 0, image = "/static/picture/default.png"	) {
		this.cat = cat
		this.name = name
		this.price = price
		this.image = image
	}

	getValue() {
		return {
			'cat': this.cat
			,'name':this.name
			,'price':this.price
			,'image':this.image
		}
	}
}

module.exports = Menu