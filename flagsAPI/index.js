$(document).ready(function () {
    function fetchFlag() {

        // using ajax() method

        // let xhrObj = $.ajax({
        //     type: "GET",
        //     url: "https://restcountries.com/v3.1/name/india",
        //     success: function (response) {
        //         let source = response[1].flags['png'];
        //         console.log(source);
        //         $("#ctr-img").attr({'src': source ,'alt' : "india"});
        //     }
        // });

        // using get() method

        let xhrObj = $.get("https://restcountries.com/v3.1/name/india", function (data) {
            var imageURL = data[1].flags.png;
            $("#ctr-img").attr("src", imageURL);
        }
        );
        console.log(xhrObj);
    }
    $("#fetch-btn").click(fetchFlag);
});

// var part = $('<div>',{
//     id:'first',
//     class:'container',
//     text:'this is a div append',
//     style: "background-color: lightblue; color: white; padding: 10px;"
// }).appendTo("body")

// $("<h1>",{
//     class:"test",
//     'text':'click me',
//     'click':function(){
//         $(this).css('color','red');
//     }
// }).appendTo("body")

