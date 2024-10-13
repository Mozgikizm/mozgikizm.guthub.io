function calculateResult() {
    let score = 0;
    const form = document.forms['quizForm'];
    
  
    for (let i = 1; i <= 3; i++) {
        const question = form[`q${i}`];
        for (let option of question) {
            if (option.checked) {
                score += parseInt(option.value);
            }
        }
    }

  

   
 
 

    let resultText = '';
    if (score >= 30) {
        resultText = 'ТАКИХ ДАУНОВ МИР ЕЩЁ НЕ ВИДЕЛ!';
    } else if (score >= 25) {
        resultText = 'ДА ТЫ ПОЛНЫЙ ДАУН!';
    } else if (score >= 10) {
        resultText = 'Не даун, но интеллект сравним с 8 летним ребенком!';
    } else if (score >= 1) {
        resultText = 'НА ДРИПЕ, НЕ ДАУН';
    } else {
        resultText = 'ДА ТЫ НИХУЯ НЕ ВЫБРАЛ ЖЕ!';
    }


    document.getElementById('result').innerText = `Твой результат: ${resultText}`;
}