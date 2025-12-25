// let nm=document.querySelector("#name");
// let email=document.querySelector("#email");
// let password=document.querySelector("#password");

// let form=document.querySelector("#myForm");

// let nmErr=document.querySelector("#nameError");
// let emailErr=document.querySelector("#emailError");
// let pwErr=document.querySelector("#passwordError");


// nm.addEventListener("input",()=>{
//   if(nm.value===""){
//   nmErr.textContent="name is required";
  
// }else if(nm.value.length<4){
//   nmErr.textContent="name should be at least of 4 character";
  
// }else{
//   nmErr.textContent="";
// }
// })

// email.addEventListener("input",()=>{
//   if(email.value===""){
//   emailErr.textContent="email is required";
  
// }else if(!email.value.includes("@")){
//   emailErr.textContent="emails hould contain @";
  
// }else{
//   emailErr.textContent="";
// }
// })

// password.addEventListener("input",()=>{
//   if(password.value===""){
//   pwErr.textContent="pw is required";
 
// }else if(password.value.length<6){
//   pwErr.textContent="pw should be at least of 6 character";

// }else{
//   pwErr.textContent="";
// }
// })

// form.addEventListener("submit",(evts)=>{
//   evts.preventDefault();
//   let valid=true;

//   if(nm.value===""){
//   nmErr.textContent="name is required";
//   valid=false;
// }else if(nm.value.length<4){
//   nmErr.textContent="name should be at least of 4 character";
//   valid=false;
// }else{
//   nmErr.textContent="";
// }

// if(email.value===""){
//   emailErr.textContent="email is required";
//   valid=false;
// }else if(!email.value.includes("@")){
//   emailErr.textContent="emails hould contain @";
//   valid=false;
// }else{
//   emailErr.textContent="";
// }

// if(password.value===""){
//   pwErr.textContent="pw is required";
//   valid=false;
// }else if(password.value.length<6){
//   pwErr.textContent="pw should be at least of 6 character";
//   valid=false;
// }else{
//   pwErr.textContent="";
// }
// if(valid){
//   alert("form submitted succesfully");
//   form.reset();
// }
// })

//using function and regex

let nm=document.querySelector("#name");
let email=document.querySelector("#email");
let password=document.querySelector("#password");

let form=document.querySelector("#myForm");

let nmErr=document.querySelector("#nameError");
let emailErr=document.querySelector("#emailError");
let pwErr=document.querySelector("#passwordError");

function callName(){
  if (nm.value.trim()===""){
    nmErr.textContent="name is required";
  return false;
  }else if(nm.value.trim().length<3){
    nmErr.textContent="name should be at least of 3 character";
    return false;
  }else{
    nmErr.textContent="";
    return true;
  }
}

function callEmail(){
  const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim()===""){
    emailErr.textContent="Email is required";
  return false;
  }else if(!emailRegex.test(email.value.trim())){
    emailErr.textContent="Invalid email";
    return false;
  }else{
    emailErr.textContent="";
    return true;
  }
}

function callPw(){
  const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (password.value.trim()===""){
    pwErr.textContent="Password is required";
  return false;
  }else if(!passwordRegex.test(password.value)){
    pwErr.textContent="Invalid password";
    return false;
  }else{
    pwErr.textContent="";
    return true;
  }
}

nm.addEventListener("input",callName);
email.addEventListener("input",callEmail);
password.addEventListener("input",callPw);

form.addEventListener("submit",(evts)=>{
  evts.preventDefault();

  if(callName() & callEmail () & callPw()){
    alert("Form submitted successfully!!");
    form.reset();
  }
})

