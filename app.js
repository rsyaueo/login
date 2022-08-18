function login(){
    var email = document.forms["form"] ["email"]. value;
    var password = document.forms["form"] ["password"].value;


    var errorMessage = document.getElementById("error_msg");
    if (email== "risya@gmail.com" && password == "risya"){
        
        error_msg.style.display = "none";
        alert("Login Successfully");
        
    } else {
        if(email.length < 1){
            error_msg.style.display = "inline-block";
            email.style.border = "1px solid #f74040";
            return false;
        }
        
        if (password.length < 1){
            error_msg.style.display ="inline-block";
            password.style.border = "1px solid #f74040";
            return false;
        }
    }
}

   
