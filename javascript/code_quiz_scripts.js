//Variables
    var Start = document.querySelector("#Startbtn")
    var Submit = document.querySelector("#Submitbtn")

    var StartCardDiv = document.querySelector("#StartCardDiv")
    var QuestionsDiv = document.querySelector("#QuestionsDiv")
    var QuestionsContainer = document.querySelector("#QuestionsContainer")

    var sec = 75

    var Score = 0


//Objects
    // "javascript\code_quiz_questions.js"

//Event Listeners
    Start.addEventListener("click", function(){
        StartQuiz()
        TimerCountdown()
        TimeExipration()
    });
    
   
    

//Functions 
    function StartQuiz() {

        StartCardDiv.setAttribute("class", "StartCardDivHide")

        QuestionsDiv.setAttribute("class", "card text-center customCard QuestionsDivShow questions-Container")


        ShowQuestion(0)


    }

    function ShowQuestion(i) {
        
        QuestionsContainer.textContent = questions[i].title

        var options = questions[i].choices

        for (var c = 0; c < options.length; c++) {
            var newBtn = document.createElement("button")
            newBtn.setAttribute("class", "customBtn")
            newBtn.setAttribute("value", options[c])

            var Break = document.createElement("br")

            QuestionsContainer.appendChild(newBtn)
            QuestionsContainer.appendChild(Break)
          

            newBtn.textContent = options[c]
        
            newBtn.addEventListener("click", function(event) {
                 //alert("Test Alert")
                var selection = event.currentTarget.value
                if(selection === "numbers") {
                    alert("Correct!")

                } else {
                    alert("Wrong :(")
                }
                var TimeRemaining = sec
                localStorage.setItem("Time Remaining: ", TimeRemaining)
            });
        }
            
    }   
    


    //Timer countdown
    function TimerCountdown() {

        var timer = setInterval(function(){
            document.querySelector('#timerSpan').textContent = "Time: " + sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
            } 
        }, 1000)
    }

    function TimeExipration() {
        setTimeout(function() {
            
                alert("Time's Up");
                window.location.reload()
        }, 77000)
    }

    
