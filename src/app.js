// load assets
function requireAll(r) { r.keys().forEach(r) }
requireAll(require.context('./img/', true))

window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
require('bootstrap')

var WebFont = require('webfontloader')

WebFont.load({
  google: {
    families: ['Quicksand:300,400:latin-ext']
  },
  custom: {
    families: ['Ionicons'],
    urls: ['assets/css/fonts.css']
  }
});

import './scss/index.scss'
//console.log("hello world!")

// use tooltip and popover components everywhere
$(function (){
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})

// Waves.js
import '../node_modules/node-waves/src/js/waves.js'

var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
$('input[autofocus]').siblings('label, i').addClass('active');
$(document).on('change', input_selector, function() {
    if ($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
        $(this).siblings('label, i').addClass('active');
    }
});
$(document).on('focus', input_selector, function() {
    $(this).siblings('label, i').addClass('active');
});
$(document).on('blur', input_selector, function() {
    var $inputElement = $(this);
    if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
        $inputElement.siblings('label, i').removeClass('active');
    }
});

//Initialization
Waves.attach('.btn:not(.btn-flat), .btn-floating', ['waves-light']);
Waves.attach('.btn-flat', ['waves-effect']);
Waves.attach('.view .mask', ['waves-light']);
Waves.attach('.waves-light', ['waves-light']);
Waves.attach('.waves-effect', ['waves-effect']);
Waves.attach('.navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar form, .nav-tabs .nav-item', ['waves-light']);
Waves.attach('.pager li a', ['waves-light']);
Waves.attach('.pagination .page-item .page-link', ['waves-effect']);
Waves.init();
"use strict";