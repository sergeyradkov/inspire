app.controller('TimeCtrl', function($scope, $interval){
  var time = this;
  
  var tick = function() {
    
    $scope.clock = Date.now();
    var d = new Date();
    var h = d.getHours();
    if(h < 5 || h > 21) time.mes = "Good night, Idaho!";
    if(h > 5  && h < 12 ) part = "Good morning, Idaho";
    if(h > 12 && h < 17 ) time.mes = "Good afternoon, Idaho";
    if(h > 17 && h < 21 ) part = "Good evening, Idaho";    
  }
  
   tick();
   $interval(tick, 1000);
});