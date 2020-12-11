function check() {
	var input_num = $('#insert_num').text()
	if (new Store_adapter().identifyPW(input_num) != true) {
		alert("비밀번호가 틀렸습니다")
	} else {
		window.location.href = "/change_pw"
	}
}

function cancle() {
	window.location.href = "/managerpage"
}

function number0() {
	var length_check = $('#insert_num').text()
	if (length_check.length < 4) {
		$('#insert_num').append('0')
	}
}

function number1() {
	var length_check = $('#insert_num').text()
	if (length_check.length < 4) {
		$('#insert_num').append('1')
	}
}

function number2() {
	var length_check = $('#insert_num').text()
	if (length_check.length < 4) {
		$('#insert_num').append('2')
	}
}

function number3() {
	var length_check = $('#insert_num').text()
	if (length_check.length < 4) {
		$('#insert_num').append('3')
	}
}

function number4() {
	var length_check = $('#insert_num').text()
	if (length_check.length < 4) {
		$('#insert_num').append('4')
	}
}

function number5() {
	var length_check = $('#insert_num').text()
	if (length_check.length < 4) {
		$('#insert_num').append('5')
	}
}

function number6() {
	var length_check = $('#insert_num').text()
	if (length_check.length < 4) {
		$('#insert_num').append('6')
	}
}

function number7() {
	var length_check = $('#insert_num').text()
	if (length_check.length < 4) {
		$('#insert_num').append('7')
	}
}

function number8() {
	var length_check = $('#insert_num').text()
	if (length_check.length < 4) {
		$('#insert_num').append('8')
	}
}

function number9() {
	var length_check = $('#insert_num').text()
	if (length_check.length < 4) {
		$('#insert_num').append('9')
	}
}

function delete_one() {
	var num = $('#insert_num').text()
	num = num.slice(0, -1)
	$('#insert_num').empty()
	$('#insert_num').text(num)
}

function delete_all() {
	$('#insert_num').empty()
}