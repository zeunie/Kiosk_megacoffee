//카테고리 클래스를 정의한다.

class Category {
	constructor(cat = "",) {
		this.cat = cat
	}

	getValue() {
		return {
			'cat': this.cat
		}
	}
}

module.exports = Category