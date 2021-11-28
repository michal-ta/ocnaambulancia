var sipka = document.getElementById("newclass");
    
    sipka.style.display="none";
    var navigationMuv=this.document.querySelector(".navigation.moving");
     

    window.addEventListener("resize" , function(){
        if(this.window.innerWidth >470){
            
        navigationMuv.style.display="none";
    window.addEventListener("scroll", function(){
        console.log(this.window.scrollY);
        if(this.window.scrollY >=500 ) {
        sipka.style.display="flex";
        }else{
        sipka.style.display="none";
    }
    }); 

    }else{
        burger();
        
    }
    });
 

      window.addEventListener("click", function(burger){
            
            var burger=this.document.querySelector(".mobile");
            var menu= document.querySelector(".menu");

            burger.classList.toggle("active");
            menu.classList.toggle("active");
            navigationMuv.style.display="inline-block";

          
      });
        
