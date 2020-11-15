class Stamp {
	constructor(id, ph, stamp, date, exp_date) {
		this.id=id
		this.ph = ph
		this.stamp = stamp
		this.date = date
		this.exp_date=exp_date
	}
	getValue() {
		return {
			"id": this.id
			, "ph": this.ph
			, "stamp": this.stamp
			, "date": this.date
			, "exp_date": this.exp_date
		}
	}
}

module.exports=Stamp