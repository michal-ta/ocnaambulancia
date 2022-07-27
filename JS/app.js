  //mapa -------------leaflet JS 
var map = L.map('map').setView([48.739580049, 21.282953024], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([48.739580049, 21.282953024]).addTo(map);
L.marker.bindPopup("Sed Med s.r.o").openPopup();

//----------------------------------------


//-- adding of back arrow , changing vissibilty of burger menu -------
var arrowBack = document.getElementById("newclass");
var burger=document.querySelector(".mobile");
var menu= document.querySelector(".menu");


    
    arrowBack.style.display="none";
    var navigationMuv=this.document.querySelector(".navigation.moving");


    
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

  

