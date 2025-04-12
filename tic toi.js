let allbox = document.querySelectorAll(".box");

let reset = document.querySelector("#reset-btn");

let turnO = true;

let newgamebtn = document.querySelector("#new-btn");

let msgcontainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

const winPattern = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [3,4,5],
];
// addEventListener use for a single Element 
allbox.forEach((box) => {
    box.addEventListener ("click", ()=> {
 if(turnO){
    box.innerText = "O";
    turnO = false;
}
else{
    box.innerText = "X";
    turnO = true;
}
box.disabled = true;

checkWinner();
});
});

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}

const disabled = ()=>{
    for (let box of allbox){
        box.disabled = true;
    }
}

const enabled = ()=>{
    for (let box of allbox){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetgame = () => {
    turnO = true;
    enabled();
    msgcontainer.classList.add("hide");
}

const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1 = allbox[pattern[0]].innerText;
        let pos2 = allbox[pattern[1]].innerText;
        let pos3 = allbox[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                 disabled();
                showWinner(pos1);
            }
        }
    }
};

 newgamebtn.addEventListener("click",resetgame);

 reset.addEventListener("click",resetgame);