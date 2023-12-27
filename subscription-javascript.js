

/* ---------------------------


SUBSCRIPTION SYSTEM

-----------------------------*/


function checkRegistrationStatus() {
    const earthenRegistration = localStorage.getItem('earthenRegistration');
  
    // Check if the token exists
    if (earthenRegistration) {
        // Hide .reg-top-section
        const regTopSection = document.querySelector('.reg-top-section');
        if (regTopSection) {
            regTopSection.style.display = 'none';
        }
  
        // Set the margin-top of .registration-footer-holder to 70px
        const registrationFooterHolder = document.querySelector('.registration-footer-holder');
        if (registrationFooterHolder) {
            registrationFooterHolder.style.marginTop = '70px';
        }
    }
  }
  
  
  
  
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
      submitButton.value = 'Sign up';
  
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
          regCompleteText.innerHTML = "Processing registration..."; // Set the text
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
      submitButton.value = '⌛';
  
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
          // Check if the response status is 200
          if (response.status === 200) {
              // Handle successful response (text response)
              return response.text();
          } else {
              // Handle non-200 responses as errors
              return response.text().then(text => {
                  throw new Error(`HTTP error! status: ${response.status}, response: ${text}`);
              });
          }
      })
      .then(text => {
          // Log the successful text response
          console.log('Success:', text);
          updateUIOnSuccess(); // Update UI for success
      })
      .catch((error) => {
          // Log and handle errors
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
  
      // Set the onclick event of reg-status-icon to trigger sendDownRegistration()
      regStatusIcon.onclick = function() {
          sendDownRegistration();
      };
  }
  
  
  
  function updateUIOnError() {
      // Get the elements by their IDs
      const regStatus = document.getElementById('reg-status');
      const regStatusIcon = document.getElementById('reg-status-icon');
  
      // Update reg-status text and color
      regStatus.innerHTML = "Registration failed.";
      regStatus.style.color = 'red';
  
      // Update reg-status-icon to a cross mark
      regStatusIcon.value = '❌';
  }
  

  
  
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
