const keyAll = document.querySelectorAll('.key');

const keyOnKeyDown = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //catches keypresses with no audio or transition
    audio.currentTime = 0;
    audio.play();
    key.classList.toggle('playing');
}

function keyOnTransitionEnd(e) {
    if (e.propertyName !== 'transform') return; //catches any key that hasn't toggled
    this.classList.remove('playing');
}

keyAll.forEach(key => {
    key.addEventListener('transitionend', keyOnTransitionEnd)
})

document.addEventListener('keydown', keyOnKeyDown);