const questions = [
    {
      code: `console.log("Hola mundo");`,
      answer: "JavaScript"
    },
    {
      code: `print("Hola mundo")`,
      answer: "Python"
    },
    {
      code: `System.out.println("Hola mundo");`,
      answer: "Java"
    },
    {
      code: `let x = 5;`,
      answer: "JavaScript"
    },
    {
      code: `int x = 10;`,
      answer: "Java"
    },
    {
      code: `x = 10`,
      answer: "Python"
    }
  ];
  
  let currentQuestion = 0;
  
  function loadQuestion() {
    document.getElementById("result").textContent = "";
    document.getElementById("next-btn").style.display = "none";
  
    const question = questions[currentQuestion];
    document.getElementById("code-block").textContent = question.code;
  }
  
  function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
  
    if (selected === correct) {
      document.getElementById("result").textContent = "¡Correcto!";
      document.getElementById("result").style.color = "green";
    } else {
      document.getElementById("result").textContent = `Incorrecto. Era ${correct}.`;
      document.getElementById("result").style.color = "red";
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      document.getElementById("next-btn").style.display = "inline-block";
    } else {
      document.getElementById("next-btn").textContent = "Quiz terminado";
      document.getElementById("next-btn").disabled = true;
    }
  }
  
  window.onload = loadQuestion;
  