const user =
localStorage.getItem("careerUser");

if(!user){

window.location.href =
"login.html";

}

const userName =
document.getElementById("userName");

if(userName){

userName.textContent =
user;

}

function logout(){

localStorage.removeItem(
"careerUser"
);

window.location.href =
"login.html";

}
