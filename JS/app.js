let arrowBack = document.querySelector(".backtotop");
let burger=document.getElementById("mobile_menu");
let menu= document.getElementById("rolling_menu");
let navigationMuv=this.document.querySelector(".navigation.moving");
let burgerLink=document.querySelector(".link");

 //mapa -------------leaflet JS 
var map = L.map('map').setView([48.739580049, 21.282953024], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([48.739580049, 21.282953024]).addTo(map);

//----------------------------------------


//-- showing  of back arrow after scroll down  , 

        

    window.addEventListener("scroll" ,function(){
        if(this.window.innerWidth< "570"){
            arrowBack.style.display="none";
        }else if(this.window.scrollY> "800"){
            arrowBack.style.display="flex";
        }else{
            arrowBack.style.display="none";
        }
    })

// burger menu ------
burger.addEventListener("click", function(){
        burger.classList.toggle("active");
        //show rolling menu 
        if(burger.classList="mobile active "){
            menu.classList.toggle("not_rolled");
        }
});

burgerLink.addEventListener("click", function(){
    menu.classList.toggle("not_rolled");
})



/*if (scrollPosition <=850){
    arrowBack.style.display="none"
}else{
    arrowBack.style.display="flex"
}*/

// change to dont show arrow in mobile version 

/*   if(this.innerWidth <=570){
        arrowBack.style.display="none"
    }else{
        arrowBack.style.display="flex"
    }*/


    
//--------------------------------------   
/*
    window.addEventListener("resize" , function(burger1){
        if(this.window.innerWidth <470){

    window.addEventListener("click", function(){
            burger.classList.toggle("active");
            menu.classList.toggle("active");
            navigationMuv.style.display="inline-block";


          
      });
      }else{
          burger.classList.remove("active");
          menu.classList.remove("active");
      }
    });
        */

  

