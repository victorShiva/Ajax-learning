let title = document.getElementById('title');
let description = document.getElementById('desc');

// function handler(){
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET","https://dummyjson.com/products/5",true);  // 1,2,3,4,5,.....,100;
//     xhr.responseType="json";
//     xhr.onload=function(){
//         console.log(this.response);
//         title.innerHTML=`Title : <b>${this.response.title}</b>`;
//         description.innerHTML=`Description : <b>${this.response.description}</b>`;
//     }
//     xhr.send();
// }


// get the more data value take in array form

function handler() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dummyjson.com/products", true);  // 1,2,3,4,5,.....,30;
    // xhr.responseType = "json";
    xhr.onload = function () {
        if (this.status == 200) {
            // const getArr=this.response["products"];
            const getObj = JSON.parse(this.response);
            const getArr=getObj['products'];
            console.log(getArr);
            for (let i = 0; i < getArr.length; i++) {
                console.log(getArr[i]);
                title.innerHTML += `(${i + 1}) Title : <b>${getArr[i].title}</b><br/>`;
                description.innerHTML += `(${i + 1}) Description : <b>${getArr[i].description}</b></br>`;
            }
        }
    }
    xhr.send();
}

