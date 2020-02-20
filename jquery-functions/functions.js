$(document).ready(() => {
    $('button.addClass').click(() => {
        $('#addClass').addClass('red');
    });
    $('button.slideUp').click(() => {
        $('#slideUp').slideUp();
    });
    $('#slideDown').hide();
    $('button.slideDown').click(() => {
        $('#slideDown').slideDown();
    });
    $('#slideToggle').hide();
    $('button.slideToggle').click(() => {
        $('#slideToggle').slideToggle();
    });
    $('button.append').click(() => {
        $('#append').append('<p>Sint aute tempor incididunt eiusmod irure aute consequat ut esse. Quis exercitation qui id duis excepteur mollit ea. Sunt adipisicing dolor velit qui dolor eu cillum esse ea voluptate officia enim minim mollit. Tempor veniam incididunt deserunt irure commodo commodo ullamco excepteur fugiat minim ipsum. Sint ut labore irure esse voluptate Lorem dolore adipisicing nisi do id duis. Ipsum mollit excepteur labore labore anim qui.</p>');
    });
    $('button.hide').click(() => {
        $('#hideshow').hide();
    });
    $('button.show').click(() => {
        $('#hideshow').show();
    });
    $('#fadeIn').hide();
    $('button.fadeIn').click(() => {
        $('#fadeIn').fadeIn();
    });
    $('button.fadeOut').click(() => {
        $('#fadeOut').fadeOut();
    });
    $('button.before').click(() => {
        $('#beforeafter').before('<p>Sunt magna ut aliquip aliquip sunt Lorem tempor anim laborum duis minim voluptate nulla.</p>');
    });
    $('button.after').click(() => {
        $('#beforeafter').after('<p>Veniam excepteur reprehenderit do culpa.</p>');
    });
});