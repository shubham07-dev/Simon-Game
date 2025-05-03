let gameseq=[];
let userseq=[];

let highLevel=0;

let btns=["red","green","yellow","purple"]
let level=0;

let started=false;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started")
        started=true;
        levelup();
    }
})

function flash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250)
}

function flashGreen(btn){
    btn.classList.add("flashGreen");
    setTimeout(function(){
        btn.classList.remove("flashGreen");
    },250)
    }

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`)
    gameseq.push(randColor);
    // console.log(randIdx)
    console.log(gameseq)

    flash(randbtn);
}

function checkSeq(idx){
    // let idx=level-1;
    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,500);
        }
    }else{
    h2.innerHTML=`Game Over !! Your Score is <b>${level}<b> <br> Press any key to start again`;
    document.querySelector("body").style.backgroundColor="red";

    setTimeout(() => {
        document.querySelector("body").style.backgroundColor="white";
    }, 300);

    highScore();
    Reset();

    }
}


function btnPress(){
    let btn=this;
    flashGreen(btn);

    let usercolor=btn.getAttribute("id");
    // console.log(usercolor);
    userseq.push(usercolor);
    checkSeq(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn")

for(btn of allbtns){
    btn.addEventListener("click",btnPress)
}



function Reset(){
    started=false;
    gameseq=[]
    userseq=[]
    level=0;
}


function highScore(){
    let h3=document.querySelector("h3");
    if(level>highLevel){
        highLevel=level;
    }
    h3.innerHTML=`Your high score is <b>${highLevel}</b>`
}




// it works if we use localStorage in this .
// window.addEventListener("load",function(){
//     let h3=document.querySelector("h3");
//     h3.innerHTML=`Your high score is <b>${highLevel}</b>`
// })