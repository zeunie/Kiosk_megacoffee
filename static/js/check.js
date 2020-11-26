function fail_message() {
    open_cancle_popup()
}

var time_pause = 0;
$(document).ready(function() {

    var seconds = 30;
    var minutes = 0;

    function calculate() {
        setTimeout(calculate, 1000);
        $('#showTime').html('0:' + minutes + '0:' + seconds);
        console.log(time_pause)
        if (time_pause == 0) {
            seconds--;
        } else {
            seconds;
        }
        if (seconds < 0) {
            seconds = 30;
            minutes--;
            if (minutes < 0) {
                minutes = 0;
                seconds = 0;

            }
            fail_message();

        }
    }

    calculate();
});

function change_to_checkpoint() {
    window.location.href = '/change_to_checkpoint'
}

function change_to_complete() {
    window.location.href = '/change_to_complete'
}

function open_checking_popup() {
    $('#checking').css('opacity', '1');
    $('#checking').css('visibility', 'visible')
    time_pause = 1;
    setTimeout(() => close_checking_popup(), 2500);
}

function open_checkpoint_popup() {
    $('#checkpoint').css('opacity', '1');
    $('#checkpoint').css('visibility', 'visible');
    time_pause = 1
}

function close_checking_popup() {
    $('#checking').css('opacity', '0');
    $('#checking').css('visibility', 'hidden')
    time_pause = 0
    setTimeout(() => open_checkpoint_popup(), 1000);
}

function close_checkpoint_popup() {
    $('#checkpoint').css('opacity', '0');
    $('#checkpoint').css('visibility', 'hidden')
    time_pause = 0
}

function open_cancle_popup() {
    $('#cancle').css('opacity', '1');
    $('#cancle').css('visibility', 'visible');
    time_pause = 1
    setTimeout(() => close_cancle_popup(), 2500);
}

function close_cancle_popup() {
    $('#cancle').css('opacity', '0');
    $('#cancle').css('visibility', 'hidden')
    time_pause = 0
}