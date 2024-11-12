function calculateResult() {
    let score = 0;
    const form = document.forms['quizForm'];
    
    for (let i = 1; i <= 5; i++) { 
        const question = form[`q${i}`];
        for (let option of question) {
            if (option.checked) {
                score += parseInt(option.value);
            }
        }
    }

    let resultText = '';
    let resultImage = '';
    
    if (score >= 30) {
        resultText = 'ТАКИХ ДАУНОВ МИР ЕЩЁ НЕ ВИДЕЛ! РАЗЪЕБИ СЕБЕ ГОЛОВУ ЭТИМ ПИСТОЛЕТОМ';
        resultImage = 'daun.jpg'; 
    } else if (score >= 25) {
        resultText = 'ДА ТЫ ПОЛНЫЙ ДАУН!';
        resultImage = 'daunnnn.png';  
    } else if (score >= 10) {
        resultText = 'Не даун, но интеллект сравним с 8 летним ребенком!';
        resultImage = 'daunn.jpg'; 
    } else if (score >= 1) {
        resultText = 'НА ДРИПЕ, НЕ ДАУН';
        resultImage = 'drip.avif';  
    } else {
        resultText = 'ДА ТЫ НИХУЯ НЕ ВЫБРАЛ ЖЕ!';
        resultImage = 'daunnn.avif';  
    }

   
    document.getElementById('resultText').innerText = resultText;
    if (resultImage) {
        document.getElementById('resultImage').src = resultImage;
        document.getElementById('result').style.display = 'block'; 
    } else {
        document.getElementById('resultImage').style.display = 'none';  
    }
}

function closeResult() {
    document.getElementById('result').style.display = 'none';  
}
