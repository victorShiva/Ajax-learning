$(document).ready(function () {

    function fetchRandomDogImage() {
        var xhrRequest = new XMLHttpRequest();

        xhrRequest.onload=function(){
            let responseJson =JSON.parse(xhrRequest.response);
            let imageUrl = responseJson.message;
            console.log(imageUrl)
            $("#dog-image").attr('src',imageUrl);
        }
        xhrRequest.open('GET','https://dog.ceo/api/breeds/image/random',true);
        xhrRequest.send();

    }

    $('#fetch-image').click(fetchRandomDogImage);
});