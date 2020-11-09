class Time {
	constructor(y, m, d, hr, min, sec) {
		const t=new Date()

		this.year = (y===undefined?t.getFullYear():y)
		this.month = (m === undefined ? t.getMonth() + 1 : m)
		this.date = (d === undefined ? t.getDate() : d)
		this.hour = (hr === undefined ? t.getHours() : hr)
		this.minute = (min === undefined ? t.getMinutes() : min)
		this.second = (sec === undefined ? t.getSeconds() : sec)
	}

	getTimeBigInt() {
		let time = "" + this.year
		if (this.month >= 10)
			time += ""+this.month
		else
			time += "0" + this.month
		if (this.date >= 10)
			time += "" + this.date
		else
			time += "0" + this.date
		if (this.hour >= 10)
			time += "" + this.hour
		else
			time += "0" + this.hour
		if (this.minute >= 10)
			time += "" + this.minute
		else
			time += "0" + this.minute
		if (this.second >= 10)
			time += "" + this.second
		else
			time += "0" + this.second

		return BigInt(time)
	}
}

function parseTimeBigInt(time) {
	//20201106184810
	const sec = parseInt(time % 100n)
	time = time / 100n
	const min = parseInt(time % 100n)
	time = time / 100n
	const hr = parseInt(time % 100n)
	time = time / 100n
	const d = parseInt(time % 100n)
	time = time / 100n
	const m = parseInt(time % 100n)
	time = time / 100n
	const y = parseInt(time)

	return new Time(y,m,d,hr,min,sec)
}

module.exports = Time
module.exports = parseTimeBigInt
