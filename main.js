function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function from running
    audio.currentTime=0; //revind to start
    audio.play();
    key.classList.add('playing');
  }

function removeTransition(e){
    if(e.propertyName !== 'transform')return; //skip if its not a transform
    this.classList.remove('playing')
  }

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

// drum kit.ty button
const button= document.querySelector('h1');
function playCat(e){
    const audioCat= document.getElementById('cat');
    if(!audioCat) return;
    audioCat.currentTime=0;
    audioCat.play();
    button.classList.add('playing');
  }

button.addEventListener('transitionend', removeTransition);
button.addEventListener('click', playCat);
