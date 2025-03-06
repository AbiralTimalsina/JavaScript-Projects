let gameSeq=[];
let userSeq = [];
let started = false;
let btns = ['red','green','yellow','purple'];
let level = 0;
let h2 = document.querySelector("h2");
let hiScore = document.querySelector("#hiScore");
let highest = 0;

document.addEventListener("keypress", function(event) {
    if (started ==false){
        started = true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function checkBtn(idx){
    
    if (userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your Score is ${level} <br> Press any key to start the game`;
        document.querySelector("body").style.backgroundColor = "#9f1015";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        if(highest < level){
            hiScore.innerText = level;
            highest = level;
        }
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkBtn(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}



function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}