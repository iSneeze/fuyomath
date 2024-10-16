document.getElementById("quiz").addEventListener('submit', function (event) {
    event.preventDefault();



    const correctAnswers = [
        128,
        0.25,
        1526,
        120,
        5,
        2.45,
        124,
        24,
        10,
        2444
    ]
    

    const userAnswers = [
        Number(document.getElementById('q1').value),
        Number(document.getElementById('q2').value),
        Number(document.getElementById('q3').value),
        Number(document.getElementById('q4').value),
        Number(document.getElementById('q5').value),
        Number(document.getElementById('q6').value),
        Number(document.getElementById('q7').value),
        Number(document.getElementById('q8').value),
        Number(document.getElementById('q9').value),
         Number(document.getElementById('q10').value),
        ]
    

    //reset
    for (let index = 0; index < userAnswers.length; index++) {
        document.getElementById('q'+ (index+1)+ 'Error').textContent= '';
        document.getElementById('q'+ (index+1)).classList.remove('correct');
    }


    document.getElementById("q1Error").textContent= '';
    document.getElementById("q1").textContent= '';
    document.getElementById("q1").textContent= '';
    document.getElementById("q1").textContent= '';
    document.getElementById("q1").textContent= '';

    let score = 0;
    for (let index = 0; index < userAnswers.length; index++) {
        if (userAnswers[index] !== correctAnswers[index]) {
            document.getElementById('q'+ (index+1)+ 'Error').textContent = "Answer: " + correctAnswers[index]
        } else {
            score++;
            document.getElementById('q'+ (index+1)).classList.add("correct");
        }
    }

    document.getElementById('score').textContent = "Score: " + score + " out of 10!";
})