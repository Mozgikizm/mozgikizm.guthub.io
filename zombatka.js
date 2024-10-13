function isWeekend(date) {
    return date.getDay() === 0; 
}

function calculateBusinessDays(startDate, endDate) {
    let totalDays = 0;
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        if (!isWeekend(currentDate)) {
            totalDays++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return totalDays - 60; 
}

function calculateTimeLeft(targetDate) {
    const now = new Date('2024-09-01'); 
    const totalBusinessDays = calculateBusinessDays(now, targetDate);

  
    const totalMilliseconds = Math.max(totalBusinessDays, 0) * 86400000; 
    const targetTime = now.getTime() + totalMilliseconds;

    const remainingTime = targetTime - Date.now();

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

function updateTimer(elementId, years, months) {
    const targetDate = new Date('2024-09-01'); 
    targetDate.setFullYear(targetDate.getFullYear() + years);
    targetDate.setMonth(targetDate.getMonth() + months);

    const update = () => {
        const { days, hours, minutes, seconds } = calculateTimeLeft(targetDate);
        document.getElementById(elementId).innerText = `${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек.`;
    };

    setInterval(update, 1000);
    update();
}

updateTimer('timer1', 2, 10); 
updateTimer('timer2', 3, 10); 
