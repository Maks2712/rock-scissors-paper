const SYMBOLS = ["wrong symbol","rock", "paper","scissors"]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
function getComputerChoice() {
    return SYMBOLS[getRandomIntInclusive(1,3)];  
}

function getSymbolId(symbol){
    let id
    let s
    s=symbol.toString().toLowerCase()
    switch(s){
        case "rock" : 
            id=1;
            break;
        case "paper" : 
            id=2;
            break;
        case "scissors" : 
            id=3;
            break;
            default:
                alert("Wrong input!")
    }
    return id;
}

function getWinner(playerSymbolId, computerSymbolId) {
    if(playerSymbolId===1 && computerSymbolId===3){
        return 1;
    }
    if(computerSymbolId===1 && playerSymbolId===3){
        return 2;
    }
 if(playerSymbolId>computerSymbolId){
    return 1;
 }
 else if(computerSymbolId>playerSymbolId){
    return 2;
 }
 else if(computerSymbolId===playerSymbolId){
    return 3;
 }
}

function playRound(playerSelection, computerSelection) {
    playerSymbolId=getSymbolId(playerSelection);
    computerSymbolId=getSymbolId(computerSelection);
    pWin="Player win! "+SYMBOLS[playerSymbolId]+" is stronger, than "+SYMBOLS[computerSymbolId]
    cWin="Computer win! "+SYMBOLS[computerSymbolId]+" is stronger, than "+SYMBOLS[playerSymbolId]
    draw= SYMBOLS[computerSymbolId]+" and "+SYMBOLS[playerSymbolId] + ". Nobody wins."
    error="Error input!"
    let res=0;
    let result="";
    if (playerSymbolId!=0){
     res=getWinner(playerSymbolId,computerSymbolId);
        if(res===1) 
        { 
            result=pWin
        }
        if(res===2) 
        {
            result=cWin
        }
        if (res===3) 
        {
            result=draw
        }
    }
    else {
    result=error
    }
   return res;
}

function game(times) {
    let pPoints=0;
    let cPoints=0;
    for (let i = 0; i < times; i++) {
        input=prompt("Show your symbol")
        res=playRound(input, getComputerChoice())
        if(res===1) 
        { 
            pPoints++
           alert(SYMBOLS[playerSymbolId]+" is stronger, than "+SYMBOLS[computerSymbolId] +" Player win.")
        }
        if(res===2) 
        {
            cPoints++
            alert(SYMBOLS[computerSymbolId]+" is stronger, than "+SYMBOLS[playerSymbolId]+" Computer win.")
        }
        if (res===3) 
        {
            cPoints++
            pPoints++
           alert(SYMBOLS[computerSymbolId]+" and "+SYMBOLS[playerSymbolId]+" Draw.")
        }
        
     }
     alert("Player - Computer"+" "+pPoints+" : "+cPoints)
     

}

game(2);