let stdName=document.getElementById('data-name');
let stdClass=document.getElementById('data-class');

// function handler() {
//     const XHR = new XMLHttpRequest();
//     XHR.open('GET','./index.json',true);
//     XHR.responseType="json";
//     console.log(XHR.statusText);

//     XHR.onload=function(){
//         if(this.status==200){
//             console.log(this.response);
//             console.log(this.response.name);
//             console.log(this.response.age);
//             stdName.innerText=this.response.name;
//             stdClass.innerText=this.response.class;
//         }else{
//             console.log(this.statusText);
//         }
//     }
//     console.log(XHR)
//     XHR.send();
// }


function handler() {
    const XHR = new XMLHttpRequest();
    XHR.open('GET','index.json',true);

    XHR.onload=function(){
        if(this.status==200){
            let newObj =JSON.parse(this.response);
            console.log(newObj);
            stdName.innerText=newObj.name;
            stdClass.innerText=newObj.class;
        }else{
            console.log(this.statusText);
        }
    }
    console.log(XHR)
    XHR.send();
}