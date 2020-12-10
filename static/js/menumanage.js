function addCat() {
	var newcat = prompt('추가할 카테고리를 입력해주세요');
	if (newcat === '') {
		alert('입력이 없습니다.')
	}
	else if (newcat === null) {
		alert('카테고리 추가를 취소하셨습니다.')
	}
	else {
		var answer = confirm(`${newcat} 이름으로 카테고리를 추가하시겠습니까?`)
		if (answer) {
			document.getElementById('addcat').value = newcat
			document.changeform.submit()
			window.location.reload()
		}
		else {
			alert('카테고리 추가를 취소하셨습니다.')
		}
	}
}
function deleteCM() {
	var cat_selected = document.querySelector("#catslist").value
	//ADE
	var menu_selected = document.querySelector("#menulist").value
	//레몬에이드 3,500 ADE false,false,false,true,false,/static/picture/ADE/레몬에이드.jpg
	if (cat_selected != false) {
		document.getElementById('deletecm').value = cat_selected + 'cat'
		var answer = confirm(`카테고리 ${cat_selected}를 삭제하시겠습니까?`)
	}
	else if (menu_selected != false) {
		menuinfos = menu_selected.split(' ')
		if (menuinfos.length > 4) {
			menuinfos[0] = menuinfos[0] + menuinfos[1]
		}
		document.getElementById('deletecm').value = menuinfos[0] + 'menu'
		var answer = confirm(`메뉴 ${menuinfos[0]} 를 삭제하시겠습니까?`)
	}
	else {
		alert('선택된 항목이 없습니다.')
	}
	if (answer == true) {
		document.changeform.submit()
	}
}

function menuChange() {

}


function setCatvalue() {
	return document.getElementByName("cat").value
}

function setToppvalue() {
	return document.getElementByName("rtopping").value
}

function menubycondition(condition) {
	document.querySelector("#menulist").value = false
	var menulist = document.querySelectorAll("#menulist option")
	var len = menulist.length
	for (var i = 0; i < len; i++) {
		menulist[i].style.display = "grid"
	}
	for (var i = 0; i < len; i++) {
		if (!(menulist[i].value).includes(condition)) {
			menulist[i].style.display = "none"
		}
	}
}

function searchChange() {
	var inputvalue = document.getElementById("searchitem").value
	menubycondition(inputvalue)
}

function menuInfo(selected) {
	document.querySelector("#catslist").value = false
	var info = selected.value
	infos = info.split(' ')
	if (infos.length > 4) {
		infos[1] = infos[0] + ' ' + infos[1]
		infos = infos.splice(1,)
	}
	//console.log(infos)

	var name = infos[0]
	var price = infos[1]
	var cat = infos[2]
	var etc = infos[3].split(',')
	var shot = etc[0]
	var cream = etc[1]
	var cinnamon = etc[2]
	var ice = etc[3]
	var soldout = etc[4]
	var image = etc[5]

	var cats = document.querySelector("#rcat")
	for (var i = 0; i < cats.options.length; i++) {
		if (cats.options[i].value == cat) {
			cats.options[i].selected = true
		}
	}

	document.getElementById("rname").value = name
	var rtopping = document.getElementById("rtopping")

	// value에 저장된 true, false 값은 bool 값이 아닌 str
	if (shot === 'true') {
		if (cream === 'true') {
			rtopping[3].selected = true
		}
		else if (cinnamon === 'true') {
			rtopping[4].selected = true
		}
		else {
			rtopping[1].selected = true
		}
	}
	else {
		if (cream === 'true') {
			rtopping[2].selected = true
		}
		rtopping[0].selected = true
	}

	document.getElementById("rprice").value = price

	if (ice === 'true') {
		document.getElementById("rice").checked = true
	} else {
		document.getElementById("rice").checked = false
	}

	if (soldout === 'true') {
		document.getElementById("rsoldout").checked = true
	} else {
		document.getElementById("rsoldout").checked = false
	}

	document.getElementById("curimg").src = image

}

//JH	X버튼 누르면 메뉴 화면으로 나가기
$(document).ready(function () {
	$("#Xbtn").click(function () {
		window.location.href = "/managerpage"
	})
})


