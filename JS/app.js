var sipka = document.getElementById("newclass");
    
    sipka.style.display="none";

    window.addEventListener("resize" , function(){
        if(this.window.innerWidth >470){
    window.addEventListener("scroll", function(){
        if(this.window.scrollY >=500 ) {
        sipka.style.display="flex";
        }else{
        sipka.style.display="none";
    }
    });

    }});