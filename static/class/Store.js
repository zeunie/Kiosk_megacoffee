class Store {
	constructor(id = 0, pw = 0, name = "", addr = "",orderNum=100) {
		this.id = id
		this.pw = pw
		this.name = name
		this.addr = addr
		this.orderNum=orderNum
	}
	increaseOrderNum() {
		this.orderNum++;
		if (this.orderNum % 100 == 0) {
			this.orderNum-=100
		}
	}
	getValue() {
		return {
			"id": this.id
			, "name": this.name
			, "addr": this.addr
		}
	}
}

module.exports = Store