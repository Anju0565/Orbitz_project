
    document.querySelector("button").addEventListener("click",search)
var placedata =JSON.parse(localStorage.getItem("placedata"))

document.querySelector("#check").addEventListener("click" , check)
function check(){
    console.log("click")
}


function search(){
    document.querySelector("#body").innerHTML=""
    var search = document.querySelector("#place").value
    console.log(search)

   
    placedata.map(function(elem){
      
        
     
    if(search==elem.placecity){
        var div=document.createElement("div")

        var container=document.createElement("div")
        container.setAttribute("id","container")

        var left=document.createElement("div")
        left.setAttribute("id" , "left")

        var right=document.createElement("div")
        right.setAttribute("id", "right")

        var image=document.createElement("img")
        image.setAttribute("src", elem.placeimage)
        left.append(image)

        var righth2=document.createElement("h2")
        righth2.textContent=elem.placename

        
        var rightp=document.createElement("p")
        rightp.textContent=elem.placecity

        
        var rightp1=document.createElement("p1")
        rightp1.textContent=elem.fooddetail

        
        var div1=document.createElement("div")
       div1.setAttribute("id" , "div1")

       
       var div1p2=document.createElement("p2")
        div1p2.textContent=elem.placedetail

         
       var div1p=document.createElement("p")
        div1p.textContent=elem.placeleft

        
        var div2=document.createElement("div")
       div2.setAttribute("id" , "div2")

       
       var div2p=document.createElement("p")
        div2p.textContent=elem.pricedetail

         
       var div2h2=document.createElement("h2")
        div2h2.textContent=elem.placeprice


        

        div1.append(div1p2 , div1p)

        div2.append( div2p,div2h2)

        right.append(righth2,rightp,rightp1,div1, div2)

        container.append(left,right)

        div.append(container)
        body.append(div)
    }
        

    })
}

    