//Coin Flip Game
//User clicks heads or Tails
//computer determins Flip
//show the user if they won or lost in the dom

//event listner for heads
document.getElementById('heads').onclick = flipHeads

//event listner for Tails
document.getElementById('tails').onclick = flipTails

//function if user chose flipHeads
function flipHeads(){
  //generate flipH
  var flip = Math.random() // .01 to .99
  //determine if user won
   if( flip < .5 ){
     //place results in the dom
     document.getElementsByTagName('h1')[0].innerHTML = "You Won"
  }else{
    //place result in the document
    document.getElementsByTagName('h1')[0].innerHTML = "You Lose"

  }

}

//function if user chose flipTails
function flipTails(){
  //generate flipH
  var flip = Math.random() // .01 to .99
  //determine if user won
   if(flip < .5){
     //place results in the dom
     document.getElementsByTagName('h1')[0].innerHTML = "You Won"
  }else{
    //place result in the document
    document.getElementsByTagName('h1')[0].innerHTML = "You Lose"
  }

}

function genRand(){
  return Math.random()

}
