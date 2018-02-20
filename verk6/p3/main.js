
function createQuiz()
{
    let mainDiv = document.createElement("div");
    let qDiv = document.createElement("div");
    let aDiv = document.createElement("div");

    mainDiv.setAttribute("id", "quiz");
    qDiv.setAttribute("id", "question");
    aDiv.setAttribute("id", "answers");

    qTextNode = document.createTextNode("Spurning 1");
    qDiv.appendChild(qTextNode);

    qArray = ["Svarmöguleiki 1", "Svarmögileiki 2"]
    qArray.forEach(element => {
        let answer = document.createElement("div");
        answer.dataset.active = "answer";
        aTextNode = document.createTextNode(element);
        answer.appendChild(aTextNode);
        aDiv.appendChild(answer);
    });

    mainDiv.appendChild(qDiv);
    mainDiv.appendChild(aDiv);
    document.body.appendChild(mainDiv);
}

window.onload = function(){
    createQuiz();
}