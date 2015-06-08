$(document).ready(function () {
    $('.image').click(function () {
        $(this).effect('bounce', { times: 1 }, 300);
    });

    $('.image').mouseenter(function () {
        $(this).css({ "border": "3px #0288AD solid" }, "fast");
    });

    $('.image').mouseleave(function () {
        $(this).css({ "border": "3px black solid" }, "fast");
    });
});