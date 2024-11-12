function calculateResult() {
    let score = 0;
    const form = document.forms['quizForm'];
    
    for (let i = 1; i <= 5; i++) {  // Теперь 5 вопросов
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
        resultImage = 'daun.jpg';  // Путь к картинке для этого результата
    } else if (score >= 25) {
        resultText = 'ДА ТЫ ПОЛНЫЙ ДАУН!';
        resultImage = 'daun_2.avif';  // Путь к картинке для этого результата
    } else if (score >= 10) {
        resultText = 'Не даун, но интеллект сравним с 8 летним ребенком!';
        resultImage = 'daunn.jpg';  // Путь к картинке для этого результата
    } else if (score >= 1) {
        resultText = 'НА ДРИПЕ, НЕ ДАУН';
        resultImage = 'drip.avif';  // Путь к картинке для этого результата
    } else {
        resultText = 'ДА ТЫ НИХУЯ НЕ ВЫБРАЛ ЖЕ!';
        resultImage = 'daunnn.avif';  // Путь к картинке для этого результата
    }

    // Отображение результата
    document.getElementById('resultText').innerText = resultText;
    if (resultImage) {
        document.getElementById('resultImage').src = resultImage;
        document.getElementById('result').style.display = 'block';  // Показываем результат
    } else {
        document.getElementById('resultImage').style.display = 'none';  // Прячем картинку
    }
}

function closeResult() {
    document.getElementById('result').style.display = 'none';  // Скрываем результат
}
