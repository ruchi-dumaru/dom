// //dom manipulation
// //html bata element select garnea
// // text change garna
// // html/css change garna
// //attribute
// //event listners

// // let cl=document.getElementById("cl");
// // console.dir(cl);

// // let header=document.getElementsByClassName("header");
// // console.log(header);

// // let h1=document.querySelector("h1");
// // h1.innerHTML="<i>Hi!! Billionaire</i>"
// // console.dir(h1);

// // let a=document.querySelector("a");
// // // a.setAttribute("href","https://www.google.com");
// // let link=a.getAttribute("href");
// // console.log(link);
// // a.removeAttribute("href");


// //dynamic DOM manipulation(imp)

// // let h2=document.createElement("h2");
// // h2.textContent="Yamaha";
// // document.querySelector("body").append(h2);

// // let p=document.createElement("p");
// // p.innerText="yommy dommy ";
// // document.querySelector("div").appendChild(p);

// //  let h2=document.querySelector("h2");
// //  h2.classList.toggle("xx");

//  //what is dom?How does it represent the html structure??

// //  let buy_now=document.querySelectorAll(".buy-now");
// //  console.log(buy_now);

// // let head=document.querySelector("#head");
// // head.textContent="JavaScript";


// //select all<li> elements and print their text using loop.

// let li=document.querySelectorAll("li");
// li.forEach((val)=>{
//   console.log(val.textContent);
// })

// let p=document.querySelector("p");
// p.innerHTML="<b>Updated </b> by Javascript"

// //how do u get the src of image using javascript
// let img=document.querySelector("img");
// console.log(img.getAttribute("src"));
// //console.log(img.src);


// let a= document.querySelector("a");
// a.setAttribute("href","");
// a.href="";

// //add title in div
// let div=document.querySelector("div");
// div.title="info"
// //or div.setAttribute("title","info");

// let button=document.querySelector("button");
// button.removeAttribute("disabled");

//  //checklist.add-->css ma direct gayera style change garne
//  //style property--> yewta property matra change garnea.
 

// set time out

// setInterval(()=>{
//   console.log("hi");
// },3000);


// let st=setTimeout(()=>{
//   console.log("hiooo");
// },3000);

// clearTimeout(st);


// let st=setInterval(()=>{
//   console.log("hi");
// },3000);

// clearInterval(st);

// //counter
// let count=10;
// let interVal=setInterval(()=>{
//   if(count>0){
//     console.log(count);
//     count--;
//   }else{
//     clearInterval(interVal);
//   }
// },1000);


//downloading
let sec=4;
let count=0;
let p=document.querySelector("#progressBar");
let p1=document.querySelector(".percent");
let h1=document.querySelector("h1");
let container=document.querySelector(".container")

let interVal=setInterval(()=>{
  if(count<=99){
    count++;
  p.style.width=`${count}%`;
  p1.textContent=`${count}%`;
  }
  else{
    h1.textContent="Downloaded";
    clearInterval(interVal);
  }

  setTimeout(()=>{
    container.classList.add("hide");
  },5*1000);
},(sec * 1000)/100);//3 sec ma complete