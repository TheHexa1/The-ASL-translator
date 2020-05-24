$(function(){
    var video = document.querySelector("#videoElement");
    
    $('#turn_on').click(function (){
        if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err0r) {
                console.log("Something went wrong!");
            });
        }
    });

    $('#turn_off').click(function (){
        var stream = video.srcObject;
        var tracks = stream.getTracks();

        for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
        }

        video.srcObject = null;
    });
});