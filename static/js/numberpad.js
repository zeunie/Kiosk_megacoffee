function open_checkpoint_popup(stampNum) {
    //JH    서버에 적립 정보 전달
    const ph = document.getElementById("phonenumber").innerText
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
    window.location.href = "/change_to_complete"
}

function number0() {
    $('#phonenumber').append('0')
}

function number1() {
    $('#phonenumber').append('1')
}

function number2() {
    $('#phonenumber').append('2')
}

function number3() {
    $('#phonenumber').append('3')
}

function number4() {
    $('#phonenumber').append('4')
}

function number5() {
    $('#phonenumber').append('5')
}

function number6() {
    $('#phonenumber').append('6')
}

function number7() {
    $('#phonenumber').append('7')
}

function number8() {
    $('#phonenumber').append('8')
}

function number9() {
    $('#phonenumber').append('9')
}

function delete_one() {
    $('#phonenumber').pop
}

function delete_all() {
    $('#phonenumber').empty()
}