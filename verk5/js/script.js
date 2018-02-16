class Quiz{

	constructor(){
		this.questions = [
			{
				quizTitle : "Quiz 1",
				question_text : "1. Hvað heitir höfundur Test bókar 3?",
				answers : [{
					correct : false,
					text : "Helgi"
				},
				{
					correct : false,
					text : "Guðmundur"
				},
				{
					correct : true,
					text : "Albert"
				},
				{
					correct : false,
					text : "Svavar"
				}
				]
			},
			{
				quizTitle : "Quiz 1",
				question_text : "2. Elon Musk dó árið 2005.",
				answers : [{
					correct : true,
					text : "Rangt"
				},
				{
					correct : false,
					text : "Rétt"
				}
				]
			}]
		this.qIndex = 0;

		this.upperdiv = document.createElement("div")
		this.qTitle = document.createElement("h1")
		this.question = document.createElement("h3")
		this.upperdiv.appendChild(this.qTitle)
		this.upperdiv.appendChild(this.question)
		this.lowerdiv = document.createElement("div")
		this.lowerdiv.className = "answers";
		document.getElementById("quiz").appendChild(this.upperdiv)
		document.getElementById("quiz").appendChild(this.lowerdiv)

		this.updateQuizInfo();
	}
	
	checkQuestion(index){
		if(this.questions[this.qIndex].answers[index].correct)
		{
			alert("Rétt svar!")
		}else{
			alert("Rangt svar.")
		}
		this.nextQuestion();
	}

	nextQuestion(){
		console.log(this.questions.length);
		if (this.questions.length <= this.qIndex + 1)
		{
			console.log("end")
			this.qIndex = 0;
			this.quizEndScreen();
		}else{
			this.qIndex++;
			this.updateQuizInfo();	
		}
	}
	
	updateQuizInfo(){
		this.qTitle.innerText = this.questions[this.qIndex].quizTitle;
		this.question.innerText = this.questions[this.qIndex].question_text;

		this.lowerdiv.innerHTML = "";
		let answerIndex = 0;
		this.questions[this.qIndex].answers.forEach((element) => {
			let answerButton = document.createElement("p");
			answerButton.innerText = element.text;
			answerButton.dataset.answerIndex = answerIndex;
            let quizInstance = this;
            answerButton.addEventListener("click", function () {
                quizInstance.checkQuestion(this.dataset.answerIndex);
			}, false);
			this.lowerdiv.appendChild(answerButton);
			
			answerIndex++;
		});
	}

	quizEndScreen(){
		this.qTitle.innerText = this.questions[this.qIndex].quizTitle + " Lokið";
		this.question.innerText = "";
		this.lowerdiv.innerHTML = "";

		let again = document.createElement("p");
		again.innerText = "Reyna aftur";
		let quizInstance = this;
		again.addEventListener("click", function () {
			quizInstance.updateQuizInfo();
		}, false);
		this.lowerdiv.appendChild(again);
	}
}
window.onload = function(){
	window.quiz = new Quiz();
}