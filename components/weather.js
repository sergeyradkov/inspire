app.controller('WeatherController', function(WeatherService){
	var wc = this;
	var far = false;
	wc.tempShow = '';
	
	WeatherService.getWeather().then(function(weather){
	wc.wind = weather.wind.speed;
	wc.pressure = weather.main.pressure;
	wc.des = weather.weather[0].description;
	wc.humidity = weather.main.humidity;
	wc.tempF = Math.round((weather.main.temp * 9)/5 - 459.67);
	wc.tempC = Math.round(weather.main.temp - 273.15);
	wc.tempShow = wc.tempF + " F";	
	})
	// DO NOT EDIT ABOVE
	
	wc.showTemp = function(){
	if(far == true)	{
	wc.tempShow = wc.tempF + " F";
	far = false
		} else {
			wc.tempShow = wc.tempC + " C";
			far = true;
		}  return wc.tempShow;
	}
})
app.service('WeatherService', function($q, $http){
	
	this.getWeather =  function(){
		var w = localStorage.getItem('weather');
		if(w){
			var deferred = $q.defer();
			deferred.resolve(JSON.parse(w))
			console.log('Weather Data:', JSON.parse(w))
			return deferred.promise;
		}
		
		return $http.get('http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35').then(function(res){
			localStorage.setItem('weather', JSON.stringify(res.data))
			console.log('Weather Data:', res.data)
			return res.data;
		})
	}
})