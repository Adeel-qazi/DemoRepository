console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");   //backgroung music
let audioTurn = new Audio("ting.mp3");   //turn x or y
let gameover = new Audio("gameover.mp3"); 
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X";   //if turn is equal to x so return 0 otherwise return x
}

// Function to check for a win
const checkWin = ()=>{    //if someone wins so this function returns true and playing the gameover's sound and would reset and would show the picture
    let boxtext = document.getElementsByClassName('boxtext');   //we got many elements named by boxtext
    let wins = [
        [0, 1, 2, 5, 5, 0],           //[5,5,0]=3,4,5    //012 have to add transform property and how much translate do you do in x , y and rotate  (5,5,0)
        [3, 4, 5, 5, 15, 0],                            //345
        [6, 7, 8, 5, 25, 0],                            //678
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{      //logic    if (e[0].x=== e[1].x) && (e[2].x=== e[1].x) && e[0].x !== empty)
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";  // x or 0 won   isgameover will be true. 
            isgameover = true;       //we got element named imgbox and tagname img's style's width is equal to 200px
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";     /*width is 0 but after wining of x or 0 width of img will be 200*/
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;   //style the line transform( translate(x,y) rotate) how much translate do you do in x , y and rotate
            document.querySelector(".line").style.width = "20vw";     //(``) It is back tag     /*width of line is zero when someone won so width of line is 20vw*/
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");    //we got many elements named by box
//return html  array collection. element is box
Array.from(boxes).forEach(element =>{      
    let boxtext = element.querySelector('.boxtext');  //change the boxtext's content
    element.addEventListener('click', ()=>{     //put the event listener on every box(element is box)
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;  //if turn is x or 0
            turn = changeTurn();      //call the changeturn then process there
            audioTurn.play();         //playing audioTurn song
            checkWin();            //check if someone wins
            if (!isgameover){         //if isgameover is not true so i will change turns otherwise not
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');   //we got all elements named boxtext
    Array.from(boxtexts).forEach(element => {                //search each and every boxtext element is div
        element.innerText = "";
    });            //game is reset
    turn = "X";  //game is over therefore i want restart game. seeing turn x 
    isgameover = false;    
    document.querySelector(".line").style.width = "0vw";   //when someone reset so width of line is zero
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";   //game is reset so width of img is 0;
})