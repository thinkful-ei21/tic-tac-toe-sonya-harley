'use strict';

const state = {
  playCharacter: 'x',
  cellValue: ['','','','','','','','','']
};

function handleNewGameButton() {
  $('#new-game').click(function() {
    location.reload();
  });
}

function handlePlay() {
  $('.board').on('click', '.cell', function(event) {
    console.log(this);
    const cellId = parseInt($(this).attr('id'), 10);
    state.cellValue[cellId] = state.playCharacter;
    console.log(cellId);

  } );
}

function render(id) {
  
}
function bindEventListeners() {

}

function handleWin() {}

function checkForWin() {}

// State modification functions

// Render functions

// Event Listeners


function main () {
  render(),
  bindeEventListeners()
}

$(main());




