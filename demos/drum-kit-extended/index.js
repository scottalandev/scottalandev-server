const numDrums = document.querySelectorAll(".drum").length;

const singleDrums = ["w", "a", "s", "d", "j", "k", "l"];

let bpm;
let loopInt;

// add click listener to each drum
for (var i = 0; i < numDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const buttonHTML = this.innerHTML;
    makeSound(buttonHTML);
  });
}

// detect keyboard presses and fire makeSound (for singleDrum members) or initiate loopBass (for spacebar)
document.addEventListener("keydown", (e) => {
  if (singleDrums.includes(e.key) && e.repeat == false) makeSound(e.key);
  if (e.code == "Space" && e.repeat == false) {
    bpm = document.getElementById('tempoBpm').value;
    console.log(bpm);
    loopBass(bpm);
  }
});

// detect release of spacebar to cancel bass loop
document.addEventListener("keyup", (e) => {
	if (e.code == "Space" && e.repeat == false) stopLoop();
});

// function for single drum sounds
function makeSound(key) {
  switch (key) {
    case "w":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "l":
      var cym = new Audio("sounds/crash.mp3");
      cym.play();
      break;

    default:
      console.log(key);
  }
}

function loopBass(bpm) {
  playBeat();
	loopInt = setInterval(playBeat, (60000/bpm));
}

function playBeat() {
	let beat = new Audio("sounds/kick-bass.mp3");
  beat.play();
}

function stopLoop() {
	clearInterval(loopInt);
	loopInt = null;
}
