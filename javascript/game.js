var randomNumber;
var wins = 0;
var losses = 0;
var crystalNumbers = [];
var score = 0;
var guesses = [];

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
// alert(crystalNumbers);

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
	$('#crystal1').click(function() {
        score = score + crystalNumbers[0];
 	});

 	$('#crystal2').click(function() {
        score = score + crystalNumbers[1];
 	});

 	$('#crystal3').click(function() {
        score = score + crystalNumbers[2];
 	});

 	$('#crystal4').click(function() {
        score = score + crystalNumbers[3];
    });   

    $('.crystals').click(function() {
        
        document.getElementById('yourScore').innerHTML=
        "<p>Your Score: " + score + "</p>";
    
        if (randomNumber == score) {
            wins = wins + 1;
            alert("Correct!");
            score = 0;
            document.getElementById("results").innerHTML=
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>";
            document.getElementById('yourScore').innerHTML=
            "<p>Your Score: " + 0 + "</p>";
            randomNumber = Math.ceil(Math.random() * (120 - 42 + 1)) + 42;
            document.getElementById("goal").innerHTML="Target Number: " + randomNumber;
            };
        if (score > randomNumber) {
            alert("You Lose!");
            losses = losses + 1;
            document.getElementById("results").innerHTML=
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>";
            document.getElementById('yourScore').innerHTML=
            "<p>Your Score: " + 0 + "</p>";
            randomNumber = Math.ceil(Math.random() * (120 - 42 + 1)) + 42;
            document.getElementById("goal").innerHTML="Target Number: " + randomNumber;
            };
    });

};

$(document).ready(gamePlay); 