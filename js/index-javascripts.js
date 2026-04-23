window.onscroll = function() {scrollFunction()};

//Scroll on arrival
function scrollFunction() {

  const navbar = document.getElementById("earthbook-navbar");
  const mainTitle = document.getElementById("main-title");
  const subTitle = document.getElementById("sub-title");
  const subEarthbook = document.getElementById("sub-earthbook");
  const side = document.getElementById("side");
  const logo = document.getElementById("book-header-logo");

  if (!navbar) return;

  const mediaQuery = window.matchMedia('(max-width: 700px)')

   //AFTER
   if ((mediaQuery.matches)  || (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)) {

     navbar.style.height = "60px";
     if (mainTitle) mainTitle.style.opacity = "0";
     if (subTitle) subTitle.style.display = "none";
     if (subEarthbook) subEarthbook.style.display = "none";
     if (side) side.style.marginTop = "-150px";
     if (logo) { logo.style.opacity = "1"; logo.style.display = "block"; logo.style.height = "52px"; logo.style.top = "5px"; }

   } else {
     //BEFORE
     navbar.style.height = "200px";
     if (logo) { logo.style.opacity = "0"; logo.style.display = "none"; logo.style.top = "50px"; }
     if (side) side.style.marginTop = "0px";
     if (mainTitle) { mainTitle.style.opacity = "1"; mainTitle.style.display = "block"; }
     if (subTitle) subTitle.style.display = "block";
     if (subEarthbook) subEarthbook.style.display = "block";
   }
 }

