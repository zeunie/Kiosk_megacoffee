let refund_list = []

$(document).ready(function () {
	//페이지가 로딩되면 데이터 div에 있는 정보를 변수로 저장한다.
	refund_list = JSON.parse($("#refund").val())

	//엑스 버튼을 누르면 뒤로 간다
	$("#Xbtn").click(function () {
		window.location.href = "/managerpage"
	})

	$("#search_by_date").click(function () {
		const targetDay = $("#calendar").val()
		window.location.href = `/refund?date=${targetDay}`
	})
	$("#search_by_id").click(function () {
		const targetID = $("#id_input").val()
		window.location.href = `/refund?id=${targetID}`
	})

	//주문내역 중 하나를 클릭하면 하단에 상세 주문 내역을 표시한다.
	$("#table_order_list > tbody > tr").on('click', function () {
		$(".table > tbody > tr").css("background-color", "inherit")
		$(this).css("background-color", "skyblue")
		const idToFind = $(this).children()[1].innerText

		//테이블에서 선택한 주문내역
		let selected = ""
		for (let i of refund_list) {
			if (idToFind == i.id) {
				selected = i
				break
			}
		}

		//주문에 해당하는 음료들
		let orderMenus = []
		for (let i of JSON.parse($("#orderMenus").val())) {
			if (i.ID == idToFind) {
				orderMenus.push(i)
			}
		}

		//상세 주문 내역 테이블을 보이게 한 후 내용을 채워넣는다
		$("#detailed_order").removeAttr("hidden")
		$(".order_id").text(`${selected.id}`)
		$(".order_orderTime").text(`${new Time(selected.orderTime).showTimeString()}`)
		$(".order_TO").text(`${(selected.takeout) ? "T.O." : "매장"}`)
		$(".order_price").text(`${selected.price}`)

		//어떤 메뉴를 주문했는지를 보여준다
		$("#detailed_order_menus").removeAttr("hidden")
		const menus_children_num = $("#detailed_order_menus")[0].children.length
		for (let i = 0; i < menus_children_num - 1; i++) {
			$("#detailed_order_menus")[0].removeChild($("#detailed_order_menus")[0].lastChild);
		}
		for (let i = 0; i < orderMenus.length; i++) {
			let tr = document.createElement("tr");
			let td = []
			const td_attr_num = 3
			for (let j = 0; j < td_attr_num; j++)
				td.push(document.createElement("td"))

			const td_attr = [`${orderMenus[i].Name}`, `${orderMenus[i].Price}`, `${orderMenus[i].Quantity}`]
			for (let j = 0; j < td_attr_num; j++) {
				td[j].innerText=td_attr[j]
				tr.appendChild(td[j])
			}
			$("#detailed_order_menus")[0].appendChild(tr)
		}
	})

	$("#execute_refund").click(function () {
		const id_to_refund = $(".order_id").text()

		var form = document.createElement('form');
		form.style.visibility = 'hidden'; // no user interaction is necessary
		form.method = 'POST'; // forms by default use GET query strings
		form.action = '/refund';
		var input = document.createElement('input');
		input.name = "id";
		input.value = id_to_refund;
		form.appendChild(input); // add key/value pair to form

		document.body.appendChild(form); // forms cannot be submitted outside of body
		form.submit()

		setTimeout(function () { window.location.reload() }, 500)
	})
})