$(function () {

    var googleApiKEy = 'AIzaSyAeaCdWEoguKgVKsPGEDMTIHRTHdf67iO0';
    var googleApiKEy = 'AIzaSyBCMn3GeAkyi7CeXcq7PDkmlhz039LKnVw';

    $('.dropdown').click(function (e) {
        var dd = $(e.target);
        if (!dd.hasClass('.dropdown')) {
            dd = dd.parents('.dropdown');
        }
        dd.toggleClass('opened');
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    $('.checkbox').click(function (e) {
        var dd = $(e.target);
        if (!dd.hasClass('.checkbox')) {
            dd = dd.parents('.checkbox');
        }
        dd.toggleClass('checked');
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    $('#toggle-notifications').click(function () {
        var nfs = $('#notifications');
        if (nfs.length > 0) {
            if (nfs.css('display') === 'none') {
                nfs.show();
            } else {
                nfs.hide();
            }
        }

    });

    $('.flip-toggle').click(function (e) {
        $(e.target).parents('.flip-container').toggleClass('flipped');
    });

    $('.top-menu-toggle').click(function (e) {
        $(e.target).parents('.header').toggleClass('opened');
    });

    var win = $(window);
    var header = $('.header.transparent');
    if (header.length > 0) {
        win.scrollTop() > 0 ? header.removeClass("transparent") : header.addClass("transparent");
        win.on("scroll", function () {
            win.scrollTop() > 0 ? header.removeClass("transparent") : header.addClass("transparent");
        });
    }

    $('.modal-control-open').click(function (e) {
        var control = $(e.target);
        if (!control.hasClass('modal-control-open')) {
            control = control.parents('.modal-control-open');
        }
        var targetId = control.data('target');
        var modal = $('#'+targetId);
        var otherModals = $('.modal');
        otherModals.removeClass('opened');
        modal.addClass('opened');
    });

    $('.modal-control-close').click(function (e) {
        var control = $(e.target);
        if (!control.hasClass('modal-control-close')) {
            control = control.parents('.modal-control-close');
        }
        control.parents('.modal').removeClass('opened');
    });

    $('.modal-control-commit').click(function (e) {
        var control = $(e.target);
        if (!control.hasClass('modal-control-commit')) {
            control = control.parents('.modal-control-commit');
        }
        control.parents('.modal').removeClass('opened');
    });

    $('.modal-tab').click(function(e){
        var control = $(e.target);
        if (!control.hasClass('modal-tab')) {
            control = control.parents('.modal-tab');
        }
        var modal = control.parents('.modal');
        var targetId = control.data('target');

        modal.find('.modal-tab').removeClass('opened');
        modal.find('.modal-tab-content').removeClass('opened');
        control.addClass('opened');
        modal.find('#'+targetId).addClass('opened');
    });

    $(window).on('resize', fix_size);
    fix_size();

});

function fix_size() {

    var images = $('.image-container img.resizable');
    images.each(setsize);

    function setsize() {
        var img = $(this),
            img_dom = img.get(0),
            container = img.parents('.image-container');
        if (img_dom.complete) {
            resize();
        } else img.one('load', resize);

        function resize() {
            if ((container.width() / container.height()) < (img_dom.width / img_dom.height)) {
                img.height('100%');
                img.width('auto');
                return;
            }
            img.width('100%');
            img.height('auto');
        }
    }
}

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 59.9316203, lng: 30.3041552},
        zoom: 13
    });
}