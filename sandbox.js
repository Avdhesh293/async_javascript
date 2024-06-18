console.log(1)
console.log(2)
setTimeout(()=>{
    console.log(6);
},2000);
console.log(3)
console.log(4)
console.log(5)

const request = new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{
    // console.log(request,request.readyState);
    if(request.readyState === 4){
        console.log(request.responseText);
    }
});

request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();