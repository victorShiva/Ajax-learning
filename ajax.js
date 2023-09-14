console.log("start to Ajax");

let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler() {
    console.log("fetchBtn is clicked");
    //Instantiate an xhr object 
    const xhr = new XMLHttpRequest();


    //open the object
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

    //what to do on progress (optional)
    xhr.onprogress=(function() {
        console.log('On progress');
    })

    xhr.onreadystatechange=function(){
        console.log('ready state is '+ this.readyState);
    }

    //what to do when response is ready
    xhr.onload=function () {
        if(this.status===200){
            console.log(this.responseText);
        }else{
            console.log("some error occured");
        }
    }

    // send the request
    xhr.send();
    console.log(xhr);

}