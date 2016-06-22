$(document).ready(function() {

  console.log('SANITY CHECK!! app.js loaded!');

  document.querySelector('#carbon').addEventListener('click', function () {
  console.log('Sphere was clicked!');
  });

  document.querySelector('#cube').addEventListener('click', function () {
  this.setAttribute('material', 'color', 'red');
  console.log('I was clicked!');
});
  
});