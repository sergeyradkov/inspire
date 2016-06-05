app.controller('ImageController', function(ImageService){
	var ic = this;
	
	ic.img = ImageService.getImage();

});
app.service('ImageService', function($http){
	images = [
		"https://static.pexels.com/photos/92080/pexels-photo-92080.jpeg",
		"https://static.pexels.com/photos/105600/pexels-photo-105600.jpeg",
		"https://static.pexels.com/photos/105862/pexels-photo-105862.jpeg",
		"https://static.pexels.com/photos/106346/pexels-photo-106346.jpeg",
		"https://static.pexels.com/photos/1079/abstract-blur-green-blurred.jpg"
	]
	this.getImage =  function(){
		// return $http.get('http://www.splashbase.co/api/v1/images/random').then(function(res){
		// 	console.log('Image Data:', res.data)
		// 	return res.data;
		// })
		var x =  Math.floor(Math.random() * (images.length));
		debugger
		return images[x];
	}
})