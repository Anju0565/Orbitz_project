document.querySelector("button").addEventListener("click",signIn);
var userdata=JSON.parse(localStorage.getItem("userdata"))
    function signIn(){
        var email = document.querySelector("#email").value
        var password = document.querySelector("#password").value

        if(email=="" || password==""){
            alert("username and password not found")
        }else{

        
        for(var i=0; i<userdata.length; i++){
            if(userdata[i].email === email && userdata[i].password===password){
                alert("Loging succesfull")
                window.location.href=""
            } else {
                alert("Incorrect password")
            }
        }
        }
    }