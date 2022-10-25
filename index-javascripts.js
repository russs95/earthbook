
//Scroll on arrival 
function scrollFunction() {

  const mediaQuery = window.matchMedia('(max-width: 700px)')


  //AFTER
  if ((mediaQuery.matches)  || (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)) {
    
    //document.getElementById("mandala-day").style.filter = "none";
    document.getElementById("navbar-day").style.height = "70px";
    //document.getElementById("navbar-day").style.overflowY = "unset";
    document.getElementById("mandala-day").style.width = "60px";
   document.getElementById("mandala-day").style.background = "url('../svgs/tractatus-simple-mandala.svg') center no-repeat";
    document.getElementById("mandala-day").style.backgroundSize = "contain";
    document.getElementById("mandala-day").style.display = "block"; 

   // document.getElementById("mandala-day").style.display ="contents";
    //document.getElementById("navbar-day").style.position = "fixed";
    document.getElementById("book-title").style.display = "none";
    document.getElementById("side").style.marginTop = "-100px";

  } else {
    //BEFORE
    document.getElementById("navbar-day").style.height = "200px";
    //document.getElementById("mandala-day").style.width = "";
    //document.getElementById("mandala-day").style.background = "";
    //document.getElementById("book-title").style.display = "unset";
    document.getElementById("book-title").style.display = "unset";
    document.getElementById("mandala-day").style.display = "none";
    document.getElementById("side").style.marginTop = "0px";

  }
}


  