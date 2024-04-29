function checkAnswer() {
    var answer1 = document.getElementById('answer1').value.trim();
    var answer2 = document.getElementById('answer2').value.trim();
    var answer3 = document.getElementById('answer3').value.trim();
    var correctAnswers = ["Monopoly", "Dixit", "Skyjo"];
    var responseBox = document.getElementById('response');
    var carImage = document.getElementById('car-image');
    responseBox.innerHTML = "";

    var correctCount = 0;
    if (correctAnswers.includes(answer1)) {
        correctCount++;
    }
    if (correctAnswers.includes(answer2)) {
        correctCount++;
    }
    if (correctAnswers.includes(answer3)) {
        correctCount++;
    }

    if (correctCount === 3) {
        responseBox.innerHTML = "<p>Bien joué mon boeuf Indice pour le prochain endroit :</p>";
        carImage.style.display = 'block';
    } else {
        responseBox.innerHTML = "<p>FLOP MDRRRR. ré-essayes bouffon. (majuscules, espace entre les 3 réponses et bonne orthographe)</p>";
        carImage.style.display = 'none';
    }
}
