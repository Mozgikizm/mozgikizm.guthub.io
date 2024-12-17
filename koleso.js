const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const spinButton = document.getElementById('spin-button');
const resultDisplay = document.getElementById('result');
const updateButton = document.getElementById('update-wheel');
const numSegmentsInput = document.getElementById('num-segments');
const segmentLabelsInput = document.getElementById('segment-labels');

let segments = ['Нет', 'Да '];
let segmentColors = ['#bacddd', '#89a9c5'];
let totalSegments = segments.length;
let currentAngle = 0;
let spinSpeed = 0;
let spinning = false;


function drawWheel() {
    totalSegments = segments.length;
    const anglePerSegment = (Math.PI * 2) / totalSegments;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < totalSegments; i++) {
        const startAngle = currentAngle + i * anglePerSegment;
        const endAngle = startAngle + anglePerSegment;
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, startAngle, endAngle);
        ctx.fillStyle = segmentColors[i % segmentColors.length]; 
        ctx.fill();
        ctx.stroke();

        
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((startAngle + endAngle) / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#fff";
        ctx.font = "20px Arial";
        ctx.fillText(segments[i], canvas.width / 2 - 10, 10);
        ctx.restore();
    }
}

function rotateWheel() {
    if (spinSpeed > 0) {
        currentAngle += spinSpeed;
        spinSpeed *= 0.98; 
        if (spinSpeed < 0.01) {
            spinSpeed = 0;
            spinning = false;
           
            const resultIndex = Math.floor((totalSegments - (currentAngle % (Math.PI * 2)) / (Math.PI * 2)) * totalSegments) % totalSegments;
            resultDisplay.textContent = 'Выпало: ' + segments[resultIndex]; 
        }
    }
    drawWheel();
    requestAnimationFrame(rotateWheel);
}

spinButton.addEventListener('click', () => {
    if (!spinning) {
        spinSpeed = Math.random() * 0.3 + 0.2; 
        spinning = true;
        resultDisplay.textContent = ''; 
    }
});

updateButton.addEventListener('click', () => {
    const numSegments = parseInt(numSegmentsInput.value);
    const labels = segmentLabelsInput.value.split(',').map(label => label.trim());
    
    if (labels.length !== numSegments) {
        alert('Некорректно. Примеры: 2блока = да, нет / 3 Блока = да, нет, да.');
        return;
    }

    segments = labels;
    drawWheel(); 
});


drawWheel();
rotateWheel();
