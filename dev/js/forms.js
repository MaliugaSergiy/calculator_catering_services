$('#contact-form').on('submit', function (e) {
    e.preventDefault();
    var that = $(e.target);
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbzOIIr326S9ii1sDIolM5tzVQ_4s7AtlEkbR_V8uZX079F7fHc/exec',
        data: $(this).serialize(),
        jsonp: 'cb',
        jsonpCallback: 'bingo',
        dataType: 'jsonp',
        success: function bingo(data) {
            console.log(data);
            alertForm({form: that, type: 'alert-success', msg: 'Спасибо, мы вам перезвоним'});
            that.find('textarea').val('');
        },
        error: function () {
            alertForm({
                form: that,
                type: 'alert-danger',
                msg: 'Не удалось отправить сообщение.'
            });
        }
    });
});

function alertForm(alert) {
    var div = $('' + alert.msg + '');
    alert.form.prepend(div);
    div.slideDown(400).delay(3000).slideUp(400, function () {
        alert.form.closest('.modal').modal('hide');
        div.remove();
        setTimeout(function () {
            location.href = "/thanks.php"
        }, 1000);
    });
}

$('#contact-form2').on('submit', function (e) {
    e.preventDefault();
    var that = $(e.target);
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbxJU5PLK12VEIAxzop6VYRZp1bGmbf60I3kvTWhc9WJLGxKBXc/exec',
        data: $(this).serialize(),
        jsonp: 'cb',
        jsonpCallback: 'bingo',
        dataType: 'jsonp',
        success: function bingo(data) {
            console.log(data);
            alertForm({form: that, type: 'alert-success', msg: 'Спасибо, мы вам перезвоним'});
            that.find('textarea').val('');
        },
        error: function () {
            alertForm({
                form: that,
                type: 'alert-danger',
                msg: 'Не удалось отправить сообщение.'
            });
        }
    });
});

function alertForm(alert) {
    var div = $('' + alert.msg + '');
    alert.form.prepend(div);
    div.slideDown(400).delay(3000).slideUp(400, function () {
        alert.form.closest('.modal').modal('hide');
        div.remove();
        setTimeout(function () {
            location.href = "/thanks.php"
        }, 1000);
    });
}

$('#contact-form3').on('submit', function (e) {
    e.preventDefault();
    var that = $(e.target);
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbzDXxVMV15xsoli2m1K_QMaYke6NN-rCo6hMoM9J_rmPsa7Ghsb/exec',
        data: $(this).serialize(),
        jsonp: 'cb',
        jsonpCallback: 'bingo',
        dataType: 'jsonp',
        success: function bingo(data) {
            console.log(data);
            alertForm({form: that, type: 'alert-success', msg: 'Спасибо, мы вам перезвоним'});
            that.find('textarea').val('');
        },
        error: function () {
            alertForm({
                form: that,
                type: 'alert-danger',
                msg: 'Не удалось отправить сообщение.'
            });
        }
    });
});

function alertForm(alert) {
    var div = $('' + alert.msg + '');
    alert.form.prepend(div);
    div.slideDown(400).delay(3000).slideUp(400, function () {
        alert.form.closest('.modal').modal('hide');
        div.remove();
        setTimeout(function () {
            location.href = "/thanks.php"
        }, 1000);
    });
}