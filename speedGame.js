let buttons = [
  document.getElementById('button0'),
  document.getElementById('button1'),
  document.getElementById('button2'),
  document.getElementById('button3')
];

buttons[0].onclick = function() {
  clicked(0);
};
buttons[1].onclick = function() {
  clicked(1);
};
buttons[2].onclick = function() {
  clicked(2);
};
buttons[3].onclick = function() {
  clicked(3);
};

let score = 0;
let current = 0;
let pace = 1500;

function clicked(i) {
  console.log("button number", i);
  if (i !== current) {
    console.log("oops!");
    gameOver();
  } else {
    score++;
    pace = pace - 10;
    document.getElementById('score').innerHTML = score;
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickNext() {
  let next = pickNew(current);

  buttons[current].style.backgroundColor = "white";
  buttons[next].style.backgroundColor = "orange";

  current = next;
  console.log("current:", current);

  timer = setTimeout(pickNext, pace);

  function pickNew(previous) {
    let next = getRndInteger(0, 3);

    if (next != previous) {
      return next;
    } else {
      return pickNew(previous);
    }
  }
}
function gameOver() {
  clearTimeout(timer);
  for (let i = 0; i < 4; i++){
    buttons[i].style.backgroundColor = 'red';
    buttons[i].onclick = null;
  }
  let overlay = document.getElementById('win');
  let gameover = document.getElementById('gameover');

  overlay.style.visibility = 'visible';
  gameover.innerHTML = 'Ups, game over! <br> Your final score is ' + score;

}
