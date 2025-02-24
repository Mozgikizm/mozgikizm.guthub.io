function updateDateTime() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Yekaterinburg',
        hour12: false, 
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const babkueb ={
    timeZone: 'Europe/Kyiv',
    hour12: false, 
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};
const dateTimeMoscow = new Intl.DateTimeFormat('ru-RU', options).format(now);
const dateTimeKyiv = new Intl.DateTimeFormat('ru-RU', babkueb).format(now);

document.querySelector('.times').innerHTML = 
    ` ${dateTimeMoscow} <br> ${dateTimeKyiv}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);