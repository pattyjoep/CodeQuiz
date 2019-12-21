//Variables
    var Start = document.querySelector("#Startbtn")


//Objects
    // "javascript\code_quiz_questions.js"

//Event Listeners
    Start.addEventListener("click", StartQuiz)
    Start.addEventListener("click", TimerCountdown)

//Functions 
    function StartQuiz() {
        var StartCardDiv = document.querySelector("#StartCardDiv")

        var QuestionsDiv = document.querySelector("#QuestionsDiv")

        var QuestionsContainer = document.querySelector("#QuestionsContainer")


        StartCardDiv.setAttribute("class", "StartCardDivHide")

        QuestionsDiv.setAttribute("class", "card text-center customCard QuestionsDivShow questions-Container")
        
        QuestionsContainer.textContent = JSON.stringify(questions)

    }

    //Timer countdown
    function TimerCountdown() {
        var sec = 75;
        var timer = setInterval(function(){
            document.querySelector('#timerSpan').textContent = "Time: " + sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
            }
        }, 1000);
    }