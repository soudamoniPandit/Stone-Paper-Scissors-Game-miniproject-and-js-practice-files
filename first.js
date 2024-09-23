//1
/*function reversedArray(str){
     let rev=str.split("").reverse("").join("");
    console.log(rev);
}

reversedArray("sudha");

//2
function upperCase(str){
    let val=str.toUpperCase("");
    console.log(val);
}

upperCase("vincenza");

//3
function lowerCase(str){
    let a =str.toLowerCase("");
    console.log(a);
}
lowerCase("SOUDAMONI");
*/

//4
/*function subString(str,subString){
    if(str.indexOf(subString)!==-1){
     console.log (subString);
    }else{
        console.log("Substring not found");
    }
}

subString("God's best creation Maa","Maa");

//5
function replaceString(str,subString,newString){
    let rep=str.replaceAll(subString,newString);
    console.log(rep);
}

replaceString("we are bestfriends","bestfriends","friends");

//6
function extractFirstWord(str){
    const s=str.split(" ");
    let firstWord=s[0];
    console.log(firstWord);
}
extractFirstWord("Try to contemplate");

//7 
function extractLastWord(str){
    
    let val =str.split(" ");
    let lastWord=val[val.length-1];
    console.log(lastWord);
    
}
extractLastWord("cocky you");
*/
//8
/*function removeWhiteSpace(str){
    let val=str.trim();
    console.log(val);
    
}
removeWhiteSpace("  don't be bluff  ");
//9
function vowelsCount(str){
    let char;
    let count=0;
    for(let i=0;i<=str.length;i++){
        char=str[i];
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }    
    }
    console.log(count);
}
vowelsCount("eclipse");
*/
//10
/*function palindromeCheck(str){
    let val=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    let reversed=str.split("").reverse("").join("");
    if(reversed===val){
        console.log("is palindrome");
    }else{
        console.log("is not palindrome");
    }
}

palindromeCheck("hello");
palindromeCheck("level");
*/
//Array Q no 1
/*function reverseArray(arr){
    let reversed=arr.reverse("");
    console.log(reversed);
}
reverseArray([1,2,3]);
// Q no 2
function flattenArray(array){
  return array.reduce((acc,sub)=>{
    if(Array.isArray(sub)){
        return acc.concat(flattenArray(sub));
    }else{
        return acc.concat([sub]);
    
  }
},[]);
}
let nestedArray=[1, 4, [2, 3], 8, [4, 5, [2, 1]]];
console.log(flattenArray(nestedArray));
*/
//3
/*function removeDuplicateArray(arr){
    return arr.reduce((acc,curr)=>{
        if(!acc.includes(curr)){
             acc.push(curr);
        }
         return acc;
        
    },[]);
}
let arr1=[1,3,4,8,7,9,7];
console.log(removeDuplicateArray(arr1));

//4
function findIndex(arr,element){

    return arr.indexOf(element);
}
console.log(findIndex(["kolkata","Assam"],"Assam"));

//5
function evenNumbers(arr){
    let eve= arr.filter((val)=>{
        return val%2===0;
    })
    console.log(eve);
}
evenNumbers([2,5,4,6,9]);

//6
function oddNumbers(arr){
    let odd= arr.filter((val)=>{
        return val%2!==0;
    })
    console.log(odd);
}
oddNumbers([2,5,4,6,9]);
//7

function maxValue(arr){
    let max=arr.reduce((acc,curr)=>{
         return acc>curr?acc:curr;
    })
    console.log( "Maximum Value : ",max);
}

maxValue([2,5,4,7,8]);

//8
function minimumValue(arr){
    let min=arr.reduce((acc,curr)=>{
         return acc<curr?acc:curr;
    })
    console.log( "Minimum Value : ",min);
}

minimumValue([2,5,4,7,8]);
//9
function sum(arr){
    let add=arr.reduce((acc,curr)=>{
        return acc+curr;
    })
    console.log(add);
}
sum([2,4,5,7,8]);

//10

function average(arr){
     let sum=0;
     let avg;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    avg=sum/arr.length;
    console.log("average: ",avg);
}

average([3,9,6,8,5]);
*/

/*let h1=document.querySelector("h1");
console.dir(h1.innerText);

h1.innerText=h1.innerText+"from Apna college Students";

let divs=document.querySelectorAll(".box");
console.log(divs);
divs[0].innerText="hello word";
divs[1].innerText="Be kind";
divs[2].innerText="Table-1";
*/

//let para=document.querySelector("p")
//console.log(para.setAttribute("class","newClass"));

//let div =document.querySelector("div");
//console.log(div.style.backgroundColor="pink");


/*let newButton=document.createElement("button");

newButton.innerText="Click Me";

console.log(newButton);
 
let div = document.querySelector("div");

div.before(newButton);



let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hey! I am new";
document.querySelector("body").prepend(newHeading);
*/

/*let newBtn=document.createElement("button");
newBtn.innerText="Click me";
newBtn.style.color="white";
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn); 
*/
/*let para=document.querySelector("p");
para.classList.add("newClass"); 
*/
//Events
/*let btn1=document.querySelector("#btn1");

btn1.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};
*/

/*let div=document.querySelector("div");

div.onmouseover=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};
*/
let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  console.log("you are trying to change mode");

  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }

  console.log(currMode);
});



 



  