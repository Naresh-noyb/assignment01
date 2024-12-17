$(document).ready(function () {
    $('nav ul li a').hover(function () {
        $(this).css('color', '#ff5733'); // Change color on hover
    }, function () {
        $(this).css('color', 'white'); // Reset color
    });
});
