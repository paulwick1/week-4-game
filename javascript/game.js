var randomNumber = 0;
var wins = 0;
var losses = 0;
var score = 0;
var guesses = [];
var crystalNumbers = [];

// random number between 42 and 120 which needs to be reached
randomNumber = Math.ceil(Math.random() * (120 - 42 + 1)) + 42;

//puts the random number or "goal" into the html
document.getElementById("goal").innerHTML="Target Number: " + randomNumber;

// four random numbers between 1 and 12 which will be assigned to the crystals
while(crystalNumbers.length < 4){
    var randomnumber = Math.ceil(Math.random()*12)
    if(crystalNumbers.indexOf(randomnumber) > -1) continue;
    crystalNumbers[crystalNumbers.length] = randomnumber;
}
alert(crystalNumbers);

//adds the results to the html
document.getElementById("results").innerHTML=
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>";

//gameplay actions for when you hover over or click the crystals
function gamePlay() {

	$('.crystals').hover(function() {
		$(this).addClass('crystalClick');
		}, function () {
        	$(this).removeClass('crystalClick');
        	});

	//adds to the score depending on crystal clicked
	$('.crystal 1').click(function() {
    	alert(crystalNumbers[0]);
 	});

//   });

}

$(document).ready(gamePlay);

