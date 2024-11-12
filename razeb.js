
let score = 0;


const surveyForm = document.getElementById('surveyForm');
const scoreElement = document.getElementById('score');
const resultElement = document.getElementById('result');
const notification = document.getElementById('notification');
const checkButton = document.getElementById('checkButton');
const surveyDiv = document.getElementById('survey');
const videoContainer = document.getElementById('videoContainer');


surveyForm.addEventListener('submit', function(event) {
    event.preventDefault();  

 
    const answer = document.querySelector('input[name="answer"]:checked');

    if (answer) {
      
        if (answer.value === 'yes') {
            score += 1;
        } else {
            score = 0; 
        }

    
        resultElement.textContent = 'ответ: ' + (answer.value === 'yes' ? 'softik,nevroxz' : 'неправильно нахуй');
        
      
        scoreElement.textContent = score;

      
        if (score === 1) {
            notification.style.display = 'block';
        }
    } else {
        resultElement.textContent = 'але отвечай.';
    }
});


checkButton.addEventListener('click', function() {
 
    surveyDiv.style.display = 'none';
    notification.style.display = 'none';

  
    videoContainer.style.display = 'flex';
});
