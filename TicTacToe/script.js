function reset() {
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
  });
}

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let turn = true; //playerX , playerY
let player = document.querySelector("h2");

const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerHTML = "X";
      player.innerHTML = "Player O to play";
    } else {
      box.innerHTML = "O";
      player.innerHTML = "Player X to play";
    }
    box.disabled = true;
    turn = turn ? false : true;
    console.log("box was cliked");
    winner();
  });
});

const winner = () => {
  for (let pattern of winpattern) {
    let line =
      boxes[pattern[0]].textContent +
      boxes[pattern[1]].textContent +
      boxes[pattern[2]].textContent;
    console.log(line);
    if (line == "XXX") {
      alert("Player X Won the match");
      reset();
    } else if (line == "OOO") {
      alert("Player O Won the match");
      reset();
    }
  }
};
