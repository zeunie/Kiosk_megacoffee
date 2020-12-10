//JS	세션 스토리지에 매장 정보랑 주문번호 몇번부터 시작하는지를 저장하기 위해 만든 js file
var click_five_times_to_access_manager_page = 0;

if (!(localStorage.hasOwnProperty("open"))){
	window.localStorage.setItem('open', '1')
}
var open = window.localStorage.getItem("open")

$(document).ready(function () {
	if (!(new Store_adapter().getStoreInfo())) {
		new Store_adapter().setStoreInfo(new Store(1313, "1234", "13조", "", 200))
	}

	if (open === '0'){
		$("#takeout_true").click(function () {
			alert('영업 시간이 아닙니다.')
		})
		$("#takeout_false").click(function () {
			alert('영업 시간이 아닙니다.')
		})
	}
	else {
		$("#takeout_true").click(function () {
			window.location.href = "/menu?takeout=true"
		})
		$("#takeout_false").click(function () {
			window.location.href = "/menu?takeout=false"
		})
	}

	$("#managerBtn").click(function () {
		click_five_times_to_access_manager_page++
		if (click_five_times_to_access_manager_page >= 5) {
			window.location.href ="/entermanagerpage"
		}
	})
})

