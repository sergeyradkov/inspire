app.controller('ImageController', function(ImageService){
	var ic = this;
	
	ic.img = ImageService.getImage();

});
app.service('ImageService', function($http){
	images = [
		"https://static.pexels.com/photos/105820/pexels-photo-105820-large.jpeg",
		// "https://static.pexels.com/photos/105600/pexels-photo-105600-large.jpeg",
		// "https://static.pexels.com/photos/105607/pexels-photo-105607-large.jpeg"
		// "https://static.pexels.com/photos/106400/pexels-photo-106400-medium.jpeg",
		// "https://static.pexels.com/photos/106367/pexels-photo-106367-medium.jpeg",
		// "https://static.pexels.com/photos/105857/pexels-photo-105857-medium.jpeg"
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