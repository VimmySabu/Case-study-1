const username=document.getElementById("exampleInputUsername1")
const password=document.getElementById("exampleInputPassword1")
const form=document.getElementById("login")
const successIcon=document.getElementsByClassName("success-icon")
const failureIcon=document.getElementsByClassName("failure-icon")


const checkUsername =() =>{
    let valid=false;
    const uname=username.value.trim()

   

    if(uname!="admin"){
        showError(username,"Username is not valid")
        failureIcon[0].style.opacity = "1";
        successIcon[0].style.opacity = "0";
    }
    else{
        showSuccess(username)
        valid=true
        failureIcon[0].style.opacity = "0";
        successIcon[0].style.opacity = "1";

    }
    return valid;


}

const checkPassword =() =>{
    let valid=false;
    const pwd=password.value.trim()

    
    if(pwd!="12345"){
        showError(password,"Password is not valid")
        failureIcon[1].style.opacity = "1";
        successIcon[1].style.opacity = "0";
    }
    else{
        showSuccess(password)
        valid=true
        failureIcon[1].style.opacity = "0";
        successIcon[1].style.opacity = "1";

    }
    return valid;

}



const showError=(input,message)=>{
    const formfieid=input.parentElement;
    formfieid.classList.remove("success")
    formfieid.classList.add("error")
    formfieid.classList.add("shake","error")
    // show the error message
    const error = formfieid.querySelector('small');
    error.textContent = message;
}

const showSuccess=(input)=>{
    const formfieid=input.parentElement;
    formfieid.classList.remove("error")
    formfieid.classList.add("success")
    // hide the error message
    const error = formfieid.querySelector('small');
    error.textContent = '';
}

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isPasswordValid = checkPassword();

    let isFormValid = isUsernameValid && isPasswordValid;
        

    // submit to the server if the form is valid
    if (isFormValid) {
        //console.log(isFormValid);
        window.location.href=form.getAttribute("action")
    }
        
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'exampleInputUsername1':
            checkUsername();
            break;
        case 'exampleInputPassword1':
            checkPassword();
            break;
        
    }
}));