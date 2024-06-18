console.log(1)
console.log(2)
setTimeout(()=>{
    console.log(6);
},2000);
console.log(3)
console.log(4)
console.log(5)

const getTodo = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        // console.log(request,request.readyState);
        try {
            if(request.readyState === 4 && request.status === 200){
                // console.log(request.responseText);
                callback(undefined,request.responseText);
            }else if(request.readyState === 4){
                // console.log('Could not find the data');
                throw new Error("Undefined Error");
            }
        } catch (error) {
            callback(error,undefined);
        }
        
    });
    
    request.open('GET','https://jsonplaceholderd.typicode.com/todos');
    request.send();
}

console.log('hello1');
console.log('hello2');

getTodo((err,data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data)
    }
});

console.log('hello3');
