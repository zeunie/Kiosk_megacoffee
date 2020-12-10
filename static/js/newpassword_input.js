function newpassword() {

    var input_num = $('#insert_num').text()
    if (input_num.length != 4) {
        alert("비밀번호 4자리를 입력해주세요.")
        input_num.empty()
    } else {
        new Store_adapter().setPW(input_num)
        alert('비밀번호가 정상적으로 변경되었습니다.')
        window.location.href = "/managerpage"
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