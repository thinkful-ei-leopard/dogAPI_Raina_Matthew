'use strict';

function getDogImages(amount) {
  fetch(`https://dog.ceo/api/breeds/image/random/${amount}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //display the results section
  let html = '<h2>Look at these dogs!</h2>';
  responseJson.message.forEach(img => {
    html += `<img src='${img}' alt='Doggy'/>`;
  });
  $('.results').html(html);
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let amount = $('.dogAmount').val();
    getDogImages(amount);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});