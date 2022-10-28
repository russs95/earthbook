window.onscroll = function() {scrollFunction()};

//Scroll on arrival 
function scrollFunction() {

  const mediaQuery = window.matchMedia('(max-width: 700px)')
 
 
   //AFTER
   if ((mediaQuery.matches)  || (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)) {
    
   
     document.getElementById("earthbook-navbar").style.height = "70px";
     document.getElementById("main-title").style.opacity = "0";
     document.getElementById("sub-title").style.display = "none";
     document.getElementById("sub-earthbook").style.display = "none";
     document.getElementById("side").style.marginTop = "-100px"
     document.getElementById("book-header-logo").style.opacity = "1"; 
     //document.getElementById("book-header-logo").style.width = "160px";
    document.getElementById("book-header-logo").style.height = "60px";
    document.getElementById("book-header-logo").style.top = "5px";
    
    //document.getElementById("book-header-logo").style.margin = "auto";
           
    //document.getElementById("book-header-logo").style.marginBottom = "0"; 
    //document.getElementById("mandala-day").style.background = "url('../svgs/tractatus-simple-mandala.svg') center no-repeat";
     
 
   } else {
     //BEFORE
     document.getElementById("earthbook-navbar").style.height = "208px";
     document.getElementById("book-header-logo").style.opacity = "0";
     document.getElementById("side").style.marginTop = "0px";
     document.getElementById("main-title").style.opacity = "1";
    //document.getElementById("book-title").style.height = "unset";
     //document.getElementById("book-header-logo").style.marginTop = "90px";  
    // document.getElementById("book-title").style.marginTop = "-70px";   
     document.getElementById("main-title").style.display = "block";
     document.getElementById("sub-title").style.display = "block";
     document.getElementById("sub-earthbook").style.display = "block";
    document.getElementById("book-header-logo").style.top = "50px";  
   
 
   }
 }
 






//document.getElementById("mandala-day").style.width = "60px";
//
 //
 //document.getElementById("book-title").style.display = "none";

     //document.getElementById("mandala-day").style.width = "";
    //document.getElementById("mandala-day").style.background = "";
    //document.getElementById("book-title").style.display = "unset";