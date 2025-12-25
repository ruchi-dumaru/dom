let nm = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let nmErr = document.querySelector("#nameError");
let emailErr = document.querySelector("#emailError");
let pwErr = document.querySelector("#passwordError");

let form = document.querySelector("form");

// Regex
const nameRegex = /^[A-Za-z ]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

// Real-time validation
nm.addEventListener("input", () => {
  if(nameRegex.test(nm.value)){
    nmErr.textContent = "";
    nm.classList.remove("invalid");
    nm.classList.add("valid");
  } else {
    nm.classList.remove("valid");
  }
});

email.addEventListener("input", () => {
  if(emailRegex.test(email.value)){
    emailErr.textContent = "";
    email.classList.remove("invalid");
    email.classList.add("valid");
  } else {
    email.classList.remove("valid");
  }
});

password.addEventListener("input", () => {
  if(passwordRegex.test(password.value)){
    pwErr.textContent = "";
    password.classList.remove("invalid");
    password.classList.add("valid");
  } else {
    password.classList.remove("valid");
  }
});

// Submit validation
form.addEventListener("submit", function(ev){
  ev.preventDefault(); // stop submission

  let valid = true;

  // Name check
  if(!nameRegex.test(nm.value)){
    nmErr.textContent = "Name must be at least 3 letters";
    nm.classList.add("invalid");
    valid = false;
  } else {
    nm.classList.remove("invalid");
    nm.classList.add("valid");
  }

  // Email check
  if(!emailRegex.test(email.value)){
    emailErr.textContent = "Invalid email";
    email.classList.add("invalid");
    valid = false;
  } else {
    email.classList.remove("invalid");
    email.classList.add("valid");
  }

  // Password check
  if(!passwordRegex.test(password.value)){
    pwErr.textContent = "Password must be strong";
    password.classList.add("invalid");
    valid = false;
  } else {
    password.classList.remove("invalid");
    password.classList.add("valid");
  }

  // Only submit if all valid
  if(valid){
    alert("Form submitted successfully!");
    form.reset();
    nm.classList.remove("valid");
    email.classList.remove("valid");
    password.classList.remove("valid");
  }
});
