class Store {
	constructor(id = 0,pw=0, name = "", addr = "") {
		//점포 id는 db에서 마지막 점포의 id를 받아와 그것에 1을 더한 것을 새 id로 한다.
		this.id = id
		this.name = name
		this.addr=addr
	}

	getValue() {
		return {
			"id": this.id
			, "name": this.name
			, "addr":this.addr
		}
	}
}

module.exports=Store