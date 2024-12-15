const characters = [
    { img: "killa.jpg", anime: "Убийца Акаме" },
    { img: "rock.jpg", anime: "Одинокий Рокер" },
    { img: "touka.jpg", anime: "Токийский гуль" },
    { img: "parasite.jpg", anime: "Паразит" },
    { img: "sword.jpg", anime: "Мастера меча онлайн" },
    { img: "zabotu.jpg", anime: "Заботы запертой принцессы вампиров" },
    { img: "ram.webp", anime: "Ре зеро"},
    { img: "code.jpg", anime: "Код гиас" },
    { img: "akashi.jpg", anime:"Баскетбол Куроко"},
    { img: "ulqiorr.webp", anime: "Блич"},
    { img: "meliodas.jpg", anime: "Семь Смертных Грехов"},
    { img: "franx.jpg", anime: "Милый во франксе"},
    { img: "ruin.jpg", anime: "Королевство руин"},
    { img: "net.jpg", anime: "Нет игры нет жизни"},
    { img: "vosj.jpg", anime: "Восхождение в тени"}, 
    { img: "bers.webp", anime: "Ненасытный Берсерк"},
    { img: "vel.jpg", anime: "О моём Перерождение В слизь"},
    { img: "class.jpg", anime: "Класс Превосходства"},
    { img: "draken.jpg", anime: "Токийские Мстители"},
    { img: "krul.jpg", anime: "Последний Серафим"},
    { img: "light.jpg", anime: "Тетрадь Смерти"},
    { img: "arima.jpg", anime: "Звёздное дитя"},
    { img: "sukuna.webp", anime: "Магическая Битва"},
    { img: "makima.png", anime: "Человек Бензопила"},
    { img: "feitan.png", anime: "Хантер х Хантер"},
    { img: "aizu.webp", anime: "Может, я встречу тебя в подземелье"},
    { img: "ayato.jpg", anime: "Бездомный Бог"},
    { img: "satana.jpg", anime: "Сатана на подработке"},
    { img: "vergil.jpg", anime: "Дьявол Тоже Может Плакать"},
    { img: "dante.jpg", anime: "Дьявол Тоже Может Плакать"},
    { img: "anos.jpg", anime: "Непризнанный школой владыка демонов"},
    { img: "sliz.webp", anime: "Убивая слизней 300 лет"},
    { img: "per.webp", anime: "Перестану Быть Героем"},
    { img: "per.jpg", anime: "Клинок, рассекающий демонов "},
    { img: "pov.jpg", anime: "Повелитель демонов 2099"},
    { img: "gab.jpg", anime: "Адский рай"},
    { img: "qu.jpg", anime: "Королева, ставшая причиной трагедии, сделает для народа всё, что в её силах"},
    { img: "lun.webp", anime: "Лунное путешествие в другой мир"},
    { img: "nero.jpg", anime: "Чёрный Клевер"},
    { img: "cid.jpg", anime: "Когда плачут цикады"},
    
];

let currentCharacter = null;
let usedCharacters = []; 

const startButton = document.getElementById("startButton");
const introDiv = document.getElementById("introText"); 
const gameDiv = document.getElementById("game");
const characterImage = document.getElementById("characterImage");
const answerInput = document.getElementById("answerInput");
const submitAnswer = document.getElementById("submitAnswer");
const resultMessage = document.getElementById("resultMessage");

// Начало игры
startButton.addEventListener("click", () => {
    introDiv.style.display = "none"; 
    gameDiv.style.display = "block"; 
    nextCharacter();
});

function nextCharacter() {
    if (usedCharacters.length === characters.length) {
        resultMessage.textContent = "Ты угадал всех! f5 начать заново(потом по другому сделаю)";
        resultMessage.style.color = "blue";
        resultMessage.style.backgroundColor = "black";
        resultMessage.style.padding = "5px 10px";
        resultMessage.style.borderRadius = "5px";
        resultMessage.style.display = "block"; 
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * characters.length); // Рандомный индекс
    } while (usedCharacters.includes(randomIndex)); 

    currentCharacter = characters[randomIndex];
    usedCharacters.push(randomIndex); 

    // Отображаем выбранного персонажа
    characterImage.src = currentCharacter.img;
    characterImage.style.display = "block";
    answerInput.value = ""; 
    resultMessage.textContent = ""; 
    resultMessage.style.display = "none"; 
}

// Проверка ответа
function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase(); // Приводим к нижнему регистру

    // Приводим название аниме к нижнему регистру и разбиваем на слова
    const correctAnswerWords = currentCharacter.anime.toLowerCase().split(" ");

    // Проверяем, содержится ли хотя бы одно слово из правильного ответа в введённом ответе
    const isCorrect = correctAnswerWords.some(word => userAnswer.includes(word));

    if (isCorrect) {
        resultMessage.textContent = "Верно!";
        resultMessage.style.color = "green"; 
        resultMessage.style.backgroundColor = "black"; 
        resultMessage.style.padding = "5px 10px"; 
        resultMessage.style.borderRadius = "5px"; 
        resultMessage.style.display = "block"; 
        setTimeout(nextCharacter, 3000); // Через 2 сек. новый персонаж
    } else {
        resultMessage.textContent = "Неверно. Попробуйте ещё!";
        resultMessage.style.color = "red"; 
        resultMessage.style.backgroundColor = "black"; 
        resultMessage.style.padding = "1px 10px"; 
        resultMessage.style.borderRadius = "5px"; 
        resultMessage.style.display = "block"; 
    }
}

// Обработчик нажатия кнопки
submitAnswer.addEventListener("click", checkAnswer);

// Обработчик нажатия клавиши Enter
answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkAnswer(); // Вызываем функцию проверки ответа при нажатии Enter
    }
});
