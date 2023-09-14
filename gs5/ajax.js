let table = document.getElementById('table');

// function handler() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
//     xhr.responseType="json";
//     console.log(xhr);
//     xhr.onload=function(){
//         let Arr=this.response;
//         for(let i=0 ; i<Arr.length ; i++){
//             table.innerHTML +=`<tr><td>${Arr[i].name}</td><td>${Arr[i].email}</td></tr>`
//         }    
//     }

//     xhr.send();
// }

function handler() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.responseType = "json";
    xhr.onload = function () {
        if (this.status == 200) {
            let Arr = this.response;
            console.log(Arr)
            console.log(xhr)
        }    
    }
    // let postObj = JSON.stringify({ "name": "rooshani", "salary": "100", "age": "23" });
    let postObj='{ "name": "Arohi", "salary": "100", "age": "23" }';
    xhr.send(postObj);
}
