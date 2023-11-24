document.addEventListener('DOMContentLoaded', function () {
  const greenBar = document.querySelector('.green-bar');
  greenBar.addEventListener('click', function () {
    greenBar.classList.add('green-bar-animation');
  });
});



function getCookieValue(cookieName) {
    var cookieString = document.cookie;
    var cookies = cookieString.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();

        // Check if the cookie name matches
        if (cookie.startsWith(cookieName + '=')) {
            // Extract and return the cookie value
            return cookie.substring(cookieName.length + 1);
        }
    }

    // Cookie not found
    return null;
}
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    var cookieValue = getCookieValue('cookie');
    if (cookieValue === "true") {
      document.getElementById('sign-in-button').style.display = 'block';
      document.getElementById('popup').style.display = 'none';
    } else if (cookieValue === "false") {
      document.getElementById('sign-in-button').style.display = 'none';
      document.getElementById('popup').style.display = 'none';
    } else {
      document.getElementById('sign-in-button').style.display = 'none';
      document.getElementById("popup").style.display = 'block';
    }
    
    console.log(cookieValue);
    
    // Rest of your code...
    
  });

  
// Обработчик нажатия кнопки "Accept"
function acceptCookies() {
    document.cookie = "cookie=true";
    
    hideCookiePopup();
}

// Обработчик нажатия кнопки "Close"
function closePopup() {
    document.cookie = "cookie=false";
    hideCookiePopup();
    document.getElementById('sign-in-button').style.display = 'none';
}

// Скрыть всплывающее окно и затемнение заднего фона
function hideCookiePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Обработчик нажатия кнопки "Sign in"
function openSignIn() {
    // Добавьте код для открытия окна входа или выполнения соответствующих действий
    console.log("Opening Sign in window...");
}

function test (event){
    event.preventDefault();
    var questions = [{ 
        question: 'Is this correct sentence?: This are apple (answer yes or no)',
        answer: 'no',
        affirm: 'Yay! You got it right!',
        rebuttal: 'Nope, this is not correct.'
    },
    {
        question: 'Is this correct sentence?: This are apple (answer yes or no)',
        answer: 'yes',
        affirm: 'Good job!',
        rebuttal: 'Not right.'
    }];
    var correct =0;
    for (var i = 0, l = questions.length; i < l; i++) {
    answer = prompt(questions[i].question);
    
    // I do not support manipulating a loop counter mid-loop, but it's for an example.
    if (answer !== questions[i].answer) {
        alert(questions[i].rebuttal);
        
    } else {
        alert(questions[i].affirm);
        correct++;
    }
    }
    if (correct===2){
        alert("You know english well")
    }else if (correct===1){
        alert("You need to learn more")
    }else{
        alert("You do not know anything")
    }
    // alert("You have got " +correct+ " out of 2");
}
var form = document.getElementById("myForm");
var successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  // Get input values
  var name = document.getElementById("nameInput").value;
  var phone = document.getElementById("phoneInput").value;
  var email = document.getElementById("emailInput").value;

  // Here, you can add your code to send form data to the server using AJAX or fetch API

  // Show success message
  successMessage.classList.remove("hidden");

  // Reset form inputs
  form.reset();
});
function updateContent() {
    var name = document.getElementById("nameInput").value;
    var notification = document.getElementById("notification");
  
    // Проверяем, что поле с именем не пустое
    if (name.trim() !== "") {
      // Обновляем содержимое уведомления
      notification.innerHTML = "The data has been sent successfully. Hi, " + name + "!";
      notification.style.display = "block";
    } else {
      // Если поле с именем пустое, выводим сообщение об ошибке
      notification.innerHTML = "Please enter your name.";
      notification.style.display = "block";
    }
  }
  const openFormButton = document.getElementById("openFormButton");
const myForm = document.getElementById("myForm");

// Обработчик события при нажатии на кнопку
openFormButton.addEventListener("click", function() {
  myForm.style.display = "block"; // Показываем форму
});
// Обработчик события при отправке формы
//reg form 



//
var score = 0;
var progress = 0;
var level = "Начинающий";
var currentQuestion = 0;

var questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: 0
  },
  {
    question: "Which language is spoken in Brazil?",
    options: ["Spanish", "Portuguese", "Italian", "English"],
    answer: 1
  },
  {
    question: "What is the error in this sentence: 'I goed to the store.'?",
    options: ["goed", "the", "store", "No error"],
    answer: 0
  }
];

function startGame() {
  showQuestion();
}

function showQuestion() {
  var questionElement = document.getElementById("question");
  var optionsElements = document.getElementById("options").getElementsByTagName("button");
  
  if (currentQuestion < questions.length) {
    questionElement.innerHTML = questions[currentQuestion].question;
    
    for (var i = 0; i < optionsElements.length; i++) {
      optionsElements[i].innerHTML = questions[currentQuestion].options[i];
    }
  } else {
    questionElement.innerHTML = "Игра окончена!";
    disableOptions();
  }
}

function checkAnswer(selectedOption) {
  var resultElement = document.getElementById("result");
  
  if (currentQuestion < questions.length) {
    var correctAnswer = questions[currentQuestion].answer;
    
    if (selectedOption === correctAnswer) {
      resultElement.innerHTML = "Правильно!";
      score++;
      progress++;
    } else {
      resultElement.innerHTML = "Неправильно!";
      progress++;
    }
    
    currentQuestion++;
    updateScore();
    updateProgress();
    showQuestion();
  }
}

function updateScore() {
  var scoreElement = document.getElementById("score-value");
  scoreElement.innerHTML = score;
}

function updateProgress() {
  var progressElement = document.getElementById("progress-value");
  progressElement.innerHTML = progress;
  
  if (progress === 10) {
    level = "Продвинутый";
  } else if (progress === 5) {
    level = "Средний";
  }
  
  var levelElement = document.getElementById("level-value");
  levelElement.innerHTML = level;
}

function disableOptions() {
  var optionsElements = document.getElementById("options").getElementsByTagName("button");
  
  for (var i = 0; i < optionsElements.length; i++) {
    optionsElements[i].disabled = true;
  }
}

startGame();
// quiz.js

function gradeQuiz() {
  // Define correct answers
  const correctAnswers = {
    q1: "Nur-Sultan",
    q2: "Irtysh",
    q3: "1991",
    q4: "Tian Shan",
    q5: "Both Kazakh and Russian"
    // Add more correct answers if needed
  };

  // Initialize variables for counting correct answers
  let correctCount = 0;

  // Loop through each question and check the selected answer
  for (let question in correctAnswers) {
    const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);    //click mouse

    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;

      // Check if the user's answer is correct
      if (userAnswer === correctAnswers[question]) {
        correctCount++;
      }
    }
  }

  // Display the result message
  const resultContainer = document.getElementById("result-container");

  if (correctCount === Object.keys(correctAnswers).length) {
    resultContainer.innerHTML = "Congratulations! You got all the answers right. Well done!";
  } else {
    resultContainer.innerHTML = `You answered ${correctCount} out of ${Object.keys(correctAnswers).length} questions correctly. Keep it up!`;
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const greenBar = document.querySelector('.green-bar');

  greenBar.addEventListener('mouseover', function () {
    greenBar.classList.add('green-bar-animation');
  });

  greenBar.addEventListener('click', function () {
    // Дополнительные действия по клику, если необходимо
  });
});
