document.querySelector("#sign_in_nav").addEventListener("click",sign);
    function sign(event){
        event.preventDefault();
        window.location.href = "Sign_in.html"
    }
    document.querySelector("#logo").addEventListener("click",home);
    function home(event){
        event.preventDefault();
        window.location.href = "index.html"
    }
    document.querySelector("#espanol").addEventListener("click",home);
    function home(event){
        event.preventDefault();
        window.location.href = "index.html"
    }
    document.querySelector("#search_btn").addEventListener("click",booking);
    function booking(event){
        event.preventDefault();
        window.location.href = "product.html"
    }
    document.querySelector("#support").addEventListener("click",customer);
    function customer(event){
        event.preventDefault();
        window.location.href = "support.html"
    }
    document.querySelector("#property").addEventListener("click",property);
    function property(event){
        event.preventDefault();
        window.location.href = "List_your_Property.html"
    }
    document.querySelector("#package").addEventListener("click",package);
    function package(event){
        event.preventDefault();
        window.location.href = "orbitz.html"
    }
    document.querySelector("#flight").addEventListener("click",flight);
    function package(event){
        event.preventDefault();
        window.location.href = "flight1.html"
    }