console.log("Welcome to game!")

let audioturn = new Audio("./music/ting.mp3")
let gameoveraudio = new Audio("./music/gameover.mp3")
let gamemusic = new Audio("./music/music.mp3")
let turn = "X"

let isgameover = false

gamemusic.play();

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const checkwin = () => {
    let boxtexts = document.getElementsByClassName('bttn')
    let win = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
    ]
    
    win.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.Turn').innerText = boxtexts[e[0]].innerText + " WON"
            isgameover = true;
            // return ;
        }

    })

    
    }


    let cnt =0
//  game logic


let boxes = document.getElementsByClassName("btn");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.bttn');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            cnt+=1
            
            checkwin();
            audioturn.play();

            if (!isgameover) {
                document.getElementsByClassName("Turn")[0].innerText = "Turn for " + turn;
                // return ;
            }
            if(cnt===9 && !isgameover){
                document.querySelector(".Turn").innerText = "It's Draw!"
                gameoveraudio.play();
                gamemusic.pause();
                buttondisabled();
                // document.querySelector(".btn2").innerText = "New Game"
                // return ;
            }
            if(isgameover){
                buttondisabled();
                gameoveraudio.play();
                gamemusic.pause();
                return ;
            }
            

        }
    })
})


const buttondisabled = ()=>{
    let btnref = document.querySelectorAll('.btn');
    btnref.forEach((element)=>(element.disabled =true));

}
const buttonenabled = ()=>{
    let btnref = document.querySelectorAll('.btn');
    btnref.forEach((element)=>(element.disabled =false));

}


btn1.addEventListener('click', ()=> {
    let boxText = document.querySelectorAll('.bttn');
    Array.from(boxText).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    cnt = 0
    buttonenabled();
    gamemusic.currentTime=0;
    gamemusic.play();
    
    document.getElementsByClassName("Turn")[0].innerText = "Turn for " + turn;
    // document.querySelector(".btn2").innerText = "RESET"

})