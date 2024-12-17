function checkScreenResolution() {
    const screenWidth = window.screen.width;   
    const screenHeight = window.screen.height; 
    const deviceScale = Math.round(window.devicePixelRatio * 100) / 100;

    console.log(`Ширина экрана: ${screenWidth}, Высота экрана: ${screenHeight}`);
    console.log(`Масштаб: ${deviceScale}`);

    const resolutionMatch = (screenWidth === 1920 && screenHeight === 1080);
    const scaleMatch = deviceScale === 1;

    if (!(resolutionMatch && scaleMatch)) {
        document.body.innerHTML = `
            <div style="
                text-align: center; 
                padding: 50px; 
                font-family: Arial, sans-serif; 
                color: #333;">
                <h1 style="color: red;">⚠ Доступ запрещен ⚠</h1>
                <p>Ваше разрешение экрана: <b>${screenWidth}x${screenHeight}</b></p>
                <p>Ваш масштаб: <b>${deviceScale}</b></p>
                <p>Установите разрешение <b>1920x1080</b> и масштаб <b>100%</b>, затем перезагрузите страницу.</p>
            </div>
        `;
    }
}

window.onload = checkScreenResolution;
