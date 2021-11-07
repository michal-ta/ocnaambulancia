
var sipka = document.getElementById("newclass");
    
    sipka.style.display="none";


window.addEventListener("scroll", function(){
    console.log (window.scrollY)
    if(this.window.scrollY >=1500){
        sipka.classList.remove("backtotop");
        sipka.classList.add("backtotop2");
    }
    else if(this.window.scrollY >=500 ) {
        sipka.style.display="flex";
        sipka.classList.remove("backtotop2");
        sipka.classList.add("backtotop");

    }else{
        sipka.style.display="none";
    }
});


