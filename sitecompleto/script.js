function disableOptions(questionName){
    let options = document.getElementsByName (questionName);
    options.forEach(option => {
        if(!option.checked){
            option.disabled = true;
        }
    });
}
function playSound(){
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}
function submitQuiz(){

    let correctAnswers = {
        q1: "B",
        q2: "D",
        q3: "A",
        q4: "D",
        q5: "D",
        q6: "C",
        q7: "D",
        q8: "A",
        q9: "A",
        q10: "C",
    };

    let form = document.getElementById('quiz-form');
    let score = 0;
 
    for (let key in correctAnswers){
        let userAnswer = form.elements[key].value;
        if(userAnswer === correctAnswers[key]){
            score++;
        }
    }
    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas.`
 
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('enviar').setAttribute('disabled', true);

    if(score === 10){
        let sucessSound = document.getElementById("venceusom");
        sucessSound.play();
    }else{
        let failSound = document.getElementById("perdeusom");
        failSound.play();
    }
    document.getElementById('enviar').disabled=true;
    document.getElementById('recomeco').disabled=false;
}
function recomecar(){
    let form = document.getElementById('quiz-form');
    form.reset();
    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);
    score = 0;
    result.innerHTML = "";
    document.getElementById('enviar').disabled=false;
    document.getElementById('recomeco').disabled=true;
};

function responderNovamente(){
    score = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('enviar').removeAttribute('disabled');
    result.innerHTML = " ";
    document.getElementById('quiz-form').reset();
    let options=document.querySelectorAll('input[type="radio"]');
   options.forEach(option => option.disabled=false);
}