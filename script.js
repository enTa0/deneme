document.getElementById('greetButton').addEventListener('click', function() {
    alert('Merhaba, kullanıcı!');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mesajınız gönderildi!');
});

// Oyun Kodu
let score = 0;
let gameInterval;

document.getElementById('startGameButton').addEventListener('click', function() {
    score = 0;
    document.getElementById('score').innerText = score;
    startGame();
});

function startGame() {
    const target = document.getElementById('target');
    target.style.display = 'block';
    
    gameInterval = setInterval(function() {
        const x = Math.floor(Math.random() * (gameContainer.clientWidth - target.clientWidth));
        const y = Math.floor(Math.random() * (gameContainer.clientHeight - target.clientHeight));
        target.style.left = `${x}px`;
        target.style.top = `${y}px`;
    }, 1000);
}

document.getElementById('target').addEventListener('click', function() {
    score++;
    document.getElementById('score').innerText = score;
});

// Hava Durumu API'si
document.getElementById('fetchWeatherButton').addEventListener('click', function() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&current_weather=true')
        .then(response => response.json())
        .then(data => {
            const weatherInfo = data.current_weather.temperature + '°C, ' + data.current_weather.weathercode;
            document.getElementById('weatherInfo').innerText = weatherInfo;
        })
        .catch(error => console.error('Hava durumu bilgisi alınamadı:', error));
});
