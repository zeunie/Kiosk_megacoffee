class Store {
	constouctor(id=0000, name="", addr="") {
		//점포 id는 db에서 마지막 점포의 id를 받아와 그것에 1을 더한 것을 새 id로 한다.
		this.id = id
		this.name = name
		this.addr=addr
	}
}

module.exports=Store