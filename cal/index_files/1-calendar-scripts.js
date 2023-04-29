
// Get references to the SVG elements
const prevYear = document.getElementById('prev-year');
const nextYear = document.getElementById('next-year');
const currentYearText = document.getElementById('current-year').querySelector('tspan');
const weekPaths = document.querySelectorAll('path[id^="week-"]');

// Helper function to calculate the date range for each week
function getWeekDateRange(year, week) {
  const startDate = new Date(Date.UTC(year, 0, 1));
  const dayOffset = (startDate.getUTCDay() + 6) % 7; // Calculate the day offset for the first bridging week
  startDate.setUTCDate(1 - dayOffset); // Set the start date to the first day of the first bridging week
  startDate.setUTCDate(startDate.getUTCDate() + (week - 1) * 7); // Set the start date to the first day of the requested week
  const endDate = new Date(startDate.getTime());
  endDate.setUTCDate(endDate.getUTCDate() + 6); // Set the end date to the last day of the requested week
  const startDateString = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const endDateString = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return `${startDateString} to ${endDateString}`;
}

// Function to update the week titles for the current year
function updateWeekTitles(year) {
  weekPaths.forEach((path) => {
    const weekNumber = path.id.slice(5); // Get the week number from the path ID
    const dateRange = getWeekDateRange(year, weekNumber);
    path.setAttribute('title', dateRange);
  });
}

// Initialize the week and day titles for the current year



function prevYearClick() {
  const currentYear = parseInt(currentYearText.textContent);
  currentYearText.textContent = (currentYear - 1).toString();
  updateWeekTitles(currentYear - 1);
  updateDayIds(currentYear - 1);
  updateDayTitles(currentYear - 1);
  
  targetDate = new Date((currentYear - 1), 0, 1);
  animateMercury();
  animateVenus();
  animateEarth();
  animateMars();  
  animateJupiter();
  animateSaturn();
  animateUranus();
  //animateNeptune();

  updateTargetWeekColor();
  setLunarMonthForTarget();
  updateTargetMonth();
  updateMoonPhase(targetDate);
  updateTargetDay();
  getFirstNewMoon();
}

function nextYearClick() {
  const currentYear = parseInt(currentYearText.textContent);
  currentYearText.textContent = (currentYear + 1).toString();
  updateWeekTitles(currentYear + 1);
  updateDayIds(currentYear + 1);
  updateDayTitles(currentYear + 1);
  
  targetDate = new Date((currentYear + 1), 0, 1);
  animateMercury();
  animateVenus();
  animateEarth();
  animateMars();  
  animateJupiter();
  animateSaturn();
  animateUranus();
 // animateNeptune();

  updateTargetWeekColor();
  setLunarMonthForTarget();
  updateTargetMonth();
  updateMoonPhase(targetDate);
  updateTargetDay();
  getFirstNewMoon();
}




// Add event listeners to the buttons
prevYear.addEventListener('click', prevYearClick);
nextYear.addEventListener('click', nextYearClick);

function updateDayIds(year) {
  const dayPaths = document.querySelectorAll('path[id$="-day"]');
  dayPaths.forEach((path) => {
    const idParts = path.id.split('-');
    const day = parseInt(idParts[0]);
    const date = new Date(year, 0, day);
    const month = date.getMonth() + 1;
    const dayOfMonth = date.getDate();
    const yearString = year.toString();
    const newId = `${day}-${dayOfMonth}-${month}-${yearString}-day`;
    path.setAttribute('id', newId);
  });

//updateTargetDay();

}


function updateDayTitles(year) {
  const dayPaths = document.querySelectorAll('path[id$="-day"]');
  dayPaths.forEach((path) => {
    const dateParts = path.id.split('-');
    const dayOfMonth = parseInt(dateParts[1]);
    const month = parseInt(dateParts[2]) - 1; // month is 0-indexed in JavaScript
    const date = new Date(year, month, dayOfMonth);
    const dateString = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    path.setAttribute('title', dateString);
  });
}


function updateDayTitles(year) {
  const dayPaths = document.querySelectorAll('path[id$="-day"]');
  dayPaths.forEach((path) => {
    const dateParts = path.id.split('-');
    const dayOfMonth = parseInt(dateParts[1]);
    const month = parseInt(dateParts[2]) - 1; // month is 0-indexed in JavaScript
    const date = new Date(year, month, dayOfMonth);
    const dateString = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });



    path.setAttribute('title', `${dateString}`);
  });
}



//Sets the Mouseover for the Moon Phases
function formatDate(date) {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  }
  
  function getPhaseIndex(phase) {
    const phaseIndex = Math.round(phase * 30);
    return phaseIndex;
  }
  
  function getMoonPhaseEmoji(phase) {
    const phaseIndex = getPhaseIndex(phase);
    if (phaseIndex > 0 && phaseIndex <= 1) return '🌑'; // New Moon
    if (phaseIndex > 1 && phaseIndex <= 7) return '🌒'; // Waxing Crescent
    if (phaseIndex === 8) return '🌓'; // First Quarter
    if (phaseIndex > 8 && phaseIndex <= 14) return '🌔'; // Waxing Gibbous
    if (phaseIndex > 14 && phaseIndex <= 16) return '🌕'; // Full Moon
    if (phaseIndex > 16 && phaseIndex <= 23) return '🌖'; // Waning Gibbous
    if (phaseIndex === 24) return '🌗'; // Last Quarter
    if (phaseIndex > 24 && phaseIndex <= 29) return '🌘'; // Waning Crescent
    if (phaseIndex > 29 && phaseIndex <= 31) return '🌑'; // New Moon
  }
  
  function getMoonPhaseName(phase) {
    const phaseIndex = getPhaseIndex(phase);
    if (phaseIndex > 0 && phaseIndex <= 1) return 'New Moon';
    if (phaseIndex > 1 && phaseIndex <= 7) return 'Waxing Crescent';
    if (phaseIndex === 8) return 'First Quarter';
    if (phaseIndex > 8 && phaseIndex <= 14) return 'Waxing Gibbous';
    if (phaseIndex > 14 && phaseIndex <= 16) return 'Full Moon';
    if (phaseIndex > 16 && phaseIndex <= 23) return 'Waning Gibbous';
    if (phaseIndex === 24) return 'Last Quarter';
    if (phaseIndex > 24 && phaseIndex <= 29) return 'Waning Crescent';
    if (phaseIndex > 29 && phaseIndex <= 31) return 'New Moon';
  }


// This function displays the moon phase details when hovering over a day on the calendar
function displayMoonPhaseOnHover(event) {
  // Get the target path element and extract the date information from the element's ID
  const path = event.target;
  const dateParts = path.id.split('-');
  const dayOfYear = parseInt(dateParts[0]);
  const dayOfMonth = parseInt(dateParts[1]);
  const month = parseInt(dateParts[2]) - 1; // month is 0-indexed in JavaScript
  const year = parseInt(dateParts[3]);
  const date = new Date(year, month, dayOfMonth);

  // Call the displayMoonPhaseInDiv function to show the moon phase details for the selected date
  displayMoonPhaseInDiv(date);
  
  displayDayInfo(date);
}



// This function displays the moon phase details in a div element.
function displayMoonPhaseInDiv(date) {
  // Set the latitude and longitude to use for the moon phase calculations
  const lat = -8.506853;
  const lon = 115.262477;

  // Calculate the moon illumination details and get the phase, emoji, and phase index
  const moonIllumination = SunCalc.getMoonIllumination(date);
  const phase = moonIllumination.phase;
  const moonPhaseEmoji = getMoonPhaseEmoji(phase);
  const phaseIndex = getPhaseIndex(phase);

  // Calculate the moon position and get the distance, angle, illuminated fraction, and phase name
  const moonPosition = SunCalc.getMoonPosition(date, lat, lon);
  const moonDistance = moonPosition.distance.toFixed(2);
  const moonAngle = (moonPosition.parallacticAngle * (180 / Math.PI)).toFixed(2);
  const illuminatedFraction = moonIllumination.fraction.toFixed(2);
  const moonPhaseName = getMoonPhaseName(phase);
  const islamicMonth = getIslamicMonth(date);

  // Update the moon phase div with the calculated details
  const moonPhaseDiv = document.getElementById('current-moon-info');
  moonPhaseDiv.innerHTML = `${moonPhaseEmoji} ${moonPhaseName} <br>Illuminated Fraction: ${illuminatedFraction} <br>Angle: ${moonAngle}°<br>Distance: ${moonDistance} km <br>Phase Index: ${phaseIndex}<br>Islamic Month: ${islamicMonth}`;
}




/*
function displayDayInfo(date) {
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const dateString = date.toLocaleDateString('en-US', options);
  const dayOfYear = getDayOfYear(date);
  const weekNumber = getWeekNumber(date);

  const currentDateDiv = document.getElementById('current-date-info');
  currentDateDiv.innerHTML = `${dateString}<br>Day ${dayOfYear} of the year<br>Week ${weekNumber} of the year`;
}*/

function displayDayInfo(date) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = monthsOfYear[date.getMonth()];
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  const dayOfYear = getDayOfYear(date);
  const weekNumber = getWeekNumber(date);

  let dayOfMonthString;
  if (dayOfMonth % 10 === 1 && dayOfMonth !== 11) {
    dayOfMonthString = `${dayOfMonth}st`;
  } else if (dayOfMonth % 10 === 2 && dayOfMonth !== 12) {
    dayOfMonthString = `${dayOfMonth}nd`;
  } else if (dayOfMonth % 10 === 3 && dayOfMonth !== 13) {
    dayOfMonthString = `${dayOfMonth}rd`;
  } else {
    dayOfMonthString = `${dayOfMonth}th`;
  }

  const dateString = `${dayOfWeek}, ${month} ${dayOfMonthString}, ${year}`;
  const dayOfYearString = `Day ${dayOfYear + 1}`;
  const weekNumberString = ` and week ${weekNumber} of the year`;

  const currentDateInfoDiv = document.getElementById('current-date-info');
  currentDateInfoDiv.innerHTML = `<h2>${dateString}</h2><h6 style="margin-top: -12px">${dayOfYearString} and ${weekNumberString}</h6><br>`;
}



function getWeekNumber(date) {
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
  return Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
}

/*
function getDayOfYear(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear;
}
*/
// This function displays the moon phase details in a div element.
function displayMoonPhaseInDiv(date) {
  // Set the latitude and longitude to use for the moon phase calculations
  const lat = -8.506853;
  const lon = 115.262477;

  // Calculate the moon illumination details and get the phase, emoji, and phase index
  const moonIllumination = SunCalc.getMoonIllumination(date);
  const phase = moonIllumination.phase;
  const moonPhaseEmoji = getMoonPhaseEmoji(phase);
  const phaseIndex = getPhaseIndex(phase);

  // Calculate the moon position and get the distance, angle, illuminated fraction, and phase name
  const moonPosition = SunCalc.getMoonPosition(date, lat, lon);
  const moonDistance = moonPosition.distance.toFixed(2);
  const moonAngle = (moonPosition.parallacticAngle * (180 / Math.PI)).toFixed(2);
  const illuminatedFraction = moonIllumination.fraction.toFixed(2);
  const moonPhaseName = getMoonPhaseName(phase);
  const islamicMonth = getIslamicMonth(date);
  const islamicMonthName = getIslamicMonthName(islamicMonth);

  // Update the moon phase div with the calculated details
  const moonPhaseDiv = document.getElementById('current-moon-info');
  moonPhaseDiv.innerHTML = `${moonPhaseEmoji} ${moonPhaseName} <br>Illuminated Fraction: ${illuminatedFraction} <br>Angle: ${moonAngle}°<br>Distance: ${moonDistance} km <br>Phase Index: ${phaseIndex}<br>Islamic Month: ${islamicMonthName}`;
}

function getIslamicMonth(date) {
  // Get the year, month, and day of the Gregorian date
  const gYear = date.getFullYear();
  const gMonth = date.getMonth() + 1;
  const gDay = date.getDate();

  // Calculate the Julian date corresponding to the Gregorian date
  const jDate = toJulianDate(gYear, gMonth, gDay);

  // Calculate the approximate Islamic lunar year and month for the Julian date
  const approxIslamicYear = Math.floor((jDate - 1948440.5) / 29.5306);
  const approxIslamicMonth = Math.ceil((jDate - (29.5306 * approxIslamicYear + 1948440.5)) / 29.53);

  // Calculate the Julian date of the start of the corresponding Islamic lunar month
  const startIslamicMonthJDate = toJulianDate(islamicToGregorian(approxIslamicYear, approxIslamicMonth, 1));

  // If the start of the Islamic month is after the Gregorian date, use the previous month
  if (startIslamicMonthJDate > jDate) {
    return (approxIslamicMonth - 1 + 12) % 12;
  } else {
    return approxIslamicMonth;
  }
}


function getIslamicMonthName(islamicMonth) {
  const islamicMonths = [
    "Muharram",
    "Safar",
    "Rabi' al-Awwal",
    "Rabi' al-Thani",
    "Jumada al-Ula",
    "Jumada al-Akhirah",
    "Rajab",
    "Sha'ban",
    "Ramadan",
    "Shawwal",
    "Dhu al-Qidah",
    "Dhu al-Hijjah"
  ];

  return islamicMonths[islamicMonth - 1];
}


// Helper function to convert a Gregorian date to a Julian date
function toJulianDate(year, month, day) {
  if (month < 3) {
    year -= 1;
    month += 12;
  }
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  const JD = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
  return JD;
}

// Helper function to convert an Islamic lunar date to a Gregorian date
function islamicToGregorian(year, month, day) {
  const m = month + 1;
  const y = (m <= 2) ? year - 1 : year;
  const jd = Math.floor((29.5 * m) + (y * 354) + (Math.floor((3 + (11 * y)) / 30)) + day + 1948439.5);
  const date = new Date((jd - 2440588) * 86400000);
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
}




// This function displays the current moon phase
function displayCurrentMoonPhase() {
  const currentDate = targetDate;
  // TODO: This function should call displayMoonPhaseInDiv() with the current date
}

  
  function addMoonPhaseInteraction() {
    const dayPaths = document.querySelectorAll('path[id$="-day"]');
    dayPaths.forEach((path) => {
      path.addEventListener('mouseover', displayMoonPhaseOnHover);
      path.addEventListener('mouseout', displayCurrentMoonPhase);

    });
  }
  
  // Initialize the event listeners and display the current Moon phase
  addMoonPhaseInteraction();
  displayCurrentMoonPhase();
  



  
  // Updates the Moon SVG display based on the phase index
  function updateMoonPhaseDisplay(phaseIndex) {
    for (let i = 0; i <= 30; i++) {
      const moonPathElement = document.getElementById(`phase-${i}-moon`);
      if (moonPathElement) {
        moonPathElement.style.display = i <= phaseIndex ? 'inline' : 'none';
      }
    }
  }
  
  // Updates the Moon SVG display based on the moon phase for the given date
  function updateMoonPhase(date) {
    const moonPhase = SunCalc.getMoonIllumination(date).phase;
    const phaseIndex = getPhaseIndex(moonPhase);
  
    updateMoonPhaseDisplay(phaseIndex);
  
    // Display debugging information
    //displayDebugInfo(moonPhase, phaseIndex, `phase-${phaseIndex}-moon`);
  }
  
  // Resets the Moon phase path to the one that corresponds to the current date
  function resetMoonPhase() {
    const currentDate = new Date();
    updateMoonPhase(currentDate);
  }
  
  // Handles the event when a user hovers over a Sun path
  function handleSunPathMouseOver(event) {
    const sunPathId = event.target.id;
    const [dayOfYear, day, month, year] = sunPathId.split('-').slice(0, 4);
    const date = new Date(year, month - 1, day);
  
    updateMoonPhase(date);
  }
  
  // Handles the event when a user hovers off a Sun path
  function handleSunPathMouseOut(event) {
    resetMoonPhase();
  }
  
  // Adds event listeners to the Sun SVG paths
  function addSunPathEventListeners() {
    const earthCyclesSVG = document.getElementById('EarthCycles');
  
    if (!earthCyclesSVG) {
      console.error('EarthCycles SVG element not found');
      return;
    }
  
    const sunPaths = earthCyclesSVG.querySelectorAll('path');
  
    sunPaths.forEach((path) => {
      if (path.id.endsWith('-day')) {
        path.addEventListener('mouseover', handleSunPathMouseOver);
        path.addEventListener('mouseout', handleSunPathMouseOut);
        path.addEventListener('click', handleSunPathMouseOver);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    //updateCurrentMoonPhase();
    addMoonPhaseInteraction();
  });
  
  // Initialize event listeners for the Sun SVG paths and reset the Moon phase to the current date
  addSunPathEventListeners();
  resetMoonPhase();



