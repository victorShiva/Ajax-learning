var btn = document.getElementById("btn");
btn.addEventListener("click", changeContent);

function changeContent() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status==200) {
            document.getElementById("demo").innerHTML = this.responseText;
            console.log(this.responseText);
        }else {
            document.getElementById("demo").innerText = this.statusText;
        }
    };

    xhr.open("GET", "./api1.txt",true);
    xhr.send();
}

function changeContent2(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.statusText)
            callback(this);
        }
    }

}

function locateDiv(xhrHttp) {
    document.getElementById('demo').innerHTML = xhrHttp.responseText;
}
