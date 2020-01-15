'use strict';

function getDogImages(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status === 'success') {
        displayResults(responseJson);
      } else {
        displayError(responseJson);
      }
    }
    )
    .catch(error => alert('Something went wrong. Try again later.'));  
}

function displayError(responseJson) {
  let html = `<h2>Error! ${responseJson.code}</h2> <p>${responseJson.message}</p>`;
  $('.results').html(html);
  $('.results').removeClass('hidden');
}

function displayResults(responseJson) {
  console.log(responseJson);
  //display the results section
  let html = `<h2>Look at these dogs!</h2> <img src='${responseJson.message}' alt='Doggy'/>`;
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