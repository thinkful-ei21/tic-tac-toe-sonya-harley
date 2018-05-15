'use strict';

const state = {
  playCharacter: 'x',
  cellValue: ['','','','','','','','','']
};

// State modification functions

function togglePlayCharacter() {
  if (state.playCharacter === 'x') {
    state.playCharacter = 'o';
  } else {
    state.playCharacter = 'x';
  }
}

function updateCellValues(id) {
  state.cellValue.splice(id, 1, state.playCharacter);
}

function handleWin() {}

function checkForWin() {}


// Render functions

function render() {

  

  $('.board').html(
    `<div class="row">
    <div class="cell" id="0">
        <p>${state.cellValue[0]}</p>
    </div>
    <div class="cell" id="1">
        <p>${state.cellValue[1]}</p>
    </div>
    <div class="cell" id="2">
        <p>${state.cellValue[2]}</p>
    </div>
    </div>
    <div class="row">
    <div class="cell" id="3">
        <p>${state.cellValue[3]}</p>
    </div>
    <div class="cell" id="4">
        <p>${state.cellValue[4]}</p>
    </div>
    <div class="cell" id="5">
        <p>${state.cellValue[5]}</p>
    </div>
    </div>
    <div class="row">
    <div class="cell" id="6">
        <p>${state.cellValue[6]}</p>
    </div>
    <div class="cell" id="7">
        <p>${state.cellValue[7]}</p>
    </div>
    <div class="cell" id="8">
        <p>${state.cellValue[8]}</p>
    </div>
    </div>
    `);
}

// Event Listeners

function handlePlay() {
  $('.board').on('click', '.cell', function() {
    const cellId = parseInt($(this).attr('id'), 10);
    updateCellValues(cellId)
    togglePlayCharacter();
    render();
  } );
}

function handleNewGameButton() {
  $('#new-game').click(function() {
    location.reload();
  });
}

function bindEventListeners() {
  handlePlay();
  handleNewGameButton();
}

function main () {
  render(),
  bindEventListeners();
}

$(main());




