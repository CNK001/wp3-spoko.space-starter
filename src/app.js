// load assets
function requireAll(r) { r.keys().forEach(r) }
requireAll(require.context('./img/', true))

window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
require('bootstrap')


// Web Font Loader
const WebFont = require('webfontloader')

WebFont.load({
  google: {
    families: ['Quicksand:300,400:latin-ext']
  },
  custom: {
    families: ['Ionicons'],
    urls: ['assets/css/fonts.css']
  }
});

// Headroom.js
const Headroom = require('headroom.js')
// grab an element
const myElement = document.querySelector(".headroom"); 
// construct an instance of Headroom, passing the element
const headroom = new Headroom(myElement, {
    tolerance: 5,
    offset : 260,
    classes: {
      initial: "animated",
      pinned: "slideDown",
      unpinned: "slideUp"
    }
})
// initialise
headroom.init(); 

import './scss/index.scss'
// console.log("hello world!")

// use tooltip and popover components everywhere
$(function (){
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})

// Waves.js
import '../node_modules/node-waves/src/js/waves.js'

//Initialization
Waves.attach('.btn:not(.btn-flat), .btn-floating', ['waves-light'])
Waves.attach('.btn-flat', ['waves-effect'])
Waves.attach('.view .mask', ['waves-light'])
Waves.attach('.waves-light', ['waves-light'])
Waves.attach('.waves-effect', ['waves-effect'])
Waves.attach('.navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar form, .nav-tabs .nav-item', ['waves-light'])
Waves.attach('.pager li a', ['waves-light'])
Waves.attach('.pagination .page-item .page-link', ['waves-effect'])
Waves.init()
"use strict"

