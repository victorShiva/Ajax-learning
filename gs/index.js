function handler() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './index.txt', true);

    console.log(xhr);


    // using onreadystatechange property

    // xhr.onreadystatechange=function(){
    //    if(this.readyState==4 && this.status==200){
    //     console.log(this.responseText);
    //    }else{
    //     console.log(this.statusText);
    //    }
    // }

    
    //using onload property

    xhr.onload=function(){
        if(this.status == 200){
            console.log(this.responseText);
        }else{
            console.log(this.statusText);
        }
    }


    //using onprogress property

    // xhr.onprogress=(e)=>{
    //     console.log(e.loaded);
    //     console.log(e.total);
    // }

    
    // using onloadstart & onloadend property

    xhr.onloadstart=function(){
        console.log("data is loading start.....")
    }
    xhr.onloadend=function(){
        console.log("data is loading ended")
    }



    xhr.send();
}