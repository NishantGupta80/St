const [name,password,confirmPassword] = document.querySelectorAll(".col");

let nameLabel = document.createElement("label");
nameLabel.innerText="Name :";
name.prepend(nameLabel);

let passwordLabel = document.createElement("label");
passwordLabel.innerText = "Password :";
password.prepend(passwordLabel);

let cPassword = document.createElement("label");
cPassword.innerText = "Confirm Password :";
confirmPassword.prepend(cPassword);

const inputName = document.getElementById("username");
const inputPassword = document.getElementById("password");
const inputConfirmPassword = document.getElementById("confirmPassword");

inputName.setAttribute('required', 'required');
inputPassword.setAttribute('required', 'required');
inputConfirmPassword.setAttribute('required', 'required');

const submit = document.querySelector("btn btn-primary btn-block");


function checkValidity()
{
    
}

function handleSubmit(e)
{
    e.preventDefault();



    if(inputPassword.value != inputConfirmPassword)
        alert("password doesnt amtch");

}













submit.addEventListener("click",(e)=>handleSubmit(e));




