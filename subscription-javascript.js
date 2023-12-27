


function invite2Register() {
    const earthenRegistrationData = localStorage.getItem('earthenRegistration');
    
    if (!earthenRegistrationData) {
        updateShowCounter();

        let showCounter = parseInt(localStorage.getItem('showCounter'));
        let delayDuration;

        // Determine the delay duration based on showCounter value
        switch (showCounter) {
            case 1:
            case 2:
                delayDuration = 300000; // 5 minutes
                break;
            case 3:
                delayDuration = 360000; // 6 minutes
                break;
            case 4:
                delayDuration = 420000; // 7 minutes
                break;
            case 5:
                delayDuration = 480000; // 8 minutes
                break;
            default:
                delayDuration = 240000; // 4 minutes (default for new or > 5)
        }

        // Wait for the determined duration before triggering sendUpRegistration
        setTimeout(() => {
            sendUpRegistration();
        }, delayDuration);
    }
}


function updateShowCounter() {
    let showCounter = localStorage.getItem('showCounter');
    showCounter = showCounter ? parseInt(showCounter) + 1 : 1;
    localStorage.setItem('showCounter', showCounter);
}

function sendUpRegistration() {
    console.log("sendUpRegistration function triggered");
    // Add the logic for sendUpRegistration here
}

// ... (Any other function definitions)

// Run invite2Register on page load
document.addEventListener('DOMContentLoaded', invite2Register);






function sendUpRegistration() {
   
        var footer = document.getElementById("registration-footer");
        var emailRegistration = document.getElementById("email-registration");
        var upArrow = document.getElementById("reg-up-button");
        var downArrow = document.getElementById("reg-down-button");

        // Adjust the height of the registration footer
        footer.style.height = "55vh";

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
    footer.style.height = "77px";

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
      if (scrollPosition > 800) {
          document.getElementById("registration-footer").style.marginBottom = "0px";
      }
  
      // Hide footer when scrolled back up past the first 1000px
      if (scrollPosition <= 800) {
          document.getElementById("registration-footer").style.marginBottom = "-60px";
      }
      if ((window.innerHeight + scrollPosition) >= document.body.offsetHeight) {
        document.getElementById("registration-footer").style.marginBottom = "-60px";
    }
  }
