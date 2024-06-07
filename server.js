

// var myName = 1;
// if(myName){
//     console.log("this is true")
// }
// else{
//     console.log("this is false")
// }


// agar hum js me myName me string ki jagah khali ya phir 0 dal dete he to vo usko false krr deta he 
// Null bhi ek false value he 


// const mystring = "42";
// const mynumber = parseInt(mystring);
// console.log(mynumber);


// const myfloat = "467.87";
// const floatnumber = parseFloat(myfloat);
// console.log(floatnumber);

// hum parseint() aur parsefloat() ka use karke value ko int me ya float me convert krr sakte he 

// INDEX OF METHOD IN JS 

// indexof(searchelement);
// indexof(searchelement,fromindex);

// const number = [1,2,3,4,5,6,3,4,9];
// const num = [1,2,3,4,5,6,3,7,8]
// console.log(number.indexOf(4,6));
// console.log(num.lastIndexOf(3))
// console.log(num.lastIndexOf(3,5)); //same apply like indexOf {indexof(searchelement,fromindex);}

// if(num.lastIndexOf(3,4)===2){
//     console.log("THE NUMBER IS CORRECT")
// }
// else{
//     console.log("THE NUMBER IS INCORRECT")
// }


// lastIndexOf last se find karna start karega aur jese hi usee vo milta he to vo survat se uska index number return kr dega

// var months = ["Jan","Feb","march","Jun"];

// var index = months.indexOf("march");
// months.splice(index,1,"March");
// console.log(index)
// console.log(months)


// FOR EACH METHOD


var fruit = ["mango", "banana", "papaya", "apple", "badam"];

// let myarr = fruit.forEach((curnElem,index,arr)=>{
//     console.log(`${curnElem},${index},${arr}`)
// })

//console.log(myarr) //----> agar me myarr ko print karau to vo undefined return karega ye diffrence(( map for foreach me ))


// MAP FUNCTION IN JS

// fruit.map((currElem,index,arr)=>{
//     console.log(currElem,arr)
// })

// var num = [1,2,3,4,5,6,7,8,9];

// const doublevalue = num.map((curElm)=>{
//     return curElm 
// })
// console.log(doublevalue);








// FILTER FUNCIOTN IN JS 

// var num = [1,2,3,4,5,6,7,8,9];

// const printnum = num.filter((curElem)=>{
//     return curElem > 3
// });
// console.log(printnum);


// const product = [
//     {name:"mobile",prise:5000},
//     {name:"laptop",prise:3000},
//     {name:"watch",prise:500},
//     {name:"usb",prise:400},
//     {name:"headphone",prise:800}
// ]

// const productprice = product.filter((Elem)=>{
//     return Elem.prise < 5000
// });
// console.log(productprice)


// let value = 6;

// let num = [1,2,3,6,5,6,7,6,9,2];

// let cartNumber = num.filter((curElem)=>{
//     return curElem !== value
// });
// console.log(cartNumber)








// FIND METHOD IN JS
// const num = [1,2,3,4,5,6,7,8,9]
// const result  = num.find((curElem)=>{
//     return curElem > 2
// });
// console.log(result)


// SET METHOD IN JS 


//~~~~ set always store a unique value ~~~~ //

// var number = [1,2,3,4,4,3,5,6,7,8,9];

// console.log(new Set(number));


// STRINGS IN JSAVASCRIPT

// let string = "kunal";

// console.log(string.length);




// console.log(string.indexOf("a",2));



// let text = "hi welcome to javascript cource this is best javascript cource";

// let result = text.search(/Javascript/i)  // this method is casesensitive but when we use i falg after scarch they become incasesencitive
// console.log(result)


// MATCH METHOD IN JS 


// let text = "hi welcome to javascript cource this is best javascript cource";

// let result = text.match(/javascript/i);
// console.log(result);

//match method text ka pura info bata dega jese jo match kiya jaa raha he 
// aur index no group and input 



// let text = "hi welcome to javascript cource this is best javascript cource";

// let result = text.matchAll("javascript");
// console.log(...result);        
// //we can also print this data throw for of loop 
// // when we run program without ... and loop they print itirator that means we can add loop

// for(let item of result){
//     console.log(item)
// }


// INCLUDE METHOD IS JVASCRIPT 

// let text = "hi welcome to javascript cource this is best javascript cource";

// const result = text.includes("javas");

// console.log(result);

// this method print the result will be true or false 



// STARTSWITH AND ENDSWITH METHOD IN JS 

// let text = "hi welcome to javascript cource this is best javascript cource";

// let result = text.startsWith("hi");

// let result1 = text.startsWith("to",11);
// console.log(result1)



// this method print the result will be true or false 



// REPLACE METHOD IN JS


// let text = "hi welcome to javascript cource this is best javascript cource";

// let result = text.replace("h","")
// console.log(result);




// let fruits = [1,2,3,4,5,6,7,8,9];

// fruit.forEach((i)=>{
//       console.log(i)
// })



// TRIM METHOD IN JS


// let str = "   hello world   ";
// console.log(str.length)

// let result = str.trim();
// console.log(result);
// console.log(result.length);


// basically trim function trims and cuts the accesssive spaces between string you can see above code 



// const checkVowelPresent = (str) =>{
//         const vowel = "aeiou"
//         for(char of vowel){
//                if(!str.includes(char)){
//                   return false
//                }
//                else{
//                    return true
//                }
//         }
// }

// console.log(checkVowelPresent("a"))\,l



// MATH OBJECT IN JAVASCIRPT


// console.log(Math.abs(115));

// ~~~~ Math.abs prints a actual place in numberline form 0 
//                        ------------------------------------
//                               -3  -2  -1  0  1  2  3 4

// let suppose mene agar 3 likha 115 ki jagah to muje 3 hi milega kyoki mene absolute place pucha he 


// console.log(Math.round(3.4))
// console.log(Math.round(3.7))

// round method = isko agar hamne 3.4 matlab 3.5 se piche wale digit diye to ye 3 print karega 
// but agar mene isko 3.7 matlab 5 se uper ka diya to usne to ye 4 return karega 



// console.log(Math.ceil(3.9))
// ye method round ki tarah he but ye round 5 se lower digit ko chage nahi karta tha but ess method ko 
// agar decimal dikha to ye usko 1 degit ++ krr deta he



// console.log(Math.trunc(3.7));

// trunc mathod removes the digites agter decimel 


// console.log(Math.floor(3.7));
// console.log(Math.floor(-3.1));

// trunc and floor are same but chage when we pass negative value in floorlike -3.1 they return a -4 because -3 is bigger than -4 



// console.log(Math.pow(2,4));
// when we need know of power of so we can use pow function


// console.log(Math.sqrt(25));

// we can find squareroot using this function




// JSON METHOD IN JS


// JSON.stringify  : converts a javascript object in JSON string


// const studentData = {
//         "name":"kunal",
//         "age":18,
//         "course":"Ethical Hacking , Penetration testing , Webdevelopement",
// }

// here we add data in local storage 

// localStorage.setItem("key","studentData"); ❌
// localStorage.setItem("key",JSON.stringify(studentData));  


// key used to defined name we can use any name and then add data which we want to add
// but some problem in this code when we use a object we need to add a JSON.stringify for covert a js object to json string



// SET TIMEOUT AND SETINTERVEL IN JAVASCRIPT 
// const DelayFunction = () =>{
//        console.log("I AM THE BILLIONER");
// };
// setInterval(DelayFunction,2000);



// SPLIT MATHOD IN JS 
// h1Text = sheriyans
// var splittedText = h1Text.split("");


//OUTPUT :  S', 'h', 'e', 'r', 'i', 'y', 'a', 'n', 's']0: "S"1: "h"2: "e"3: "r"4: "i"5: "y"6: "a"7: "n"8: "s"



// TIP : JAB HUM GSAP KA USE KARTE HE TO HUM X AND Y KA USE KARTE HE BU AGAR HAME X AND Y SPAN PRR LAGANA HO TO VO KAAM NAHI KAREGA KYOKI SPAN PRR TRANSFORM KAAM NAHI KARTA KYOKI VO INLINE ELEMENT HE TO HAME PEHELE CSS ME JAKAR USE INLINE BLOCK DENA HOGA 



// TIP :  When you pass a function to addEventListener, you should pass the function reference, not call the function immediately. Here's the corrected code


// const startTimeFunc = () => {
//         intervalId = setInterval(() => { // Use setInterval instead of setTimeout for continuous countdown
//             CoutDown.innerText = count++;
//         }, 1000);
//     };

//     startbtn.addEventListener("click", startTimeFunc); // Pass function reference without ()




// const product = {
//     id:1,
//     Pname:"Car",
//     prise:400,
//     delivery:"All India"
// }

// let a = product.Pname = "Mobile"
// console.log(a)
// console.log(product);



// let Pname = "Gazet"; // here we can add dynamic data in object useing [] squre bracket in key of an object

// const product = {
//     id:1,
//     [Pname]:"Car",
//     prise:400,
//     delivery:"All India",
//     greet: function(){
//         console.log(`hey this product key name is ${Pname} , and the prise is ${product.prise} `)
//     }
// }

// product.greet()



// OBJECT METHODS IN JS 


// const product = {
//     id:1,
//     Pname:"Car",
//     prise:400,
//     delivery:"All India",
//     PaymentMethod:"CASH"
// }

// const petipack = {}

// let newObj = Object.assign(petipack,product);

// petipack.PaymentMethod = "ONLINE"

// console.log(petipack);


// ABOVE METHOD IS ASSIGN METHOD THIS METHOD CREATES A COPY OF ANOTHER OBJECT




const product = {
    id:1,
    Pname:"Car",
    prise:400,
    delivery:"All India"
}

let obj1 = Object.values(product);

if(obj1.length === 4){
    console.log("4 he  ");
}
else{
    console.log("4 nahi he");

}

