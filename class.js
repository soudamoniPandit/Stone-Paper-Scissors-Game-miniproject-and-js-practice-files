/*class ToyotaCar {

    constructor(brand,milage){
        console.log("Creating new object");
        this.brand=brand;
        this.milage=milage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

    
}
let fortuner= new ToyotaCar("fortuner",10);

console.log(fortuner);

let lexus = new ToyotaCar("lexus",20); 

console.log(lexus);
*/

/*class parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{}


let obj=new Child();
*/

/*class Person{

    constructor(){
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("Doing Nothing");
    }
}


class Doctor extends Person{
    work(){
        console.log("saving people");      
    }
    
}

class Engineer extends Person{

    constructor(branch){
        super();
        this.branch=branch;
    }
    work(){
        console.log("Solve problems,build something");
    }
}
 let souda= new Engineer("chemical");
 let subunggi= new Doctor();

 */

 //Q1
 /*let Data="secret information";
 class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("Data: ",Data);
        
    }
 }

 class Admin extends User{

    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data="Some new changes";
    }

 }
 

 let student1 = new User( "souda","souda321@gmail.com");

 let teacher1 = new User("Dean","Abcd@gmail.com");

 let admin=new Admin("sudha","adtu01@gmail.com");
 */
 
/*console.log("one");

console.log("Two");

console.log("Three");
function hello(){
    console.log("Hello");
}


setTimeout( hello,2000);

console.log("world!");


function mul(a,b){
    return a*b;
}


function cal(a,b,mul){
    return mul(a,b);

}
 

 let result=cal(1,2,mul);
 console.log(result);

 function getData(dataId){
    console.log("data",dataId);
 }
*/
 /*function getData(dataId){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data: ",dataId);
        resolve("Success");
    },2000);
    });
 }

 //Async-Await IIFE(immediately invoked function expression)
(async function (){
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
}) ();

*/

 // using promise chain---
/*getData(1)
.then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    console.log(res);
})
*/

//callback hell
 /*getData(1,()=>{
    console.log("getting data2...");
    getData(2,()=>{
        console.log("getting data3...");
        getData(3,()=>{
            console.log("getting data4");
            getData(4,()=>{

            })
        })
    });
 });
 //promises
let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    resolve(123);
})
*/

  /*const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        resolve("success");
    })

  }
  let promise=getPromise();
  promise.then((res)=>{
    console.log("promise fulfiled",res);
     
  })
*/

/*function asyncFunction1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("Success");
        },3000);
    });
};

function asyncFunction2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("Success");

        },3000);
        
    });

};


console.log("fetching data1...");
 asyncFunction1().then((res)=>{
    console.log("Fetching data2...");
     asyncFunction2().then((res)=>{
})
})
*/


/*console.log("Fetching data2...");
let p2=asyncFunction2;
p2.then((res)=>{
    console.log(res);
})
*/
//Async-Await

/*function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Wheather data");
            resolve(200);
        },2000);
    });
};

async function getWeatherData(){
    await api();
    await api();
}
*/

//Application Programming Interface

  
 






 
