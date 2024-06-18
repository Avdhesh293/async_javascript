console.log(1)
console.log(2)
setTimeout(()=>{
    console.log(6);
},2000);
console.log(3)
console.log(4)
console.log(5)

const getTodo = (resource,callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        // console.log(request,request.readyState);
        try {
            if(request.readyState === 4 && request.status === 200){
                // console.log(request.responseText);
                const data = JSON.parse(request.responseText);
                callback(undefined,data);
            }else if(request.readyState === 4){
                // console.log('Could not find the data');
                throw new Error("Undefined Error");
            }
        } catch (error) {
            callback(error,undefined);
        }
        
    });
    
    request.open('GET',resource);
    request.send();
}

console.log('hello1');
console.log('hello2');

// getTodo('https://jsonplaceholder.typicode.com/todos',(err,data) => {
//         console.log(data)
//         getTodo('https://jsonplaceholder.typicode.com/todos',(err,data) => {
//                 console.log(data)
//                 getTodo('https://jsonplaceholder.typicode.com/todos',(err,data) => {
//                         console.log(data)
//                 });
//             });
// });

console.log('hello3');

//Fetch API

// fetch('https://jsonplaceholder.typicode.com/todos').then((result) => {
//     if(result.status == 200){
//         return result.json();
//     }
// }).then((data) => {
//     console.log(7)
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// Promise

const p = new Promise((response,reject) => {
   return response('abc');
    reject('cc');
});

// console.log(p);

// Async

const getTo = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // console.log(response);
    if(response.status == 200){
        const data = await response.json();
        return data;
    }else{
        throw new Error('Cannot fetch data');
    }
}

getTo().then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err.message)
});