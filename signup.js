document.querySelector("button").addEventListener("click" , signup);
var userdata=[]

    function signup(){
        var email = document.querySelector("#email").value
        var first=document.querySelector("#first").value
        var last=document.querySelector("#last").value
        var password = document.querySelector("#password").value

        if(email=="" || first=="" || last=="" || password==""){
      alert("fill the complete information")
        }else{

        
        var data={
            email:email,
            firstname:name,
            lastname:last,
            password:password,
        };
        userdata.push(data)
        localStorage.setItem("userdata", JSON.stringify(userdata))
       
login(email,first,last,password)
         
        }
    function login(email,first,last,password){
        if(email.length>0 && first.length>0 && last.length>0 && password.length>0){
        
        window.location.href="orsignin.html"
        }
    }
}