const usernameSubmit=(event)=>{
event.preventDefault();
const username = document.getElementById("username").value;
if(username.length<=5){
    alert("Username should be more than 5 character long");
    return;
} 
document.getElementById("user").innerHTML=username;

// Hide username box 

document.getElementById("username_get").style.display="none";
document.getElementById("game_div").style.display="block";
}


const startGame=(side)=>{
    document.getElementById("results").style.display="none";
    //Showing flipping coin screen
    document.getElementById("flipping").style.display="block";

    setTimeout(()=>{
        getResult(side);
        document.getElementById("flipping").style.display="none";
        document.getElementById("results").style.display="block";

    }, 2000)

}

//game logic

const getResult=(side)=>{
    const coin_side = Math.floor(Math.random()*(2-1+1)+1);

    let flipped_side = "";

    if(coin_side===1){
        flipped_side="Head";
    }
    else{
        flipped_side="Tail";
    }

    if(coin_side===1){
        if(side==="head"){
            document.getElementById("results").innerHTML= "<h1>Yes, It's a " + flipped_side + "<br>You won the toss!</h1>";
            document.getElementById("results").style.backgroundColor="#508D69";
            document.getElementById("results").style.color="white";
        }
        else{
            document.getElementById("results").innerHTML= "<h1>Oops, It's a " + flipped_side + "<br>You lost the toss!</h1>";
            document.getElementById("results").style.backgroundColor="#D83F31";
            document.getElementById("results").style.color="white";
        }
    }
    else{
        if(side==="tail"){
            document.getElementById("results").innerHTML= "<h1>Yes, It's a " + flipped_side + "<br>You won the toss!</h1>";
            document.getElementById("results").style.backgroundColor="#508D69";
            document.getElementById("results").style.color="white";
        }
        else{
              document.getElementById("results").innerHTML= "<h1>Oops, It's a " + flipped_side + "<br>You lost the toss!</h1>";
            document.getElementById("results").style.backgroundColor="#D83F31";
            document.getElementById("results").style.color="white";   
        }
    }
}