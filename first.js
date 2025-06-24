let btns = document.querySelectorAll(".square");
let prsnX= "true";
let reset=document.querySelector(".reset");
let container=document.querySelector(".container");
let msg = document.querySelector("#msg");
let heading= document.querySelector(".heading");
let newGame= document.querySelector(".newGame");
let winner=document.querySelector(".winner");
let draw= document.querySelector("#draw");
let drawTxt= document.querySelector("#drawTxt");
let newGames= document.querySelector(".newGames");
let turn= document.querySelector("#turn");
let msgTurn= document.querySelector("#msgTurn");


//saving the winning patterns in the form of 2d arrays:
let winningPatterns = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
let variableCount= 0;

//making the game clickable:
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(prsnX==="true"){
            btn.innerText="X";
            btn.style.backgroundColor="#4c7b8b";
            btn.style.color="#efb036";
            msgTurn.innerText="Player O Turn";
            prsnX="false";
        }else{
            btn.innerText="O";
            btn.style.backgroundColor="#4c7b8b";
            btn.style.color= "#a31d1d";
            msgTurn.innerText="Player X Turn";
            prsnX="true";
        }
        variableCount++; //variable count increases for every click of the button. max value is 9 as we have 9 buttons.
        //we have to disable that button which we clicked, because once we click a button, it is not reclickable in this game. so,
        btn.disabled = true; //this disable function is not usable for div it works only for button and other 2 or 3 elements, as it is not usable for div thats why we used button element for 9 boxes instead of div
        confirmWinner();
    })
});

const confirmWinner=() => {
    for(let pattern of winningPatterns){
        let box1= btns[pattern[0]].innerText;
        let box2= btns[pattern[1]].innerText;
        let box3= btns[pattern[2]].innerText;

        if(box1!="" && box2!="" && box3!=""){
            if(box1===box2 && box2===box3 && box3===box1){
                console.log(`winner is player ${box1}`);
                winChange(box1);
                disableAll();
            }
        }

        //if the above 2 if block didnt work that means the winner is not yet decided and then the js will come down to here and now we have to check if the game is draw i.e. all the 9 boxes are clicked here but winner is not yet found then the result is draw.
        if(variableCount == 9)
        {
            //  draw.style.visibility="visible";
             draw.style.display="flex";
             drawTxt.style.display="block";
             newGames.style.display="block";
             turn.style.display="none";
             msgTurn.style.display="none";
             draw.style.marginTop= "480px";
             draw.style.gap="30px";
        }
    }
};

function winChange(box1){
    msg.innerText=`Winner Is Person ${box1}`;
    // winner.style.visibility="visible";
    winner.style.display="flex";
    msg.style.display="block";
    newGame.style.display="block";
    turn.style.display="none";
    msgTurn.style.display="none";
    winner.style.marginTop="530px";
    winner.style.gap="30px";
};

//we have to disable all the buttons as soon as the game is finished with the winner
function disableAll(){
    btns.forEach((btn)=>{
        btn.disabled = true;
    })
};



reset.addEventListener("click",()=>{
    btns.forEach((btn)=>{
        btn.innerText="";
        btn.style.backgroundColor="white";
        //and then apart from above 2 activities reset button should also be able to bring the tic tac toe game into action, so we have to again type the above "clickabel code"here:
        //hence for that we have to unable the working of the buttons that we disabled before and we also have to reinitialize the prsnx to "true".
        btn.disabled= false;
        msgTurn.innerText="Player X Turn";
        turn.style.display="block";
        msgTurn.style.display="block";
        prsnX="true";
        variableCount=0;
    })
});


let workingNewGame=()=>{
    btns.forEach((btn)=>{
        btn.innerText="";
        btn.style.backgroundColor="white";
        btn.disabled= false;
        prsnX="true";
        // winner.style.visibility="hidden";
        winner.style.display="none";
        winner.style.marginTop="0px";
        winner.style.gap="0px";
        // draw.style.visibility="hidden";
        draw.style.display="none";
        draw.style.marginTop="0px";
        draw.style.gap="0px";
        msgTurn.innerText="Player X Turn";
        turn.style.display="block";
        msgTurn.style.display="block";
        variableCount=0;
    })
};

newGame.addEventListener("click",workingNewGame);
newGames.addEventListener("click",workingNewGame);