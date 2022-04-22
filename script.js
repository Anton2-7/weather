const param = {
        "url" : "https://api.openweathermap.org/data/2.5/",
        "appid" : "ваш_ключ"
    }


    function getWeather() {
        const cityId = document.querySelector('#choice').value;
        fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=d463a889c5bf1f92dc24f0f16a3d68f2
        `)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
    }
    function showWeather(data) {
        document.querySelector('.weather-city h1').textContent = data.name;
        document.querySelector('.weather-deegre p').innerHTML = Math.round(data.main.temp) + '&deg;';
        document.querySelector('.weather-features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.weather-description').textContent = `${data.weather[0]['description']}`;
        document.querySelector('.weather-wind p').innerHTML = `<strong>Speed of Wind:</strong>  ${Math.round(data.wind.speed)}`;
        document.querySelector('.weather-pressure').innerHTML = `<strong>Pressure: </strong>${data.main.pressure}`;
        document.querySelector('.weather-humidity').innerHTML = `<strong>Humidity: </strong>${data.main.humidity}`;

        console.log(data);
        // здесь вы выводите на страницу
    }
    getWeather ();
    document.querySelector('#choice').onchange = getWeather;