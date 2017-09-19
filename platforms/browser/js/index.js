// https://www.npmjs.com/package/cordova-plugin-camera

var app = {
    image: null,
	imgOptions:null,
    
    initialize: function() {
      // Use deviceready on a device in in the emulator
           //     document.addEventListener('deviceready', this.onDeviceReady, false);
      // Use DOMContentLoaded in a browser
        document.addEventListener("DOMContentLoaded", this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        document.querySelector("#btn").addEventListener("click", app.callCamera);
		console.log("button listener added");
		app.image = document.querySelector("#image");
    },
    
    callCamera: function ( ) {
		app.imgOptions = {quality : 75,
				destinationType: Camera.DestinationType.DATA_URL,
  				sourceType: Camera.PictureSourceType.CAMERA,
				allowEdit : false,
				encodingType : Camera.EncodingType.JPEG,
				mediaType: Camera.MediaType.PICTURE,
				targetWidth : 200,
				cameraDirection : Camera.Direction.FRONT,
				saveToPhotoAlbum : false
			   };
        
        navigator.camera.getPicture( app.imgSuccess, app.imgFail, app.imgOptions );
    },
    
	imgSuccess: function ( imageData ) {
		//got an image back from the camera
   		app.image.src = "data:image/jpeg;base64," + imageData;
		console.log("Image loaded into interface");
		//clear memory in app
		navigator.camera.cleanup();
	},
    
	imgFail: function ( msg ) {
		console.log("Failed to get image: " +  msg);
	}
    
};

app.initialize();

