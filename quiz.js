function checkAnswer() {
    const correctAnswer = '4'
    const input = document.querySelector('input[name="quiz"]:checked')
    const userAnswer = input ? input.value : null;
    const feedbackContainer = document.getElementById('quiz-container');
    let feedBack = feedbackContainer.querySelector('#feedback');
    console.log(feedBack)
    if (userAnswer == correctAnswer) {
        feedBack.textContent = "Correct! Well done.";
    }
    else {
        feedBack.textContent = "That's incorrect. Try again!"
    }

}

const submitButton = document.getElementById("submit-answer");

submitButton.addEventListener("click", checkAnswer);