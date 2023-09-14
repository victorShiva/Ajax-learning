function handler() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './index.txt', true);

    xhr.onload=function(){
        if(this.status==200){
            document.getElementById('data').innerHTML=`<h1>${this.responseText}</h1>`;
        }else{
            document.getElementById('data').innerHTML=`<h1>${this.statusText}</h1>`;
        }
    }
    console.log(xhr)
    xhr.send();
}