document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector(".fade-in");
    image.style.opacity = 1;
});

function checkAnswer() {
    const correctAnswer = "umm i did not count";
    const selectedAnswer = document.querySelector('input[name="cat"]:checked');
    const feedbackDiv = document.getElementById('feedback');
    const feedbackImage = document.getElementById('feedback-image');
    const submitButton = document.getElementById('submit-button');
    const answers = document.querySelectorAll('.answer');

    // Apply animation to all answer elements
    answers.forEach(answer => answer.classList.add('animate-out'));

    if (selectedAnswer) {
        feedbackImage.src = selectedAnswer.value === correctAnswer ? "correct.png" : "incorrect.png";
        feedbackDiv.classList.remove('hidden');
        disableButton(submitButton, 10000);
        makeFeedbackClickable(feedbackImage, 10000);
    } else {
        feedbackImage.src = "incorrect.png";
        feedbackDiv.classList.remove('hidden');
        disableButton(submitButton, 10000);
        makeFeedbackClickable(feedbackImage, 10000);
    }
}
