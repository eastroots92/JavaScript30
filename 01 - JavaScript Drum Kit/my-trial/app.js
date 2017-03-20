// First trial - Mess
// Event Target was wrong: it was not buttons but window.
(function(global) {
  'use strict';
  var buttonList   = document.querySelectorAll('.drum'),
      audioList    = document.querySelectorAll('.audio');

  buttonList = Array.prototype.slice.call(buttonList);
  audioList = Array.prototype.slice.call(audioList);
  function matchAudio(key) {
    var matchAudio;
    audioList.forEach(function(item) {
      if ( item.dataset.key === key ) {
        matchAudio = item;
      }
    });
    return matchAudio;
  }

  function playMusic(audio) {
    audio.play();
  }

  buttonList.forEach(function(item) {
    var key = item.dataset.key;
    item.audio = matchAudio(key);
    item.addEventListener('click', function(event) {
      event.preventDefault();
      item.audio.play();
    });
  });
})(window);


// Second Trial - Better
// Got a hing from Wes Boss
(function(global) {
  'use strict';
  var audioList  = Array.prototype.slice.call(document.querySelectorAll('.audio')),
      buttonList = Array.prototype.slice.call(document.querySelectorAll('.drum')),
      audioObj, buttonObj;
  var audioObj = {};
  audioList.forEach(function(item) {
    var key = item.dataset.key;
    audioObj[key] = item;
  });
  buttonList.forEach(function(item) {
    var key = item.dataset.key;
    buttonObj[key] = item;
  });
  global.addEventListener('keydown', function(e) {
    if ( audioObj.hasOwnProperty(e.keyCode) && buttonObj.hasOwnProperty(e.keyCode) ) {
      audioObj[e.keyCode].play();
      button.classList.add('fire');
      setTimeout(function() {
        button.classList.remove('fire');
      }, 100);
    }
  });
})(window);