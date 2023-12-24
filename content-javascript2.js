
let submissionPhase = 1;

function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Select the form using its ID
    const form = document.getElementById("emailForm");
    const emailInput = form.elements["email"];
    const nameInput = form.elements["name"];

    switch (submissionPhase) {
        case 1:
            handlePhase1(emailInput, nameInput);
            break;
        case 2:
            handlePhase2(emailInput, nameInput);
            break;
        case 3:
            handlePhase3(emailInput, nameInput, form);
            break;
    }
}
function handlePhase1(emailInput, nameInput) {
    // Animate email input to shrink to 0% width
    emailInput.style.transition = 'width 0.3s';
    emailInput.style.width = '0%';

    // Wait for the email input shrink animation to complete
    setTimeout(() => {
        emailInput.style.display = 'none'; // Hide the email input after transition

        // Prepare name input for animation
        nameInput.style.display = 'block';
        nameInput.style.width = '0';
        nameInput.style.transition = 'width 0.3s';

        // Delay the start of the name input expansion to allow for transition setup
        setTimeout(() => {
            nameInput.style.width = '70%';
        }, 10); // A short delay to ensure the transition is applied

    }, 300); // Delay corresponds to the duration of the email input shrink animation

    // Update button text
    const submitButton = document.querySelector('.register-button');
    submitButton.value = 'Register ➔';

    // Update the phase
    submissionPhase = 2;
}



function handlePhase2(emailInput, nameInput, form) {
    // Store data in browser cache and log
    const earthenRegistration = {
        email: emailInput.value,
        name: nameInput.value,
        dateTimeSubmitted: new Date().toISOString(),
        notes: 'registered on earthbook'
    };
    localStorage.setItem('earthenRegistration', JSON.stringify(earthenRegistration));
    console.log(earthenRegistration);

    // Animate name input to shrink to 0% width
    nameInput.style.transition = 'width 0.3s';
    nameInput.style.width = '0%';

    // Wait for the name input shrink animation to complete
    setTimeout(() => {
        nameInput.style.display = 'none'; // Hide the name input after transition

        // Get the reg-complete-text div and prepare it for animation
        const regCompleteText = document.querySelector('.reg-complete-text');
        regCompleteText.innerHTML = "Processing registration"; // Set the text
        regCompleteText.style.display = 'block';
        regCompleteText.style.width = '0';
        regCompleteText.style.transition = 'width 0.3s';

        // Animate reg-complete-text div to increase to 70% width
        setTimeout(() => {
            regCompleteText.style.width = '70%';
        }, 10); // A short delay to ensure the transition is applied

    }, 300); // Delay corresponds to the duration of the name input shrink animation

    // Update button text
    const submitButton = document.querySelector('.register-button');
    submitButton.value = '...';

   // Automatically move to the next phase after the UI updates
   setTimeout(() => {
    handlePhase3(emailInput, nameInput, form);
}, 300 + 10); // Adjust the timeout to match the total animation duration

}


function handlePhase3(emailInput, nameInput, form) {
    // Prepare data for the webhook
    const data = {
        email: emailInput.value,
        name: nameInput.value,
        notes: 'earthbook'
    };

    // Log the data to be sent
    console.log('Sending data to webhook:', JSON.stringify(data));

    // Send data to the webhook
    fetch('https://hook.eu1.make.com/xtlexd0girt9ua3hnsfuzwlrjgrsmqgt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        updateUIOnSuccess(); // Update UI for success
    })
    .catch((error) => {
        console.error('Error:', error);
        updateUIOnError(); // Update UI for error
    });
}


function updateUIOnSuccess() {
    // Get the elements by their IDs
    const regStatus = document.getElementById('reg-status');
    const regStatusIcon = document.getElementById('reg-status-icon');

    // Update reg-status text and color
    regStatus.innerHTML = "You're successfully signed up!";
    regStatus.style.color = 'green';

    // Update reg-status-icon to a check mark
    regStatusIcon.value = '✔️';
}

function updateUIOnError() {
    // Get the elements by their IDs
    const regStatus = document.getElementById('reg-status');
    const regStatusIcon = document.getElementById('reg-status-icon');

    // Update reg-status text and color
    regStatus.innerHTML = "Registration failed. Please try again.";
    regStatus.style.color = 'red';

    // Update reg-status-icon to a cross mark
    regStatusIcon.value = '❌';
}





// let lastScrollTop = 0;
// let headerHidden = false;



// function scrollLessThan40() {
//     if (window.pageYOffset <= 40) {
//         document.getElementById("header").style.height = "50vh";
//     }
// }

// function scrollMoreThan1000() {
//     let currentScrollPos = window.pageYOffset;
//     if (currentScrollPos >= 1000 && !headerHidden) {
//         document.getElementById("header").style.marginTop = "-100vh";
//         headerHidden = true;
//     } else if (currentScrollPos > 40 && currentScrollPos < 1000) {
//         document.getElementById("header").style.height = "60px";
//         headerHidden = false;
//     }
// }

// function scrollBack() {
//     let currentScrollPos = window.pageYOffset;
//     if (headerHidden && lastScrollTop > currentScrollPos) {
//         document.getElementById("header").style.marginTop = "0";
//         headerHidden = false;
//     }
//     lastScrollTop = currentScrollPos;
// }




function sendUpRegistration() {
   
        var footer = document.getElementById("registration-footer");
        var emailRegistration = document.getElementById("email-registration");
        var upArrow = document.getElementById("reg-up-button");
        var downArrow = document.getElementById("reg-down-button");

        // Adjust the height of the registration footer
        footer.style.height = "50vh";

        // Make the email registration section visible
        emailRegistration.style.display = "block";
        upArrow.style.display = "none";
        downArrow.style.display = "block";

}

document.getElementById('progress-bar').addEventListener('click', function() {
    sendUpRegistration();
});

function sendDownRegistration() {
   
    var footer = document.getElementById("registration-footer");
    var emailRegistration = document.getElementById("email-registration");
    var upArrow = document.getElementById("reg-up-button");
    var downArrow = document.getElementById("reg-down-button");


    // Adjust the height of the registration footer
    footer.style.height = "38px";

    // Make the email registration section visible
    emailRegistration.style.display = "none";
    upArrow.style.display = "block";
    downArrow.style.display = "none";

}




function pageMeasureBar() {
      let scrollPercentage = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      document.getElementById("progress-bar").style.width = scrollPercentage + "%";
  
      let scrollPosition = window.pageYOffset;
  
      // Show footer after scrolling first 1000px
      if (scrollPosition > 1000) {
          document.getElementById("registration-footer").style.marginBottom = "0px";
      }
  
      // Hide footer when scrolled back up past the first 1000px
      if (scrollPosition <= 1000) {
          document.getElementById("registration-footer").style.marginBottom = "-60px";
      }
  }

  
window.onload = function() {

  }
    
    window.onscroll = function() {scrollFunction(),pageMeasureBar() };

function scrollFunction() {

  if ( document.body.scrollTop > 40 || document.documentElement.scrollTop > 40 ) {
    //AFTERmargin-top: -67px;
    document.getElementById("earthbook-navbar").style.height = "60px";
    document.getElementById("ct-chapter-title").style.fontSize = "1.0em";
    document.getElementById("ct-book-title").style.fontSize = "0.66em";
    document.getElementById("ct-book-title").style.marginTop = "0px";
    document.getElementById("ct-chapter-top").style.marginTop = "-86px";    
    document.getElementById("ct-chap-location").style.display = "none";
    document.getElementById("ct-word-count").style.display = "none";
    document.getElementById("book-header-logo").style.display = "none";
    document.getElementById("ct-chapter-title").style.fontWeight = "bolder";
    document.getElementById("settings-menu").style.opacity = "1";
    document.getElementById("share-menu").style.opacity = "1";
    document.getElementById("ct-chapter-top").style.height = "145px"; 
    document.getElementById("ct-chapt-graphic").style.paddingTop = "50vh"; 

  } else {
    //BEFORE
    document.getElementById("earthbook-navbar").style.height = "50vh";
    document.getElementById("ct-chapter-title").style.fontSize = "";
    document.getElementById("ct-book-title").style.fontSize = "";
    document.getElementById("ct-chap-location").style.display = "block";
    document.getElementById("ct-word-count").style.fontSize = "";
    document.getElementById("ct-book-title").style.marginTop = "10px";
    document.getElementById("ct-chapter-top").style.marginTop = "0px";
    document.getElementById("ct-word-count").style.display = "block";
    //
    document.getElementById("book-header-logo").style.display = "none";
    document.getElementById("settings-menu").style.opacity = "0.1";
    document.getElementById("share-menu").style.opacity = "0.1";
    document.getElementById("ct-chapter-top").style.height = "50vh"; 
    document.getElementById("ct-chapt-graphic").style.paddingTop = "50vh"; 

  }
}
 

function openFootnotes() {
  var w = document.getElementById("footer-reveal-container");
  var x = document.getElementById("footnotes-reveal");
  var y = document.getElementById("footnotes-arrow");
  var z = document.getElementById("footnotes-concealer");

  

    w.style.height = "100%";
    x.style.height = "100%";
    x.style.marginBottom = "230px";
    y.style.background = "url(../icons/up-arrow.svg) no-repeat center";
    y.style.backgroundSize = "contain";
    z.style.opacity = "0";
}


function openFootnotesFooter() {
  var w = document.getElementById("footer-reveal-container");
  var x = document.getElementById("footnotes-reveal");
  var y = document.getElementById("footnotes-arrow");
  var z = document.getElementById("footnotes-concealer");

  


  if (x.style.height === "200px") {
    w.style.height = "100%";
    x.style.height = "100%";
    x.style.marginBottom = "230px";
    y.style.background = "url(../icons/up-arrow.svg) no-repeat center";
    y.style.backgroundSize = "contain";
    z.style.opacity = "0";
    

 
  
  } else {
    w.style.height = "10%";
    x.style.height = "200px";
    x.style.marginBottom = "50px";
    y.style.background = "url(../icons/down-arrow.svg) no-repeat center";
    y.style.backgroundSize = "contain";
    z.style.opacity = "1";
}
}


function openCode() {
  var x = document.getElementById("footer-function-reveal-code");
  var y = document.getElementById("code-down-arrow");
  if (x.style.opacity === "0") {
    x.style.opacity = "1";
    x.style.height = "130px";
    y.style.background = "url(../icons/down-arrow.svg) no-repeat center";
    y.style.backgroundSize = "contain";
  
  } else {
    x.style.opacity = "0";
    x.style.height = "0px";
    y.style.background = "url(../icons/up-arrow.svg) no-repeat center";
    y.style.backgroundSize = "contain";
}
}



function openFooter2() {
  var x = document.getElementById("footer-chapter");
  var z = document.getElementById("footer-arrow");
  if (x.style.marginBottom === "0px") {
    x.style.marginBottom = "145px";
   z.style.background = "url(../icons/up-arrow.svg) no-repeat center";
  z.style.backgroundSize = "contain";
 
  } else {
    x.style.marginBottom = "0px";
  z.style.background = "url(../icons/down-arrow.svg) no-repeat center";
  z.style.backgroundSize = "contain";

}
}


  function closeWelcomeNotice() {
    document.getElementById("chap-notice-text").style.display = "none";
    var noticeDiv = document.getElementById("chap-notice");
    var height = noticeDiv.offsetHeight;
    var intervalId = setInterval(function() {
      height -= 10; // Adjust the decrement value to control the speed of the animation
      noticeDiv.style.height = height + "px";
      if (height <= 0) {
        clearInterval(intervalId);
        noticeDiv.style.display = "none";
        localStorage.setItem("hideNotice", "true"); // Store the choice in localStorage
      }
    }, 10); // Adjust the interval value to control the smoothness of the animation
  }




  /* WELCOME NOTICE for first time visitors */


   // Function to open the welcome notice
   function openWelcomeNotice() {
    // Check if hideNotice is set to true in the browser cache (localStorage)
    const hideNotice = localStorage.getItem("hideNotice");
    if (!hideNotice || hideNotice !== "true") {
      // Set the display property to block to show the notice
      document.getElementById("chap-notice").style.display = "block";

      // Trigger a reflow to force the transition to work
      void document.getElementById("chap-notice").offsetHeight;

      // Set the height property to 'fit-content' to smoothly transition the height
      document.getElementById("chap-notice").style.height = "fit-content";
    }
  }

  // Call the openWelcomeNotice function after 15 seconds of page load
  setTimeout(openWelcomeNotice, 15000);




  window.addEventListener("DOMContentLoaded", function() {
    var hideNotice = localStorage.getItem("hideNotice");
    if (hideNotice === "true") {
      document.getElementById("chap-notice").style.display = "none";
    }
  });




