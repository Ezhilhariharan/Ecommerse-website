
var a = document.getElementById("login");
var b = document.getElementById("register");
var c = document.getElementById("btn");

function register() {
    a.style.left = "-400px";
    b.style.left = "50px";
    c.style.left = "110px";
}
function login() {
    a.style.left = "50px";
    b.style.left = "450px";
    c.style.left = "0";
}

var state= false;
 function toggle(){
    if(state){
        document.getElementById("password").setAttribute("type", "password");
        state = false;
    }
    else{
        document.getElementById("password").setAttribute("type", "text");
        state = true;
    }
   }