var counter = 0;
var cupcakeNum = [];
var wins = 0;
var losses =0;
randomNumberGen();


function randomNumberGen () {
var targetNumber = Math.floor(Math.random() * 100);

$(".random-number").text(targetNumber);
for (i = 0; i < 4; i++){
  cupcakeNum.push(Math.floor(Math.random() * 15)+1);
  $("img").attr("data-cupcakevalue", cupcakeNum[i]);

}

}
console.log(cupcakeNum)

$('img').on("click", function(){
    var cupcakeValue = ($(this).attr("date-cupcakevalue"));
    cupcakeValue = parseInt(cupcakeValue);

    counter += cupcakeValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You win!");
        wins ++;
        $(".wins").text(wins);
        randomNumberGen();
      }
  
      else if (counter >= targetNumber) {
        alert("You lose!!");
        losses ++;
        $(".losses").text(losses);
        randomNumberGen();
      }
});
