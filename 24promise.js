//its an object which will help us to check 
//them(), allow us to specify whether the promise is fullfilled


// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let data="data is fetched"; //this data is coming from backend
//             resolve(data);
//         },1000)
//     });
// }

// fetchData()
//   .then((data)=>{
//     console.log("data got",data);
//   })


function fetchUserData(){
    return new Promise((resolve,reject)=>{
        const url="https://api.github.com/users";

        fetch(url)
          .then(response =>{
            if(response.ok){
                return response.json();
            }
            else{
                reject("there is an error data is not presemt")
            }
          })
           .then(data =>{
            resolve(data);
           })
    })
}

fetchUserData()
 .then(users =>{
    console.log(users)
 });