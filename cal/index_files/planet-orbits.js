
//MERCURY NEW
  function animateMercury() {

    let planetElement = document.getElementById("mercury");
    let planetOrbitElement = document.getElementById("mercury-orbit");
    let yearStart = new Date(2023, 0, 1);
    
    let daysSinceYearStart = Math.floor((startDate - yearStart) / (1000 * 60 * 60 * 24));
    let daysSinceTargetDate = Math.floor((targetDate - startDate) / (1000 * 60 * 60 * 24));
    let totalDays = daysSinceYearStart + daysSinceTargetDate;
    let orbitRatio1 = daysSinceYearStart / 88;
    let orbitRatio2 = totalDays / 88;
  
    
    if (startCoords.cx == 0 && startCoords.cy == 0) {
      startCoords = { cx: planetElement.getAttribute("cx"), cy: planetElement.getAttribute("cy") };
    }
    
    planetElement.setAttribute("cx", startCoords.cx);
    planetElement.setAttribute("cy", startCoords.cy);
    
    let finalCoordsX1 = planetOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio1);
    let finalCoordsY1 = planetOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio1);
    finalCoordsY1 = finalCoordsY1.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    let finalCoordsX2 = planetOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio2);
    let finalCoordsY2 = planetOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio2);
    finalCoordsY2 = finalCoordsY2.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    planetAnimation1 = planetElement.animate([
      { cx: startCoords.cx, cy: startCoords.cy, transform: `rotate(0deg)` },
      { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` }
    ], {
      duration: 0,
      easing: "linear",
      fill: "forwards"
    });
    
    planetAnimation1.onfinish = function() {
      planetAnimation2 = planetElement.animate([
        { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` },
        { cx: finalCoordsX2, cy: finalCoordsY2, transform: `rotate(${orbitRatio2 * 360}deg)` }
      ], {
        duration: 1000,
        easing: "linear",
        fill: "forwards"
      });
    }
      
  }

//VENUS NEW

  function animateVenus() {   
  
    let planetElement = document.getElementById("venus");
    let planetOrbitElement = document.getElementById("venus-orbit");
    let yearStart = new Date(2023, 0, 1);
    
    let daysSinceYearStart = Math.floor((startDate - yearStart) / (1000 * 60 * 60 * 24));
    let daysSinceTargetDate = Math.floor((targetDate - startDate) / (1000 * 60 * 60 * 24));
    let totalDays = daysSinceYearStart + daysSinceTargetDate;
    let orbitRatio1 = daysSinceYearStart / 224.7;
    let orbitRatio2 = totalDays / 224.7;
  
    
    if (startCoords.cx == 0 && startCoords.cy == 0) {
      startCoords = { cx: planetElement.getAttribute("cx"), cy: planetElement.getAttribute("cy") };
    }
    
    planetElement.setAttribute("cx", startCoords.cx);
    planetElement.setAttribute("cy", startCoords.cy);
    
    let finalCoordsX1 = planetOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio1);
    let finalCoordsY1 = planetOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio1);
    finalCoordsY1 = finalCoordsY1.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    let finalCoordsX2 = planetOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio2);
    let finalCoordsY2 = planetOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio2);
    finalCoordsY2 = finalCoordsY2.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    planetAnimation1 = planetElement.animate([
      { cx: startCoords.cx, cy: startCoords.cy, transform: `rotate(0deg)` },
      { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` }
    ], {
      duration: 0,
      easing: "linear",
      fill: "forwards"
    });
    
    planetAnimation1.onfinish = function() {
      planetAnimation2 = planetElement.animate([
        { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` },
        { cx: finalCoordsX2, cy: finalCoordsY2, transform: `rotate(${orbitRatio2 * 360}deg)` }
      ], {
        duration: 1000,
        easing: "linear",
        fill: "forwards"
      });
    }
      
  }

// EARTH NEW

  function animateEarth() {
    let earthElement = document.getElementById("earth");
    let earthOrbitElement = document.getElementById("earth-orbit");
    let yearStart = new Date(2023, 0, 1);
    
    let daysSinceYearStart = Math.floor((startDate - yearStart) / (1000 * 60 * 60 * 24));
    let daysSinceTargetDate = Math.floor((targetDate - startDate) / (1000 * 60 * 60 * 24));
    let totalDays = daysSinceYearStart + daysSinceTargetDate;
    let orbitRatio1 = daysSinceYearStart / 365;
    let orbitRatio2 = totalDays / 365;
    
    if (startCoords.cx == 0 && startCoords.cy == 0) {
      startCoords = { cx: earthElement.getAttribute("cx"), cy: earthElement.getAttribute("cy") };
    }
    
    earthElement.setAttribute("cx", startCoords.cx);
    earthElement.setAttribute("cy", startCoords.cy);
    
    let finalCoordsX1 = earthOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio1);
    let finalCoordsY1 = earthOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio1);
    finalCoordsY1 = finalCoordsY1.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    let finalCoordsX2 = earthOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio2);
    let finalCoordsY2 = earthOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio2);
    finalCoordsY2 = finalCoordsY2.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    earthAnimation1 = earthElement.animate([
      { cx: startCoords.cx, cy: startCoords.cy, transform: `rotate(0deg)` },
      { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` }
    ], {
      duration: 0,
      easing: "linear",
      fill: "forwards"
    });
    
    earthAnimation1.onfinish = function() {
      earthAnimation2 = earthElement.animate([
        { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` },
        { cx: finalCoordsX2, cy: finalCoordsY2, transform: `rotate(${orbitRatio2 * 360}deg)` }
      ], {
        duration: 1000,
        easing: "linear",
        fill: "forwards"
      });
    }
  }


  //MARS NEW

  function animateMars() {   
  
    let planetElement = document.getElementById("mars");
    let planetOrbitElement = document.getElementById("mars-orbit");
    let yearStart = new Date(2023, 0, 1);
    
    let daysSinceYearStart = Math.floor((startDate - yearStart) / (1000 * 60 * 60 * 24));
    let daysSinceTargetDate = Math.floor((targetDate - startDate) / (1000 * 60 * 60 * 24));
    let totalDays = daysSinceYearStart + daysSinceTargetDate;
    let orbitRatio1 = daysSinceYearStart / 687;
    let orbitRatio2 = totalDays / 687;
  
    
    if (startCoords.cx == 0 && startCoords.cy == 0) {
      startCoords = { cx: planetElement.getAttribute("cx"), cy: planetElement.getAttribute("cy") };
    }
    
    planetElement.setAttribute("cx", startCoords.cx);
    planetElement.setAttribute("cy", startCoords.cy);
    
    let finalCoordsX1 = planetOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio1);
    let finalCoordsY1 = planetOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio1);
    finalCoordsY1 = finalCoordsY1.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    let finalCoordsX2 = planetOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio2);
    let finalCoordsY2 = planetOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio2);
    finalCoordsY2 = finalCoordsY2.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    planetAnimation1 = planetElement.animate([
      { cx: startCoords.cx, cy: startCoords.cy, transform: `rotate(0deg)` },
      { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` }
    ], {
      duration: 0,
      easing: "linear",
      fill: "forwards"
    });
    
    planetAnimation1.onfinish = function() {
      planetAnimation2 = planetElement.animate([
        { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` },
        { cx: finalCoordsX2, cy: finalCoordsY2, transform: `rotate(${orbitRatio2 * 360}deg)` }
      ], {
        duration: 1000,
        easing: "linear",
        fill: "forwards"
      });
    }

  }


  
  //JUPITER NEW

  function animateJupiter() {   
  
    let planetElement = document.getElementById("jupiter");
    let planetOrbitElement = document.getElementById("jupiter-orbit");
    let yearStart = new Date(2023, 0, 1);
    
    let daysSinceYearStart = Math.floor((startDate - yearStart) / (1000 * 60 * 60 * 24));
    let daysSinceTargetDate = Math.floor((targetDate - startDate) / (1000 * 60 * 60 * 24));
    let totalDays = daysSinceYearStart + daysSinceTargetDate;
    let orbitRatio1 = daysSinceYearStart / 4333;
    let orbitRatio2 = totalDays / 4333;
  
    
    if (startCoords.cx == 0 && startCoords.cy == 0) {
      startCoords = { cx: planetElement.getAttribute("cx"), cy: planetElement.getAttribute("cy") };
    }
    
    planetElement.setAttribute("cx", startCoords.cx);
    planetElement.setAttribute("cy", startCoords.cy);
    
    let finalCoordsX1 = planetOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio1);
    let finalCoordsY1 = planetOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio1);
    finalCoordsY1 = finalCoordsY1.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    let finalCoordsX2 = planetOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio2);
    let finalCoordsY2 = planetOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio2);
    finalCoordsY2 = finalCoordsY2.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    planetAnimation1 = planetElement.animate([
      { cx: startCoords.cx, cy: startCoords.cy, transform: `rotate(0deg)` },
      { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` }
    ], {
      duration: 0,
      easing: "linear",
      fill: "forwards"
    });
    
    planetAnimation1.onfinish = function() {
      planetAnimation2 = planetElement.animate([
        { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` },
        { cx: finalCoordsX2, cy: finalCoordsY2, transform: `rotate(${orbitRatio2 * 360}deg)` }
      ], {
        duration: 1000,
        easing: "linear",
        fill: "forwards"
      });
    }

  }


  //SATURN NEW

  function animateSaturn() {   
  
    let planetElement = document.getElementById("saturn");
    let planetOrbitElement = document.getElementById("saturn-orbit");
    let yearStart = new Date(2023, 0, 1);
    
    let daysSinceYearStart = Math.floor((startDate - yearStart) / (1000 * 60 * 60 * 24));
    let daysSinceTargetDate = Math.floor((targetDate - startDate) / (1000 * 60 * 60 * 24));
    let totalDays = daysSinceYearStart + daysSinceTargetDate;
    let orbitRatio1 = daysSinceYearStart / 10759;
    let orbitRatio2 = totalDays / 10759;
  
    
    if (startCoords.cx == 0 && startCoords.cy == 0) {
      startCoords = { cx: planetElement.getAttribute("cx"), cy: planetElement.getAttribute("cy") };
    }
    
    planetElement.setAttribute("cx", startCoords.cx);
    planetElement.setAttribute("cy", startCoords.cy);
    
    let finalCoordsX1 = planetOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio1);
    let finalCoordsY1 = planetOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio1);
    finalCoordsY1 = finalCoordsY1.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    let finalCoordsX2 = planetOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio2);
    let finalCoordsY2 = planetOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio2);
    finalCoordsY2 = finalCoordsY2.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    planetAnimation1 = planetElement.animate([
      { cx: startCoords.cx, cy: startCoords.cy, transform: `rotate(0deg)` },
      { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` }
    ], {
      duration: 0,
      easing: "linear",
      fill: "forwards"
    });
    
    planetAnimation1.onfinish = function() {
      planetAnimation2 = planetElement.animate([
        { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` },
        { cx: finalCoordsX2, cy: finalCoordsY2, transform: `rotate(${orbitRatio2 * 360}deg)` }
      ], {
        duration: 1000,
        easing: "linear",
        fill: "forwards"
      });
    }

  }
  

  //URANUS NEW

  function animateUranus() {   
  
    let planetElement = document.getElementById("uranus");
    let planetOrbitElement = document.getElementById("uranus-orbit");
    let yearStart = new Date(2023, 0, 1);
    
    let daysSinceYearStart = Math.floor((startDate - yearStart) / (1000 * 60 * 60 * 24));
    let daysSinceTargetDate = Math.floor((targetDate - startDate) / (1000 * 60 * 60 * 24));
    let totalDays = daysSinceYearStart + daysSinceTargetDate;
    let orbitRatio1 = daysSinceYearStart / 30687;
    let orbitRatio2 = totalDays / 30687;
  
    
    if (startCoords.cx == 0 && startCoords.cy == 0) {
      startCoords = { cx: planetElement.getAttribute("cx"), cy: planetElement.getAttribute("cy") };
    }
    
    planetElement.setAttribute("cx", startCoords.cx);
    planetElement.setAttribute("cy", startCoords.cy);
    
    let finalCoordsX1 = planetOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio1);
    let finalCoordsY1 = planetOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio1);
    finalCoordsY1 = finalCoordsY1.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    let finalCoordsX2 = planetOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio2);
    let finalCoordsY2 = planetOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio2);
    finalCoordsY2 = finalCoordsY2.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    planetAnimation1 = planetElement.animate([
      { cx: startCoords.cx, cy: startCoords.cy, transform: `rotate(0deg)` },
      { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` }
    ], {
      duration: 0,
      easing: "linear",
      fill: "forwards"
    });
    
    planetAnimation1.onfinish = function() {
      planetAnimation2 = planetElement.animate([
        { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` },
        { cx: finalCoordsX2, cy: finalCoordsY2, transform: `rotate(${orbitRatio2 * 360}deg)` }
      ], {
        duration: 1000,
        easing: "linear",
        fill: "forwards"
      });
    }
    startDate = new Date(targetDate);

  }
  


  //Neptune NEW

  function animateNeptune() {   
  
    let planetElement = document.getElementById("neptune");
    let planetOrbitElement = document.getElementById("neptune-orbit");
    let yearStart = new Date(2023, 0, 1);
    
    let daysSinceYearStart = Math.floor((startDate - yearStart) / (1000 * 60 * 60 * 24));
    let daysSinceTargetDate = Math.floor((targetDate - startDate) / (1000 * 60 * 60 * 24));
    let totalDays = daysSinceYearStart + daysSinceTargetDate;
    let orbitRatio1 = daysSinceYearStart / 687;
    let orbitRatio2 = totalDays / 687;
  
    
    if (startCoords.cx == 0 && startCoords.cy == 0) {
      startCoords = { cx: planetElement.getAttribute("cx"), cy: planetElement.getAttribute("cy") };
    }
    
    planetElement.setAttribute("cx", startCoords.cx);
    planetElement.setAttribute("cy", startCoords.cy);
    
    let finalCoordsX1 = planetOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio1);
    let finalCoordsY1 = planetOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio1);
    finalCoordsY1 = finalCoordsY1.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    let finalCoordsX2 = planetOrbitElement.r.baseVal.value * Math.sin(2 * Math.PI * orbitRatio2);
    let finalCoordsY2 = planetOrbitElement.r.baseVal.value * Math.cos(2 * Math.PI * orbitRatio2);
    finalCoordsY2 = finalCoordsY2.toFixed(2) + "px"; // round to 2 decimal places and add "px" units
    
    planetAnimation1 = planetElement.animate([
      { cx: startCoords.cx, cy: startCoords.cy, transform: `rotate(0deg)` },
      { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` }
    ], {
      duration: 0,
      easing: "linear",
      fill: "forwards"
    });
    
    planetAnimation1.onfinish = function() {
      planetAnimation2 = planetElement.animate([
        { cx: finalCoordsX1, cy: finalCoordsY1, transform: `rotate(${orbitRatio1 * 360}deg)` },
        { cx: finalCoordsX2, cy: finalCoordsY2, transform: `rotate(${orbitRatio2 * 360}deg)` }
      ], {
        duration: 1000,
        easing: "linear",
        fill: "forwards"
      });
    }
    startDate = new Date(targetDate);

  }
  
