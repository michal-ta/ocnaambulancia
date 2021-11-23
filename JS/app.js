var sipka = document.getElementById("newclass");
    
    sipka.style.display="none";
    

    window.addEventListener("resize" , function(){
        if(this.window.innerWidth >470){
    window.addEventListener("scroll", function(){
        console.log(this.window.scrollY);
        if(this.window.scrollY >=500 ) {
        sipka.style.display="flex";
        }else{
        sipka.style.display="none";
    }
    }); 

    }});

    var burger=this.document.querySelector(".mobile");
    var menu= document.querySelector(".menu");

/* window.addEventListener("resize" , function(){
        if(this.window.innerWidth >470){*/
      window.addEventListener("click", function(){
            
            burger.classList.toggle("active");
            menu.classList.toggle("active");
          
      }); 
      
