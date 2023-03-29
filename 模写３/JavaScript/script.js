// 'use strict';

// {
//     const btn = document.querySelector('.toggle_btn');
//     const nav = document.querySelector('.toggle_nav'); 
//     const mask = document.querySelector('#mask'); 


//     btn.addEventListener('click', () => {
//         btn.classList.toggle('activ');
//         nav.classList.toggle('activ');
//         mask.classList.toggle('activ');
//     });

// }


$(function () {
    $('.toggle_btn').on('click', function () {
        if ($('#header').hasClass('activ')) {
            $('#header').removeClass('activ');
        } else {
            $('#header').addClass('activ');
        }
    });
    $('#mask').on('click', function () {
        $('#header').removeClass('activ');
    });
});