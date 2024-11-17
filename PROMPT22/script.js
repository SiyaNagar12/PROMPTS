let currentStep = 1;

// Show the current step and hide the others
function showStep(step) {
  const steps = document.querySelectorAll('.form-step');
  steps.forEach((stepElement) => {
    stepElement.classList.remove('active');
  });
  document.getElementById(`step-${step}`).classList.add('active');
}

// Move to the next step
function nextStep(step) {
  const form = document.getElementById('event-form');

  // Step 3: Confirmation
  if (step === 3) {
    const fullName = form['full-name'].value;
    const email = form['email'].value;
    const event = form['event'].value;

    document.getElementById('confirmation-details').innerHTML = `
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Event:</strong> ${event}</p>
    `;
  }

  currentStep = step;
  showStep(step);
}

// Go to the previous step
function prevStep(step) {
  currentStep = step;
  showStep(step);
}

// Initialize the form to show the first step
showStep(currentStep);
