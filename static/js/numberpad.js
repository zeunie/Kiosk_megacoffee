var howManyStampsAdded = 0 //스탬프가 적립되었을 경우 여기에 개수를 입력, 개수가 전해진 다음엔 다시 0으로

function open_checkpoint_popup() {
	//JH    ������ ���� ���� ����
	const ph = document.getElementById("phonenumber").innerText
	const stampNum = JSON.parse($("#order").val()).quantity
	let stampInfo = new Stamp("", ph, stampNum, "", "")

	var form = document.createElement('form');
	form.style.visibility = 'hidden'; // no user interaction is necessary
	form.method = 'POST'; // forms by default use GET query strings
	form.action = '/stamp';
	for (key of Object.keys(stampInfo)) {
		var input = document.createElement('input');
		input.name = key;
		input.value = JSON.stringify(stampInfo[key]);
		form.appendChild(input); // add key/value pair to form
	}
	document.body.appendChild(form); // forms cannot be submitted outside of body
	form.submit(); // send the payload and navigate

	howManyStampsAdded = stampNum
		//JH***************

	$('#checkpoint').css('opacity', '1');
	$('#checkpoint').css('visibility', 'visible');
	setTimeout(() => close_checkpoint_popup(), 2500);
}

function close_checkpoint_popup() {
	$('#checkpoint').css('opacity', '0');
	$('#checkpoint').css('visibility', 'hidden')
	change_to_complete()
}

function change_to_complete() {
	const orderInfo = JSON.parse($("#order").val())
	if (howManyStampsAdded) {
		orderInfo.stamp = howManyStampsAdded
	}
	howManyStampsAdded = 0

	let form = document.createElement("form");
	form.style.visibility = "hidden"; // no user interaction is necessary
	form.method = "POST"; // forms by default use GET query strings
	form.action = '/change_to_complete';
	var input = document.createElement("input");
	input.name = "orderList";
	input.value = JSON.stringify(orderInfo);
	form.appendChild(input); // add key/value pair to form
	document.body.appendChild(form); // forms cannot be submitted outside of body
	form.submit(); // send the payload and navigate
}

function number0() {
	var length_check = $('#phonenumber').text()
	if (length_check.length < 11) {
		$('#phonenumber').append('0')
	}
}

function number1() {
	var length_check = $('#phonenumber').text()
	if (length_check.length < 11) {
		$('#phonenumber').append('1')
	}
}

function number2() {
	var length_check = $('#phonenumber').text()
	if (length_check.length < 11) {
		$('#phonenumber').append('2')
	}
}

function number3() {
	var length_check = $('#phonenumber').text()
	if (length_check.length < 11) {
		$('#phonenumber').append('3')
	}
}

function number4() {
	var length_check = $('#phonenumber').text()
	if (length_check.length < 11) {
		$('#phonenumber').append('4')
	}
}

function number5() {
	var length_check = $('#phonenumber').text()
	if (length_check.length < 11) {
		$('#phonenumber').append('5')
	}
}

function number6() {
	var length_check = $('#phonenumber').text()
	if (length_check.length < 11) {
		$('#phonenumber').append('6')
	}
}

function number7() {
	var length_check = $('#phonenumber').text()
	if (length_check.length < 11) {
		$('#phonenumber').append('7')
	}
}

function number8() {
	var length_check = $('#phonenumber').text()
	if (length_check.length < 11) {
		$('#phonenumber').append('8')
	}
}

function number9() {
	var length_check = $('#phonenumber').text()
	if (length_check.length < 11) {
		$('#phonenumber').append('9')
	}
}

function delete_one() {
	var num = $('#phonenumber').text()
	num = num.slice(0, -1)
	$('#phonenumber').empty()
	$('#phonenumber').text(num)
}

function delete_all() {
	$('#phonenumber').empty()
}