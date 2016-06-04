app.controller('TimeCtrl', function($scope, $interval, WeatherService){
  var time = this;
  
	WeatherService.getWeather().then(function(weather){
	time.city = weather.name;
	})

  var tick = function() {
    $scope.clock = Date.now();
    var d = new Date();
    var h = d.getHours();
    if(h < 5  || h > 21 ) time.mes = "Good night, ";
    if(h > 5  && h < 12 ) time.mes = "Good morning, ";
    if(h > 12 && h < 17 ) time.mes = "Good afternoon, ";
    if(h > 17 && h < 21 ) time.mes = "Good evening, ";    
  }
  
   tick();
   $interval(tick, 1000);
});