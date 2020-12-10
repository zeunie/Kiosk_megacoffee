$(document).ready(function () {
	$("#refund").click(function () {
		window.location.href="/refund"
	})

	$("#dailysales").click(function () {
		window.location.href ="/dailysales"
	})
	$("#monthlysales").click(function () {
		window.location.href ="/monthlysales"
	})
	$("#timesales").click(function () {
		window.location.href ="/timesales"
	})

	$("#newpassword_input").click(function () {
		window.location.href ="/password_check_for_cpw"
	})
	$("#bill_option").click(function () {
		window.location.href ="/change_ordernum"
	})
	$("#menumanage").click(function () {
		window.location.href ="/menumanage"
	})
	$("#open").click(function () {
		
		alert('영업을 시작합니다.');
		window.localStorage.setItem("open", "1");
	})
	$("#close").click(function () {
		alert('영업을 마감합니다.');
		window.localStorage.setItem("open", "0")
		window.location.href = "/timesales"
	})
	
})