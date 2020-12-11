var new_order_number = 0

$(document).ready(function () {
	$("#exit").click(function () {
		window.location.href = "/managerpage"
	})
	$(".number-option").click(function () {
		for (let i = 0; i < $(".number-option").length; i++) {
			$(".number-option")[i].classList.remove("clicked-number-option")
		}
		$(this).addClass('clicked-number-option')
		new_order_number = parseInt($(this).text())
	})
	$("#save").click(function () {
		if (new_order_number != 0) {
			new Store_adapter().setOrderNum(new_order_number)
			alert(`주문번호는 ${new_order_number + 1}번부터 시작됩니다.`)
			window.location.href = "/managerpage"
		}
	})
})
