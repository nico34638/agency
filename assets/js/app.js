
let $ = require('jquery')
require('../css/app.css');
require('select2')

$('select').select2()
let $contactButton = $('#contactButton')
$contactButton.click(e => {
  e.preventDefault()
  $('#contactForm').slideDown();
  $contactButton.slideUp();
})

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// var $ = require('jquery');

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
