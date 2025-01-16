const characters = [
   { img: "game/dmc.jpg", bro: "Devil May Cry 3", year: 2005 },
{ img: "game/stlk.jpg", bro: "Stalker Call of Pripyat", year: 2009 },
{ img: "game/lol.webp", bro: "Stalker Shadow of Chernobyl", year: 2007 },
{ img: "game/mtl.jpg", bro: "Metal Gear Rising", year: 2013 },
{ img: "game/unch.jpg", bro: "Uncharted 4", year: 2016 },
{ img: "game/dota.jpg", bro: "Dota 2", year: 2013 },
{ img: "game/tomb.jpg", bro: "Tomb Raider", year: 2013 },
{ img: "game/slime.jpg", bro: "Slime rancher", year: 2016 },
{ img: "game/cj.jpg", bro: "Grand theft auto San Andreas", year: 2004 },
{ img: "game/munh.png", bro: "Manhunt", year: 2003 },
{ img: "game/pavel.jpg", bro: "Metro Last light", year: 2013 },
{ img: "game/alien.jpg", bro: "Alien ISOLATION", year: 2014 },
{ img: "game/bunk.png", bro: "Amnesia The bunker", year: 2023 },
{ img: "game/rbolox.webp", bro: "Roblox", year: 2006 },
{ img: "game/monuja.webp", bro: "Doki doki", year: 2017 },
{ img: "game/2b.png", bro: "Nier Automata", year: 2017 },
{ img: "game/55.jpg", bro: "Baldurs gate 3", year: 2023 },
{ img: "game/dbd.jpg", bro: "Dead By daylight", year: 2016 },
{ img: "game/raiden.jpg", bro: "Genshin impact", year: 2020 },
{ img: "game/www.jpg", bro: "Wuthering Waves", year: 2024 },
{ img: "game/postal.jpg", bro: "Postal", year: 1997 },
{ img: "game/sosk.jpg", bro: "Bioshock 2", year: 2010 },
{ img: "game/kngdm.avif", bro: "Kingdom Come Deliverance", year: 2018 },
{ img: "game/tel.jpg", bro: "Devil May Cry 5", year: 2019 },
{ img: "game/onc.jpg", bro: "Once Human", year: 2024 },
{ img: "game/am.jpg", bro: "Among Us", year: 2018 },
{ img: "game/den.jpg", bro: "Fear Therapy", year: 2022 },
{ img: "game/rez.jpg", bro: "Resident Evil 5", year: 2009 },
{ img: "game/soma.png", bro: "Soma", year: 2015 },
{ img: "game/tj.webp", bro: "The Last Stand Aftermatch", year: 2023 },
{ img: "game/brdd.webp", bro: "Borderlands 3", year: 2019 },
{ img: "game/jet.avif", bro: "Subnautica", year: 2014 },
{ img: "game/laa.webp", bro: "Hitman World of Assassination", year: 2022 },
{ img: "game/far.jpg", bro: "Far Cry 3", year: 2012 },
{ img: "game/cas.jpg", bro: "Just Cause 2", year: 2010 },
{ img: "game/hnk.jpg", bro: "Honkai Star Rail", year: 2023 },
{ img: "game/farcr.jpg", bro: "Far Cry", year: 2004 },
{ img: "game/br.jpg", bro: "Stalker 2", year: 2024 },
{ img: "game/zapa.jpg", bro: "Left 4 Dead 2", year: 2009 },
{ img: "game/detroit.jpg", bro: "Detroit Become Human", year: 2018 },
{ img: "game/dd.jpg", bro: "Doom Eternal", year: 2020 },
{ img: "game/wtch.jpg", bro: "Watch Dogs 2", year: 2016 },
{ img: "game/z.jpg", bro: "Yakuza 0", year: 2015 },
{ img: "game/mass.jpg", bro: "Mass Effect", year: 2007 },
{ img: "game/cd.jpg", bro: "Call of Duty", year: 2003 },
{ img: "game/hvr.avif", bro: "Heavy Rain", year: 2010 },
{ img: "game/maboy.webp", bro: "Hatred", year: 2015 },
{ img: "game/gow.webp", bro: "God Of War Valhalla", year: 2020 },
{ img: "game/vice.png", bro: "Grand Theft Auto Vice City", year: 2002 },
{ img: "game/alan wake 2.webp", bro: "Alan Wake 2", year: 2023 },
{ img: "game/ss.webp", bro: "Assassin Creed Shadow", year: 2023 },
{ img: "game/dg.jpg", bro: "Dragon Age", year: 2009 },
{ img: "game/sd.jpg", bro: "Simulator Stone", year: 2023 },
{ img: "game/asd.jpg", bro: "Cyberpunk 2077", year: 2020 },
{ img: "game/eld.avif", bro: "Elden Ring", year: 2022 },
{ img: "game/rdr.jpg", bro: "Red Dead Redemption", year: 2010 },
{ img: "game/mine.jpg", bro: "Minecraft", year: 2011 },
{ img: "game/afss.jpg", bro: "No Mans Sky", year: 2016 },
{ img: "game/lz.png", bro: "Tears of the Kingdom", year: 2023 },
{ img: "game/bynt.jpg", bro: "Bayonetta 2", year: 2014 },
{ img: "game/hrz.jpg", bro: "Horizon Forbidden West", year: 2022 },
{ img: "game/bb.webp", bro: "Black Myth Wukong", year: 2024 },
{ img: "game/ed.jpg", bro: "Enlisted", year: 2021 },
{ img: "game/fdaa.jpg", bro: "Dishonored 2", year: 2016 },
{ img: "game/fatal.jpg", bro: "Fatal Frame", year: 2001 },
{ img: "game/sgh.jpg", bro: "Signalis", year: 2022 },
{ img: "game/images.jpg", bro: "Dead Space", year: 2008 },
{ img: "game/213.jpg", bro: "The Last of Us", year: 2013 },
{ img: "game/outs.jpg", bro: "Outlast 2", year: 2017 },
{ img: "game/sada.webp", bro: "Alone In the Dark", year: 2008 },
{ img: "game/mff.webp", bro: "Mafia", year: 2002 },
{ img: "game/dead or alive.webp", bro: "Dead or Alive", year: 1996 },
{ img: "game/mortal kombat.jpg", bro: "Mortal Kombat 1", year: 1992 },
{ img: "game/dddd.jpg", bro: "Dying Light", year: 2015 },
{ img: "game/fff.jpg", bro: "Fallout", year: 1997 },
{ img: "game/hlf.jpg", bro: "Half Life 2", year: 2004 },
{ img: "game/disco.webp", bro: "Disco Elysium", year: 2019 },
{ img: "game/btm.jpg", bro: "Batman", year: 2009 },
{ img: "game/por.jpg", bro: "Portal 2", year: 2011 },
{ img: "game/htl.jpg", bro: "Hotline Miami", year: 2012 },
{ img: "game/btl.jpg", bro: "Battlefield", year: 2002 },
{ img: "game/frg.png", bro: "Fear and Hunger", year: 2022 },
{ img: "game/max.jpg", bro: "Max Payne 3", year: 2012 },
{ img: "game/231.jpg", bro: "Metro Exodus", year: 2019 },
{ img: "game/r5.png", bro: "Cry Of Fear", year: 2012 },
{ img: "game/stray.jpg", bro: "Stray", year: 2022 },
{ img: "game/silent.jpg", bro: "Silent Hill 3", year: 2003 },
{ img: "game/fn.jpg", bro: "Final Fantasy 7", year: 1997 },
{ img: "game/gsh.jpg", bro: "Ghost of Tsushima", year: 2020 },
{ img: "game/521.jpg", bro: "The Callisto Protocol", year: 2022 },
{ img: "game/pvz.jpg", bro: "Plants vs Zombies", year: 2009 },
{ img: "game/a.jpg", bro: "Street Fighter 6", year: 2023 },
{ img: "game/tew.webp", bro: "The Evil Within 2", year: 2017 },
{ img: "game/ctr.jpg", bro: "Control", year: 2019 },
{ img: "game/oke.jpg", bro: "Death Stranding", year: 2019 },
{ img: "game/bld.jpg", bro: "Bloodborne", year: 2015 },
{ img: "game/444.jpg", bro: "Dead Cells", year: 2018 },
{ img: "game/l4.jpg", bro: "Tom Clancy's The Division 2", year: 2019 },
{ img: "game/g5.png", bro: "Cuphead", year: 2017 },
{ img: "game/sla.jpg", bro: "The Outer Worlds", year: 2019 },
{ img: "game/the witcher.jpg", bro: "The Witcher 3", year: 2015 }
    
];

let currentCharacter = null;
let usedCharacters = [];
let coins = 0; 
let isAnswering = false;
const BUTTON_COOLDOWN_TIME = 2500;
const startButton = document.getElementById("startButton");
const introDiv = document.getElementById("introText");
const gameDiv = document.getElementById("game");
const characterImage = document.getElementById("characterImage");
const answerInput = document.getElementById("answerInput");
const submitAnswer = document.getElementById("submitAnswer");
const resultMessage = document.getElementById("resultMessage");
const coinDisplay = document.getElementById("coinDisplay");
const hintFirstLetterButton = document.getElementById("hintFirstLetter");
const hintFullNameButton = document.getElementById("hintFullName");
const mainButton = document.querySelector('.fucker'); 

startButton.addEventListener("click", () => {
    introDiv.style.display = "none";
    gameDiv.style.display = "block";
    const mainButton = document.querySelector('.fucker');
    if (mainButton) {
        mainButton.style.display = "none"; 
    }

    nextCharacter();

});

let correctAnswersCount = 0;

function checkForBonusQuestion() {
    if (correctAnswersCount > 0 && correctAnswersCount % 7 === 0) {
        showBonusQuestion();
    }
}
function showBonusQuestion() {
    const userAnswer = confirm(
        `BONUS: В каком году была выпущена игра "${currentCharacter.bro}"?`
    );

    if (userAnswer !== null) {
        const userAnswer = prompt("Введите год:");
        if (parseInt(userAnswer, 10) === currentCharacter.year) {
            alert("Правильно! +15 coins");
            coins += 15;
            updateCoinsDisplay();
        } else {
            alert(`Неверно. Правильный ответ: ${currentCharacter.year}`);
        }
    }
}

function nextCharacter() {
    if (usedCharacters.length === characters.length) {
        resultMessage.textContent = "Ты угадал всех! f5 начать заново";
        resultMessage.style.color = "blue";
        resultMessage.style.backgroundColor = "green";
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

let currentMathQuestionIndex = 0;
let wrongAnswersCount = 0;
let mathQuestions = [
    { question: "2 + 2", answer: "4" },
    { question: "5 + 5", answer: "10" },
    { question: "3 + 7", answer: "10" },
    { question: "6 + 1", answer: "7" },
    { question: "9 + 2", answer: "11" },
    { question: "55+22", answer: "77"},
    { question: "42+21", answer: "63"},
    { question: "65+13", answer: "78"}
];
function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    if (userAnswer === "") return;

    const correctAnswerWords = currentCharacter.bro.toLowerCase().split(" ");
    const isCorrect = correctAnswerWords.every(word => userAnswer.toLowerCase().includes(word));

    if (isCorrect) {
        resultMessage.textContent = "Верно!";
        resultMessage.style.color = "green";
        resultMessage.style.backgroundColor = "black";
        resultMessage.style.padding = "5px 10px";
        resultMessage.style.borderRadius = "5px";
        resultMessage.style.display = "block";
        coins += 5; 
        wrongAnswersCount = 0;
        correctAnswersCount++;
        updateCoinsDisplay();
        checkForBonusQuestion();
   

   
        setTimeout(() => {
            submitAnswer.style.display = "none";
        }, BUTTON_COOLDOWN_TIME);

        setTimeout(nextCharacter, BUTTON_COOLDOWN_TIME);
    } else {
        resultMessage.textContent = "Неверно. Попробуйте ещё!";
        resultMessage.style.color = "red";
        resultMessage.style.backgroundColor = "black";
        resultMessage.style.padding = "1px 10px";
        resultMessage.style.borderRadius = "5px";
        resultMessage.style.display = "block";
        wrongAnswersCount++;
        const incorrectSound = document.getElementById("correctSound");
        if (incorrectSound) {
            incorrectSound.play();
            setTimeout(() => {
                incorrectSound.pause();
                incorrectSound.currentTime = 0;
            }, 3500);
        }
        if (wrongAnswersCount > 5) {
            
            const help = confirm("в жизни видимо не угадаешь, ХЕЛПА НАД?")

            if (help) {
                const mathQuestion = mathQuestions[currentMathQuestionIndex];
                const userMathAnswer = prompt(`help: ${mathQuestion.question} `);
                if (userMathAnswer === mathQuestion.answer) {
                    resultMessage.textContent = `${currentCharacter.bro}`;
                    resultMessage.style.color = "black";
                    resultMessage.style.backgroundColor = "green";
                    resultMessage.style.padding = "5px 10px";
                    resultMessage.style.borderRadius = "5px";
                    resultMessage.style.display = "block";
                    coins += 5;
                    updateCoinsDisplay();

                    
                    wrongAnswersCount = 0;
                    setTimeout(nextCharacter, BUTTON_COOLDOWN_TIME);
                    currentMathQuestionIndex++;
                    if (currentMathQuestionIndex >= mathQuestions.length) {
                 
                        resultMessage.textContent = "всё епт хелпы не будет";
                        resultMessage.style.display = "block";
                    }
                } else {
                    resultMessage.textContent = "Неверно. Попробуйте ещё!";
                }
            }
        }
    
    }


    isAnswering = true;
}


function updateCoinsDisplay() {
    coinDisplay.textContent = coins;
    localStorage.setItem("coins", coins);
}

submitAnswer.addEventListener("click", () => {
    if (answerInput.value.trim() === "") return;
    submitAnswer.style.display = "none";
    setTimeout(() => {
        submitAnswer.style.display = "block";
    }, BUTTON_COOLDOWN_TIME);
    checkAnswer();
});
let isEnterCooldown = false;  
window.addEventListener("load", () => {
    const savedCoins = localStorage.getItem("coins");
    if (savedCoins !== null) {
        coins = parseInt(savedCoins, 10); 
        updateCoinsDisplay(); 
    }
});
answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (answerInput.value.trim() === "" || isEnterCooldown) {
            return; 
        }

   
        isEnterCooldown = true;

       
        submitAnswer.style.display = "none";

      
        checkAnswer();

        
        setTimeout(() => {
            submitAnswer.style.display = "block";
            isEnterCooldown = false;  
        }, 2500);
    }
});

hintFirstLetterButton.addEventListener("click", () => {
    if (resultMessage.textContent === "Верно!") {
        alert("ты угадал уже але");
        return;
    }
    if (coins >= 10) {
        resultMessage.textContent = `Первая буква: ${currentCharacter.bro.charAt(0)}`;
        resultMessage.style.display = "block";
 
        coins -= 10;
        updateCoinsDisplay();
    } else {
        alert("хуй те монет нету");
    }
});

hintFullNameButton.addEventListener("click", () => {
    if (resultMessage.textContent === "Верно!") {
        
        alert("угадал ты уже але");
        return;
    }
    if (coins >= 40) {
        resultMessage.textContent = `Полное название игры: ${currentCharacter.bro}`;
        resultMessage.style.display = "block";
        coins -= 40;
        updateCoinsDisplay();
    } else {
        alert("хуй те монет нету");
    }
});
