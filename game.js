const characters = [
    { img: "animequiz/killa.jpg", anime: "Убийца Акаме" },
    { img: "animequiz/rock.jpg", anime: "Одинокий Рокер" },
    { img: "animequiz/touka.jpg", anime: "Токийский гуль" },
    { img: "animequiz/parasite.jpg", anime: "Паразит" },
    { img: "animequiz/sword.jpg", anime: "Мастера меча онлайн" },
    { img: "animequiz/zabotu.jpg", anime: "Заботы запертой принцессы вампиров" },
    { img: "animequiz/ram.webp", anime: "Ре зеро" },
    { img: "animequiz/code.jpg", anime: "Код гиас" },
    { img: "animequiz/akashi.jpg", anime: "Баскетбол Куроко" },
    { img: "animequiz/ulqiorr.webp", anime: "Блич" },
    { img: "animequiz/meliodas.jpg", anime: "Семь Смертных Грехов" },
    { img: "animequiz/franx.jpg", anime: "Милый во франксе" },
    { img: "animequiz/ruin.jpg", anime: "Королевство руин" },
    { img: "animequiz/net.jpg", anime: "Нет игры нет жизни" },
    { img: "animequiz/vosj.jpg", anime: "Восхождение в тени" },
    { img: "animequiz/bers.webp", anime: "Ненасытный Берсерк" },
    { img: "animequiz/vel.jpg", anime: "О моём Перерождение В слизь" },
    { img: "animequiz/class.jpg", anime: "Класс Превосходства" },
    { img: "animequiz/draken.jpg", anime: "Токийские Мстители" },
    { img: "animequiz/krul.jpg", anime: "Последний Серафим" },
    { img: "animequiz/light.jpg", anime: "Тетрадь Смерти" },
    { img: "animequiz/arima.jpg", anime: "Звёздное дитя" },
    { img: "animequiz/sukuna.webp", anime: "Магическая Битва" },
    { img: "animequiz/makima.png", anime: "Человек Бензопила" },
    { img: "animequiz/feitan.jpg", anime: "Хантер х Хантер" },
    { img: "animequiz/aizu.webp", anime: "Может, я встречу тебя в подземелье" },
    { img: "animequiz/ayato.jpg", anime: "Бездомный Бог" },
    { img: "animequiz/satana.jpg", anime: "Сатана на подработке" },
    { img: "animequiz/vergil.jpg", anime: "Дьявол Тоже Может Плакать" },
    { img: "animequiz/dante.jpg", anime: "Дьявол Тоже Может Плакать" },
    { img: "animequiz/anos.jpg", anime: "Непризнанный школой владыка демонов" },
    { img: "animequiz/sliz.webp", anime: "Убивая слизней 300 лет" },
    { img: "animequiz/per.webp", anime: "Перестану Быть Героем" },
    { img: "animequiz/per.webp", anime: "Клинок, рассекающий демонов " },
    { img: "animequiz/pov.jpg", anime: "Повелитель демонов 2099" },
    { img: "animequiz/gab.jpg", anime: "Адский рай" },
    { img: "animequiz/qu.jpg", anime: "Королева, ставшая причиной трагедии, сделает для народа всё, что в её силах" },
    { img: "animequiz/lun.webp", anime: "Лунное путешествие в другой мир" },
    { img: "animequiz/nero.jpg", anime: "Чёрный Клевер" },
    { img: "animequiz/cid.webp", anime: "Когда плачут цикады" }
];

let currentCharacter = null;
let usedCharacters = [];
let isAnswering = false;
let isButtonCooldown = false;  
let isEnterCooldown = false;   
const BUTTON_COOLDOWN_TIME = 2500; 

const startButton = document.getElementById("startButton");
const introDiv = document.getElementById("introText");
const gameDiv = document.getElementById("game");
const characterImage = document.getElementById("characterImage");
const answerInput = document.getElementById("answerInput");
const submitAnswer = document.getElementById("submitAnswer");
const resultMessage = document.getElementById("resultMessage");

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
        randomIndex = Math.floor(Math.random() * characters.length);
    } while (usedCharacters.includes(randomIndex));

    currentCharacter = characters[randomIndex];
    usedCharacters.push(randomIndex);

    characterImage.src = currentCharacter.img;
    characterImage.style.display = "block";
    answerInput.value = "";
    resultMessage.textContent = "";
    resultMessage.style.display = "none";
    isAnswering = true;
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim();

    if (userAnswer === "") {
        return;
    }

    if (!isAnswering) {
        return;
    }

    const correctAnswerWords = currentCharacter.anime.toLowerCase().split(" ");
    const isCorrect = correctAnswerWords.some(word => userAnswer.toLowerCase().includes(word));

    if (isCorrect) {
        resultMessage.textContent = "Верно!";
        resultMessage.style.color = "green";
        resultMessage.style.backgroundColor = "black";
        resultMessage.style.padding = "5px 10px";
        resultMessage.style.borderRadius = "5px";
        resultMessage.style.display = "block";

        submitAnswer.style.display = "none";

setTimeout(() => {
    submitAnswer.style.display = "block";
}, 2500);
        setTimeout(nextCharacter, 2500);
     
    } else {
        resultMessage.textContent = "Неверно. Попробуйте ещё!";
        resultMessage.style.color = "red";
        resultMessage.style.backgroundColor = "black";
        resultMessage.style.padding = "1px 10px";
        resultMessage.style.borderRadius = "5px";
        resultMessage.style.display = "block";
    }

    isAnswering = true;
}

submitAnswer.addEventListener("click", () => {
    if ( answerInput.value.trim() === "") {
        return;
    }
    submitAnswer.style.display = "none";
   

    setTimeout(() => {
        submitAnswer.style.display = "block";
   
    }, 2500);

    checkAnswer();
});


answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (isEnterCooldown || answerInput.value.trim() === "") {
     
            return;
        }

        
        isEnterCooldown = true;
        setTimeout(() => {
      
            isEnterCooldown = false;
        }, BUTTON_COOLDOWN_TIME);

        checkAnswer();
    }
});
