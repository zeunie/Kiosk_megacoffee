const Time = require("./Time")
const parseTimeBigInt = require("./time")
const Item=require("./item")

class Order {
	constructor() {
		id = 0
		storeId = 0
		orderTime = undefined

		itemList = []
		total = 0
		amount = 0
	}

	setStoreIdFromStore(store) { this.storeId = store.id }
	setOrderTime() {this.orderTime=new Time()	}
	
	setId() {
		//id는 연월일시분초(4 2 2 2 2 2 : 14) + 점포id(4)로 구성된다
		//ex) 2020082320191290416 : 2020년 8월 23일 20시 19분 12초에 9416번 점포에서 들어온 주문
		return BigInt("" + String(this.orderTime.getTimeBigInt) + this.storeId.toString().padStart(4, "0"))
	}

	getValue() {
		return {
			"id": this.id
			, "itemList": this.itemList
			, "total": this.total
			, "amount": this.amount
		}
	}
}

module.exports=Order