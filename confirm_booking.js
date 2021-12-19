document.querySelector("#form").addEventListener("submit",myfun);
   function myfun(event){
       event.preventDefault();
       var otp = prompt("Enter OTP");
       if(otp === "1234"){
           alert("Payment Successful")
            document.querySelector("#form").innerHTML = 
            "<p><div><h1>Payment Successful</h1></div><div><h3>Thanks for choosing Orbitz</h3></div><div><h4>Happy Journey</h4></div><p>"
            window.setTimeout(function() {
                window.location.href = "index.html";
            }, 5000);
       }
       else{
           alert("Please enter a valid OTP")
       }
   }