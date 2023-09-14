
function displayImage(data) {
    // $('<img>',{
    //     id: 'fetch-img',
    //     src: data.url,
    //     width:'100%',
    //     height:'100%'
    // }).appendTo("#img-container");

    var img = $(document.createElement('img'));
    img.attr({
        'src': data.url,
        width:'600px',
        height:'300px'
    });
    img.appendTo("#img-container");

    // $(document.createElement('img')).attr('src', data.url).appendTo("#img-container");
}




$.ajax({
    type: "get",
    // url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2022-04-24",
    url: "https://api.nasa.gov/planetary/apod?",
    data:{
        api_key:'JiQE1MFvDqOSllosOwx8nLg0UGwASrbQHpITj35f',
        date:'2022-04-24'
    },
    success: displayImage
});