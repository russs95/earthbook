/* EARTHCYCLES CALENDAR PRIMARY JAVASCRIPTS   */

/*Updates certain colors to the Dark or Light theme*/

function updateBackgroundColor() {
  const svg = document.querySelector("svg");
  const elementsWithColor = svg.querySelectorAll("[fill='#808000'], [stroke='#808000']");


  for (let element of elementsWithColor) {
    if (element.getAttribute("fill") === "#808000") {
      element.setAttribute("fill", "var(--general-background)");
    }
    if (element.getAttribute("stroke") === "#808000") {
      element.setAttribute("stroke", "var(--general-background)");
    }
  }
}


/*var(--general-background-highlight)*/
function updateHighlightColor() {
  const svg = document.querySelector("svg");
  const elementsWithColor = svg.querySelectorAll("[fill='#008000'], [stroke='#008000']");

  for (let element of elementsWithColor) {
    if (element.getAttribute("fill") === "#008000") {
      element.setAttribute("fill", "var(--general-background-highlight)");
    }
    if (element.getAttribute("stroke") === "#008000") {
      element.setAttribute("stroke", "var(--general-background-highlight)");
    }
  }
}
function updateLunarMonths() {
  const svg = document.querySelector("svg");
  const elementsWithColor = svg.querySelectorAll("[fill='#999'], [stroke='#999']");

  for (let element of elementsWithColor) {
    if (element.getAttribute("fill") === "#999") {
      element.setAttribute("fill", "var(--months-lunar)");
    }
    if (element.getAttribute("stroke") === "#999") {
      element.setAttribute("stroke", "var(--months-lunar)");
    }
  }
}

function updateWeeksCircle() {
  const svg = document.querySelector("svg");
  const elementsWithColor = svg.querySelectorAll("[fill='#b3b3b3'], [stroke='#b3b3b3']");

  for (let element of elementsWithColor) {
    if (element.getAttribute("fill") === "#b3b3b3") {
      element.setAttribute("fill", "var(--weeks-circle)");
    }
    if (element.getAttribute("stroke") === "#b3b3b3") {
      element.setAttribute("stroke", "var(--weeks-circle)");
    }
  }
}

/* RIGHT SETTINGS OVERLAY */

function openSettings() {
  document.getElementById("right-settings-overlay").style.width = "90%";
  document.body.style.overflowY = "hidden";
  document.body.style.maxHeight = "101vh";

  var modal = document.getElementById('right-settings-overlay');

function modalShow () {
   modal.setAttribute('tabindex', '0');
   modal.focus();
}

function focusRestrict ( event ) {
  document.addEventListener('focus', function( event ) {
    if ( modalOpen && !modal.contains( event.target ) ) {
      event.stopPropagation();
      modal.focus();
    }
  }, true);
}
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeSettings() {
  document.getElementById("right-settings-overlay").style.width = "0%";
  document.body.style.overflowY = "unset";
document.body.style.maxHeight = "unset";
  //document.body.style.height = "unset";
} 

function modalCloseCurtains ( e ) {
  if ( !e.keyCode || e.keyCode === 27 ) {
    
  document.body.style.overflowY = "unset";
  document.getElementById("right-settings-overlay").style.width = "0%";
  /*document.getElementById("knack-overlay-curtain").style.height = "0%";*/

  }
}

document.addEventListener('keydown', modalCloseCurtains);





       
/* ---------------------------

Animate the planets into position 


-------------------------------*/


  let startCoords = { cx: 0, cy: 0 };

  let targetDate;
  let startDate;
  let year = 2023;
  let currentDate;
  let dayOfYear;



  function setCurrentDate() {
    let currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    //updateTargetDay();
  }
  
  function getDayOfYear(targetDate) {
  const startOfYear = new Date(Date.UTC(targetDate.getFullYear(), 0, 1));
  const diff = targetDate.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay) + 1;
}



// TRIGGERS PLANET ANIMATION ON DAY PATH CLICK

  function triggerPlanets() {

    let paths = document.querySelectorAll('path[id$="-day"]');
  
    // Event listener for each path element
    paths.forEach(path => {
      path.addEventListener('click', () => {
        // Parse date from path ID
        let pathIdArr = path.id.split('-');
        let month = pathIdArr[2] - 1;
        let day = pathIdArr[1];
        let year = pathIdArr[3];
        targetDate = new Date(year, month, day);

        animateMercury();
        animateVenus();
        animateEarth();
        animateMars();  
        animateJupiter();
        animateSaturn();
        animateUranus();
        updateTargetWeekColor();
        setLunarMonthForTarget();
        updateTargetMonth();
        updateTargetDay();
        dayOfYear = getDayOfYear(targetDate);
        displayMoonPhaseInDiv(targetDate)
        //animateNeptune();
        document.getElementById("reset").style.display = "block";
      });
    });
  }
  



/*------------------------------

HIGHLIGHT CURRENT DATE 


-------------------------------*/


function updateTargetDay() {
  const startOfYear = new Date(Date.UTC(targetDate.getFullYear(), 0, 1));
  const diff = targetDate.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24)) + 2;
  const dayIdStart = `${dayOfYear}-`;

  const svg = document.querySelector('svg');
  const paths = svg.querySelectorAll('path');

  paths.forEach(path => {
    if (path.id.startsWith(dayIdStart) && path.id.endsWith('-day')) {
      path.style.fillOpacity = '1';
    } else {
      if (path.id.includes(`-day`)) {
        path.style.fillOpacity = '0.3';
      }
    }

    path.addEventListener('mouseenter', () => {
      if (path.id.startsWith(dayIdStart) && path.id.endsWith('-day')) {
        path.style.fillOpacity = '1';
      } else {
        if (path.id.includes(`-day`)) {
          path.style.fillOpacity = '0.8';
        }
      }
    });

    path.addEventListener('mouseleave', () => {
      if (path.id.startsWith(dayIdStart) && path.id.endsWith('-day')) {
        path.style.fillOpacity = '1';
      } else {
        if (path.id.includes(`-day`)) {
          path.style.fillOpacity = '0.3';
        }
      }
    });
  });
}



  
//Set the color of the Target Day's Week

function updateTargetWeekColor() {
  const targetWeek = Math.ceil((targetDate - new Date(targetDate.getFullYear(), 0, 1)) / 604800000);
  const targetMonth = targetDate.getMonth();
  const colors = [
    '#7f2affff', '#ff11ceff', '#fb0000ff', '#ff6303ff', '#ff8201ff', '#ffd119ff',
    '#fbfb00ff', '#beee00ff', '#00e513ff', '#00e6a7ff', '#0cacf5ff', '#4343ffff',
  ];

  const svg = document.querySelector('svg');
  const paths = svg.querySelectorAll('path');

  paths.forEach(path => {
    if (path.id.includes('week-')) {  
        path.style.fill = 'var(--weeks-circle)';
    } else {
    }
  });

  
  paths.forEach(path => {
    if (path.id === `week-${targetWeek}`) {
      path.style.opacity = 0.9;
      path.style.fill = colors[targetMonth];
    } else {

    }
  });
}

//Sets the Color of the Target Day's Month

function updateTargetMonth() {
  const targetMonth = targetDate.getMonth();

  const svg = document.querySelector('svg');
  const paths = svg.querySelectorAll('path');

  const monthRegex = /(january|february|march|april|may|june|july|august|september|october|november|december)/;

  paths.forEach(path => {
    if (monthRegex.test(path.id)) {  
      path.style.opacity = '0.5';
    } else {
    }
  });

  const quadrantElement = document.getElementById(`${getMonthName(targetMonth).toLowerCase()}`);
  quadrantElement.style.opacity = "0.9";
  quadrantElement.style.transition = "opacity 1s";
}


function getMonthName(monthIndex) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[monthIndex];
}


// Sets the color of the Target Day's Lunar Month

function setLunarMonthForTarget() {
  const lunarMonthNumber = getLunarMonthNumber(targetDate);
  const pathID = `lunar-${lunarMonthNumber}-month`;
  const pathElement = document.getElementById(pathID);


  const svg = document.querySelector('svg');
  const paths = svg.querySelectorAll('path');

  paths.forEach(path => {
  if (path.id.includes('lunar-')) {  
    path.style.fill = 'var(--months-lunar)';
} else {
}
  });

  if (pathElement) {
    const lunarMonthColors = [
      '#7f2affff', '#ff11ceff', '#fb0000ff', '#ff6303ff', '#ff8201ff', '#ffd119ff',
      '#fbfb00ff', '#beee00ff', '#00e513ff', '#00e6a7ff', '#0cacf5ff', '#4343ffff', '#808080ff',
    ];

    pathElement.style.opacity = 1;
    pathElement.style.fill = lunarMonthColors[lunarMonthNumber - 1];
  } else {
    console.error("Path not found:", pathID);
  }
}

function getLunarMonthNumber(date) {
  // Calculate the number of days since the start of the year
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const diff = (date - startOfYear) / 86400000; // 86400000 = number of milliseconds in a day

  // Calculate the lunar month number based on the number of days since the start of the year
  let lunarMonthNumber;
  if (diff < 29.5) {
    lunarMonthNumber = 1;
  } else if (diff < 59) {
    lunarMonthNumber = 2;
  } else if (diff < 88.5) {
    lunarMonthNumber = 3;
  } else if (diff < 118) {
    lunarMonthNumber = 4;
  } else if (diff < 147.5) {
    lunarMonthNumber = 5;
  } else if (diff < 177) {
    lunarMonthNumber = 6;
  } else if (diff < 206.5) {
    lunarMonthNumber = 7;
  } else if (diff < 236) {
    lunarMonthNumber = 8;
  } else if (diff < 265.5) {
    lunarMonthNumber = 9;
  } else if (diff < 295) {
    lunarMonthNumber = 10;
  } else if (diff < 324.5) {
    lunarMonthNumber = 11;
  } else if (diff < 354) {
    lunarMonthNumber = 12;
  } else {
    lunarMonthNumber = 13;
  }

  return lunarMonthNumber;
}





/* SEND IDS to TITLEs (?)

function addTitleToNonDatePaths() {
  const paths = document.querySelectorAll('svg path');
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december', 'lunar', 'week'];

  function containsMonth(id) {
    return months.some((month) => id.toLowerCase().includes(month));
  }

  for (let i = 0; i < paths.length; i++) {
    const id = paths[i].getAttribute('id');
    if (id && !id.includes('-day') && !containsMonth(id)) {
      paths[i].setAttribute('title', id);
    }
  }
}*/



/* SET DATE PATHS being used???!
*/
function getMoonPhaseAndIllumination(date) {
  const julianDate = date / 86400000 + 2440587.5;
  const newMoon = 2451550.1;
  const synodicMonth = 29.53058867;

  const daysSinceNewMoon = julianDate - newMoon;
  const moonPhases = daysSinceNewMoon % synodicMonth;
  
  const phase = (moonPhases / synodicMonth) * 8;
  const phaseIndex = Math.floor((phase < 0 ? phase + 8 : phase) + 0.5) % 8;
  
  const moonPhaseIcons = [
    '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'
  ];
  
  return moonPhaseIcons[phaseIndex];
}




/* Old function to add emoticon to day title- not being used
function addFormattedDateTitles() {
  const paths = document.querySelectorAll('svg path');
  const currentYear = new Date().getFullYear();

  for (let i = 0; i < paths.length; i++) {
    const id = paths[i].getAttribute('id');
    if (id && id.includes('-day')) {
      const dayOfYear = parseInt(id.split('-')[0]);
      const date = new Date(currentYear, 0);
      date.setDate(dayOfYear);

      const formattedDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).format(date);

      const moonPhaseEmoticon = getMoonPhaseAndIllumination(date);
      const title = `${formattedDate} ${moonPhaseEmoticon}`;

      paths[i].setAttribute('title', title);
    }
  }
}

addFormattedDateTitles();
*/


/* ADD TOOL TIP TO ALL TITLES */

function title2tooltip() {
  var paths = document.querySelectorAll('path:not([id*="-day"]):not([id*="phase"]), circle:not([id*="-day"]):not([id*="phase"])');

  for (var i = 0; i < paths.length; i++) {
    var title = paths[i].getAttribute('title');
    if (title) {
      paths[i].addEventListener('mouseover', function(event) {
        var tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = event.target.getAttribute('title');
        document.body.appendChild(tooltip);

        tooltip.style.left = event.clientX + 5 + 'px';
        tooltip.style.top = event.clientY + -20 + 'px'; // adjust the vertical position as needed
      });

      paths[i].addEventListener('mouseout', function(event) {
        var tooltip = document.querySelector('.tooltip');
        if (tooltip) {
          tooltip.parentNode.removeChild(tooltip);
        }
      });
    }
  }
}


function title2datetip() {
  var paths = document.querySelectorAll('path[id*="-day"]');

  for (var i = 0; i < paths.length; i++) {
    var title = paths[i].getAttribute('title');
    if (title) {
      paths[i].addEventListener('mouseover', function(event) {
        var tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = event.target.getAttribute('title');
        document.body.appendChild(tooltip);

        tooltip.style.left = event.clientX + 5 + 'px';
        tooltip.style.top = event.clientY + -20 + 'px'; // adjust the vertical position as needed
      });

      paths[i].addEventListener('mouseout', function(event) {
        var tooltip = document.querySelector('.tooltip');
        if (tooltip) {
          tooltip.parentNode.removeChild(tooltip);
        }
      });
    }
  }
}


function click2datetip() {
  var svg = document.querySelector('svg');
  var paths = document.querySelectorAll('path[id*="-day"]');
  var modal = document.getElementById('day-modal');
  var modalContent = document.querySelector('.modal-content');
  var dayTitle = document.getElementById('day-title');
  var dayLink = document.getElementById('day-link');

  // Loop through all -day paths and add click event listeners
  for (var i = 0; i < paths.length; i++) {
    var title = paths[i].getAttribute('title');
    if (title) {
      paths[i].addEventListener('click', function(event) {
        // Show the modal
        modal.style.display = 'block';
        // Set the day title and day link
        dayTitle.innerHTML = event.target.getAttribute('title');
        dayLink.href = '#';
        // Disable pointer events on the SVG
        svg.style.pointerEvents = 'none';
      });
    }
  }

  // Add click event listener to the modal close button
  var closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', function(event) {
    // Hide the modal
    modal.style.display = 'none';
    // Enable pointer events on the SVG
    svg.style.pointerEvents = 'auto';
  });

  // Add click event listener to the modal
  modal.addEventListener('click', function(event) {
    // If the clicked element is the modal content, do nothing
    if (event.target == modalContent) {
      return;
    }
    // Hide the modal
    modal.style.display = 'none';
    // Enable pointer events on the SVG
    svg.style.pointerEvents = 'auto';
  });
}


/*LUNAR TIME*/

function getMoonPhaseEmoticon(date) {
  const phase = (((date.getTime() / 1000) - 753144) / (29.53059 * 86400)) % 1;
  if (phase < 0.035) return "🌑";
  if (phase < 0.215) return "🌒";
  if (phase < 0.285) return "🌓";
  if (phase < 0.465) return "🌔";
  if (phase < 0.535) return "🌕";
  if (phase < 0.715) return "🌖";
  if (phase < 0.785) return "🌗";
  return "🌘";
}

function addMoonPhaseTitle() {
  const currentDate = new Date();
  const phaseEmoticon = getMoonPhaseEmoticon(currentDate);

  const lunarPath = document.querySelector('svg path[id*="lunar"]');
  if (lunarPath) {
    const illuminatedFraction = Math.round(Math.abs(0.5 - (((currentDate.getTime() / 1000) - 753144) / (29.53059 * 86400)) % 0.5) * 200);
    const title = `Moon today: ${illuminatedFraction}% ${phaseEmoticon}`;
    lunarPath.setAttribute('title', title);
  }
}


function getIlluminatedFraction(date) {
  const julianDate = date / 86400000 + 2440587.5;
  const newMoon = 2451550.1;
  const synodicMonth = 29.53058867;

  const daysSinceNewMoon = julianDate - newMoon;
  const moonPhases = daysSinceNewMoon % synodicMonth;
  
  const phase = (moonPhases / synodicMonth) * 8;
  const phaseIndex = Math.floor((phase < 0 ? phase + 8 : phase) + 0.5) % 8;
  
  const illumination = Math.abs(50 * (1 - Math.cos((2 * Math.PI * moonPhases) / synodicMonth)));

  return {
    phaseIndex: phaseIndex,
    illuminatedFraction: illumination.toFixed(2),
  };
}

function displayCurrentMoonFraction() {
  const currentDate = new Date();
  const moonData = getIlluminatedFraction(currentDate);
  const moonPhaseEmoticon = getMoonPhaseAndIllumination(currentDate);

  const moonFractionDiv = document.querySelector('#moon-fraction');
  if (moonFractionDiv) {
    moonFractionDiv.innerHTML = `Moon: ${moonData.illuminatedFraction}% ${moonPhaseEmoticon}`;
  }
}


function resetToday()  {

setCurrentDate();
const currentYear = parseInt(currentYearText.textContent);
currentYearText.textContent = (currentYear).toString();

updateWeekTitles(currentYear);
updateDayIds(currentYear);
updateDayTitles(currentYear);
triggerPlanets();
addTitleToNonDatePaths();
title2tooltip();
title2datetip();
updateTargetDay();
//click2datetip()
setTimeout(function() {
  animateMercury();
  animateEarth();
  animateVenus();
  

  animateMars();
  animateJupiter();
  animateSaturn();
  animateUranus();
 // animateNeptune();

}, 1000);
// run after 9 seconds
setTimeout(updateTargetWeekColor, 1300);

// run after 9.25 seconds
setTimeout(setLunarMonthForTarget, 1700);

// run after 9.5 seconds
setTimeout(updateTargetMonth, 1000);


}





