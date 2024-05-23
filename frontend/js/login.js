function setFormMessage(formElement, type, message){
    const messageElement =formElement.querySelector(".form__message");

    messageElement.textContext = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
    
}


function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#CreateAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
     e.preventDefault();
    loginForm.classList.add("form--hidden");
     createAccountForm.classList.remove("form--hidden");
});

document.querySelector("#linklogin").addEventListener("click", e =>{
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
});

loginForm.addEventListener("submit", e =>{
   e.preventDefault

   // preform ajax/fetch login


   
setFormMessage(loginForm, "error", "invalid username/password!");

});

document.querySelectorAll(".form__input").forEach(inputElement => {
inputElement.addEventListener("blur", e => {
    if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
        setInputError(inputElement, "Username must be at least 10 characters");}
});
 inputElement.addEventListener("input", e => {
    clearInputError(inputElement);
 });
});
});
//lic hide and show
function otherSelect() {
    var other = document.getElementById("lic");
    var other1 = document.getElementById("bnk");
    var other2 = document.getElementById("gen");
    var other3 = document.getElementById("age");
    var other4 = document.getElementById("pyt1");
    var other5 = document.getElementById("pyt2");
    var other6 = document.getElementById("pyt3");
    var other7 = document.getElementById("add1");
    var other8 = document.getElementById("add2");
    var other9 = document.getElementById("add3");
    var other10 = document.getElementById("Clic");
    if (document.forms[1].AccountType.options[document.forms[1].AccountType.selectedIndex].value == "1") {
    other.style.display = "block";
    other1.style.display = "block";
    other2.style.display = "none";
    other3.style.display = "none";
    other4.style.display = "none";
    other5.style.display = "none";
    other6.style.display = "none";
    other7.style.display = "none";
    other8.style.display = "none";
    other9.style.display = "none";
    other10.style.display = "none";
    }
    else {
    other.style.display = "none";
    other1.style.display = "none";
    other2.style.display = "block";
    other3.style.display = "block";
    other4.style.display = "block";
    other5.style.display = "block";
    other6.style.display = "block";
    other7.style.display = "block";
    other8.style.display = "block";
    other9.style.display = "block";
    other10.style.display = "block";
    }
    }
