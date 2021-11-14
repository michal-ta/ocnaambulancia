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

    // pokusy ale nefunguje 
    /*
     window.addEventListener("scroll", function(){
         var poloha= document.getElementById("position").offsetTop;
            
            console.log(poloha);
         if(this.window.pageYOffset >= poloha){
             console.log("pravda");
         sipka.style.display="flex";
         }else{
              console.log("false");
            sipka.style.display="none";
         }
     });   
     */