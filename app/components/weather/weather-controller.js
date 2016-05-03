app.controller('WeatherController', function(WeatherService){
	var wc = this;
	var far = false;
	wc.tempShow = '';
	
	WeatherService.getWeather().then(function(weather){
	wc.weather = weather;
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