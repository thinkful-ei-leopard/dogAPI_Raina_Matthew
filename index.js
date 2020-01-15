'use strict';

function getDogImages(amount) {
  fetch(`https://dog.ceo/api/breeds/image/random/${amount}`)
    .then(response => response.json())
    .then(responseJson => 
      console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

// function displayResults(responseJson) {
//   console.log(responseJson);
//   //replace the existing image with the new one
//   $('.results-img').replaceWith(
//     `<img src="${responseJson.message}" class="results-img">`
//   )
//   //display the results section
//   $('.results').removeClass('hidden');
// }

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