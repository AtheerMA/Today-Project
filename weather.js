const apiKey = '52f08634c93a3e54a8619f329991ab91';
const city = 'Riyadh';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

fetch(url)
.then(response => response.json())
.then(data => {

    const time = data.timezone;
    const temp = data.main.temp;
    const weather = data.weather[0].description;

    document.getElementById('city').innerText = city;
    document.getElementById('time').innerText = time;
    document.getElementById('temp').innerText = temp;
    document.getElementById('weather').innerText = weather;
    
}
)