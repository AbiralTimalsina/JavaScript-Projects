let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = false;

const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

const resetGame = () => {
    turnO = false;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
    resetBtn.classList.add("hide");
}
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        console.log(count);
        if (turnO) {
            box.style.color = "#006C67";
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.style.color = "#DE3C4B";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        resetBtn.classList.remove("hide");
        checkWinner(count);
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    resetBtn.classList.add("hide");
    msg.style.color = "#4D8B31"

}
const showDraw = () => {
    msg.innerText = "The Game is Draw!";
    msgContainer.classList.remove("hide");
    document.getElementById("msg").style.color = "#FFC800"
    disableBoxes();
    resetBtn.classList.add("hide");

}

const checkWinner = (count) => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (count === 9) {
            showDraw();
        }

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                break;
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);