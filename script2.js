function MakeBoard() {
  const table = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  };
  const board = document.querySelector(".gameboard");
  for (i = 0; i <= 8; i++) {
    board.innerHTML += `<div class="box" id="${i}">${table[i]}</div>`;
  }
  ClickAbleBoxes(table);
}

MakeBoard();

function ClickAbleBoxes(array) {
  let X = "X";
  let O = "O";
  const boxs = document.querySelectorAll(".box");
  boxs.forEach((i) => {
    i.addEventListener("click", () => {
      array[i.id] = X;
      i.innerHTML = array[i.id];
      i.classList.add("unclickable");
      [X, O] = [O, X];
      whoWin(array);
    });
  });
}

function whoWin(ex) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winConditions.forEach((j) => {
    const findMatch = j.map((x) => ex[x]);
    const a = findMatch.every((filed) => filed == "X");
    const b = findMatch.every((field) => field == "O");
    if (a) {
      resetAndWin("X");
    } else if (b) {
      resetAndWin("O");
    }
  });
}

function resetAndWin(q) {
  const body = document.querySelector("body");
  body.innerHTML = `<div class="win">${q} wins</div>`;
  const mydiv = document.querySelector(".win");
  window.onclick = function (event) {
    if (event.target == mydiv) {
      mydiv.remove();
      location.reload();
    }
  };
}

function CongrPop(q) {}
//   console.log("working");
// for (let i = 0; i <= 8; i++) {
//     x[i] = "";
//   }
