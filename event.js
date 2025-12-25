{/* <input type="text" placeholder="name">
  <h3 id="se">Select the gender</h3>
  <select >
    <option selected disabled>Gender</option>
    <option value="female">Female</option>
    <option value="male">Male</option>
    <option value="other">Other</option> 
  </select>
  <h1>programming</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!
</p>
<button disabled>click</button> */}



// let h1=document.querySelector("h1")
// h1.addEventListener("dblclick",function(){
//   h1.style.color="grey"
// })

// let p=document.querySelector("p");
// function dblclick(){
//   p.style.background="green"
// }
// p.addEventListener("dblclick",dblclick);
// p.removeEventListener("dblclick",dblclick);

// let inp=document.querySelector("input");
// inp.addEventListener("input",function(evt){
//   // console.log("p");//deleteadd space all are counted..
//  if(evt.data!==null){
//   console.log(evt.data);
//  }
// });

// let se=document.querySelector("#se");
// let sel =document.querySelector("select");
// sel.addEventListener("change",function(evt){
//     // console.log(evt.target.value);
//    se.textContent=`${evt.target.value} selected`;
// })


//approach:
//keydown event use garera text change gara
// let h1=document.querySelector("h1");
// window.addEventListener("keydown",function(evt){  
//   if(evt.key===" "){
//     h1.textContent= "Space" ;
//   } else{
//     h1.textContent=evt.key;
//   }
// })

// let nm=document.querySelector("#name");
// let form=document.querySelector("form");
// form.addEventListener("submit",function(dets){
//   dets.preventDefault();
//   //  if(nm.value.length<=2){
//   //   document.querySelector("#hide").style.display="initial";
//   //  }else{
//   //   document.querySelector("#hide").style.display="none";
//   //  }
//   const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   let r=regex.test("abc@com");
//   console.log(r);

// });



