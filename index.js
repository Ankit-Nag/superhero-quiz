const readlineSync = require("readline-sync");
const chalk = require("chalk");

console.clear();
console.log(chalk.black.bgGreen.bold.underline("Welcome to the Awesome Superhero Quiz!\n"))
var exit = 0;
for (i = 0; i < 10; i++) {
		i = 1;
		var userScore = 0;
		var userName = readlineSync.question(chalk.yellow.bold("Enter your name!\n"));
		
		//welcoming the user
		console.log(chalk.blue.bold("\nWelcome "+userName+"! Let's begin!\nEnter only the letter corresponding to your choice!\n"));

		//quiz function
		function quiz(question,answer){
			var userAnswer=readlineSync.question(question+"\n");

			if(userAnswer.toUpperCase()===answer.toUpperCase()){
				console.log(chalk.green("\nCorrect Answer!"));
				userScore++;
				console.log(chalk.green("-----------------"));
				console.log(chalk.green("Current score: "+userScore+"\n"));
			}
			else if(userAnswer.toUpperCase()!=="A"||"B"||"C"||"D"){
				console.log(chalk.yellow.bold("\nEnter a valid answer!"));
				userScore--;
				console.log(chalk.red("---------------------"));
				console.log(chalk.red("Current score: "+userScore+"\n"));
			}
			else{
				console.log(chalk.red("\nWrong Answer."));
				userScore--;
				console.log(chalk.red("-----------------"));
				console.log(chalk.red("Current score: "+userScore+"\n"));
			}
		}

		//array to store the question set
		var questionSet=[{
			question: chalk.yellow("1. Who is the father of Thor?"+chalk.green("\na. Odin\nb. Loki\nc. Fenrir\nd. Thanos")),
			answer: "a"
		},
		{
			question: chalk.yellow("2. What is the alter ego of Batman?"+chalk.green("\na. Kal El\nb. Bruce Wayne\nc. Barry Allen\nd. Christian Bale")),
			answer: "b"
		},
		{
			question: chalk.yellow("3. Which radiation gave Hulk his powers?"+chalk.green("\na. Alpha\nb. Beta\nc. Gamma\nd. Ultraviolet")),
			answer: "c"
		},
		{
			question: chalk.yellow("4. What is Superman's birth planet?"+chalk.green("\na. Earth\nb. Titan\nc. Jupiter\nd. Krypton")),
			answer: "d"
		},
		{
			question: chalk.yellow("5. Who leads the League of Shadows??"+chalk.green("\na. Ra's al Ghul\nb. Damien Wayne\nc. Slade Wilson\nd. Talia al Ghul")),
			answer: "a"
		},
		{
			question: chalk.yellow("6. What is Iron Man's daughter's name in Endgame?"+chalk.green("\na. Eva Stark\nb. Shelly Stark\nc. Morgan Stark\nd. Amy Stark")),
			answer: "c"
		},
		{
			question: chalk.yellow("7. Who voices Jarvis in the Avengers movies?"+chalk.green("\na. Jeremy Renner\nb. Laurence Fox\nc. Paul Bettany\nd. Matthew Morrison")),
			answer: "c"
		},
		{
			question: chalk.yellow("8. What does \"Yibambe\" chant mean?"+chalk.green("\na. Hold Fast\nb. Get Ready\nc. Fight\nd. Bring it on")),
			answer: "a"
		},
		{
			question: chalk.yellow("9. Deadpool is a parody of which DC character?"+chalk.green("\na. Deadshot\nb. Deathstroke\nc. Bullseye\nd. Crossbones")),
			answer: "b"
		},
		{
			question: chalk.yellow("10. Who is the first villain to successfully kill Superman?"+chalk.green("\na. Doomsday\nb. Joker\nc. Darkseid\nd. Lex Luthor")),
			answer: "d"
		}
		]

		//loop to run the quiz
		for(k=0;k<questionSet.length;k++){
			quiz(questionSet[k].question,questionSet[k].answer)
		}

		//highscores array
		var highScores = [{
			name: "Batman",
			score: 5
		},
		{
			name: "Spiderman",
			score: 4
		},
		{
			name: "Deathstroke",
			score: 3
		},
		{
			name: "Ironman",
			score: 2
		},
		{
			name: "Hulk",
			score: 1
		},
		]

		//loop to check if player beat highscore
		var update = 0;
		for (j = 0; j < highScores.length; j++) {
			if (userScore > highScores[j].score) {
				highScores.splice(j, 0, { name: userName, score: userScore })
				break;
			}
		}

		//loop to print highscores
		console.log(chalk.blue.bold("Current Highscores-\n"))
		for (j = 0; j < 5; j++) {
			console.log(chalk.green((j + 1) + " " + highScores[j].name + ": " + highScores[j].score))
		}

		//condition to check if user wants to try again.
		if(!readlineSync.keyInYN(chalk.yellow("\nDo you want to play again?"))){
			console.log(chalk.cyan.bold("-------------------------------"));
			console.log(chalk.cyan.bold("Thank you for playing the quiz!"));
			console.log(chalk.cyan.bold("-------------------------------"));
			break;
		}
	}