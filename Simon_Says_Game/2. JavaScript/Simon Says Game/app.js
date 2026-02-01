let gameSeq = [];
let userSeq = [];
let btns    = ["yellow","red","purple","green"];

let started = false;
let level   = 0;

//Step1:- Key Press --> Game Start
document.addEventListener('keypress',function(){
    if(started == false){
        console.log("Game Started...");
        started = true;
        levelUp();                                            //calling levelUp function for level up when game starts
    };
});

//Step2:- Button flash + level(Up) 1
function gameFlash(btn){                                      //Automatic btn flash by game
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){                                      //User flash function
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

let h2 = document.querySelector('h2');
function levelUp(){
    userSeq = [];                                             //user sequence is set to be empty whenever the level goes up so that the user must enter the sequence from the start
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);              //random btn index choose
    let randColor = btns[randIdx];                            //random color choose                         
    let randBtn = document.querySelector(`.${randColor}`);    //random btn choose
    gameSeq.push(randColor);                                  //pushing random color to game sequence
    console.log(gameSeq);                                    
    gameFlash(randBtn);                                       //to flash random btn
};

//Step3:- Button press[Event Listener]
function checkAns(idx){                                       //Matching Sequence - game & user
    // console.log("curr level: ",level);
    // let idx = level-1;                                     //level - 1 = if level is one the value must be saved at index 0 which is always static
    if(userSeq[idx] === gameSeq[idx]){                        //Checking game flashed button and user clicked button are same or not
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,800);                         //setTimeout is set because if level goes up without any delay and if the same color is flashed again it will not be visible                                            //If the user entered the all the same sequence of button flashed by the game the we level up the game for user
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector('body').style.backgroundColor = 'red';       //when game is over symboling by the background flash as red color effect  
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white'; //after flashing to red color the background again set to white color
        },150);
        reset();                                                  //resetting the game when the game is over
    };
};

function btnPress(){
    let btn = this;
    // console.log(btn);
    userFlash(btn);

    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length-1);                                //last index to be checked which is entered by user
};

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
};

function reset(){                                              //function to reset the game when the game is over
    started = false;
    gameSeq = [];
    userSeq = [];
    level   = 0;
};

//HW:- To track the highest score and prints it on the screen comparing the current score 



