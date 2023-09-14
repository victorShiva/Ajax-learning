$(document).ready(function () {

    function fetchData() {

        // ajax() method using jquery 

        // let httpRequestObj =$.ajax({
        //     type: "get",
        //     url: "https://restcountries.com/v3.1/all?fields=name,flags",
        //     data: "data",
        //     dataType: "json",
        //     success: function (response,a,c) { 
        //         let arr = response[0].flags.png;
        //         $("#ctr-image").attr("src",arr);
        //         console.log(c);
        //     }
        // });


        //ajax get() method using jquery

        let httpRequestObj = $.get("https://restcountries.com/v3.1/all?fields=name,flags",   function (data, textStatus, jqXHR) {
            let arr = data[0].flags.png;
            console.log(data[0].flags);
            $("#ctr-image").attr("src",arr);
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);
            }
        );
        httpRequestObj.done(function(data2){
            console.log(data2)
        })



        //ajax load() method using jquery

        // let httpRequestObj = $("body").load("https://restcountries.com/v3.1/all?fields=name,flags", function (response, statusText, xhrObj) {
        //     console.log(JSON.parse(response));
        //     console.log(statusText);
        //     console.log(xhrObj);
        // })



        console.log(httpRequestObj);
    }

    $("#fetch-image").click(fetchData);

    // $("#fetch-image").click(function(){
    //     $.get("https://restcountries.com/v3.1/all?fields=name,flags",   function (data, textStatus, jqXHR) {
    //         let arr = data[0].flags.png;
    //         console.log(data[0].flags);
    //         $("#ctr-image").attr("src",arr);
    //         console.log(data);
    //         console.log(textStatus);
    //         console.log(jqXHR);
    //         }
    //     );
    // });
});