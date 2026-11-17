var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.left="0";
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-100%";
})

var form = document.getElementById("contactform");

var username = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");

var success = document.getElementById("success");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Remove extra spaces
    var nameValue = username.value.trim();
    var emailValue = email.value.trim();
    var messageValue = message.value.trim();

    if(nameValue === "") {
        alert("Please enter your name");
        username.focus();
    }
    else if(emailValue === "") {
        alert("Please enter your email");
        email.focus();
    }
    else if(messageValue === "") {
        alert("Please enter your message");
        message.focus();
    }
    else if(!email.checkValidity()) {
        alert("Please enter a valid email address");
        email.focus();
    }
    else {
        success.textContent = "Your form submitted successfully!";
        form.reset();
    }

});