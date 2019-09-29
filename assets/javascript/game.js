// global varibles
var counter = 0;
var cupcakeOne =0;
var cupcakeTwo =0;
var cupcakeThree =0;
var cupcakeFour =0;
var wins = 0;
var losses =0;
var targetNumber=0;

// random number generator
function randomNumGen (min,max){
  return Math.floor(Math.random() *(max-min +1))+min;
  
}
// used to start/restart game
var startGame = function () {
    targetNumber = randomNumGen (15, 100)
    $(".random-number").text("Cupcakes Needed: " + targetNumber);
    counter = 0;
    cupcakeOne = randomNumGen (1, 10)
    cupcakeTwo = randomNumGen (1, 10)
    cupcakeThree = randomNumGen (1, 10)
    cupcakeFour = randomNumGen (1, 10)
    console.log("One:" + cupcakeOne, "Two" + cupcakeTwo, "Three" + cupcakeThree, "Four"+ cupcakeFour );

}
// used to determin if you win or  lose
var determineWinLose = function () {

    if (counter === targetNumber) {
        alert("You win!");
        wins ++;
        $(".wins").text("Wins:" + wins);
        startGame ();

      }
    
      else if (counter >= targetNumber) {
        alert("You lose!!");
        losses ++;
        $(".losses").text("Losses:" + losses);
        startGame ();
      }

    }
//starts game when page is loaded
startGame ();


// detemines what happes when you click on the pictures
$('.image-one').on("click", function(){
    
    counter = cupcakeOne + counter; 
    $(".total-score").text(counter);
    determineWinLose ();
      
}); 
$('.image-two').on("click", function(){
    
    counter = cupcakeTwo+ counter; 
    $(".total-score").text(counter);
    determineWinLose ();
      
}); 
$('.image-three').on("click", function(){
    
    counter = cupcakeThree + counter; 
    $(".total-score").text(counter);
    determineWinLose ();
      
}); 
$('.image-four').on("click", function(){
    
    counter = cupcakeFour+ counter; 
    $(".total-score").text(counter);
    determineWinLose ();
      
}); 



