// create the form element
const form = document.createElement('form');
form.id = 'registrationForm';

// create the name field
const nameLabel = document.createElement('label');
nameLabel.htmlFor = 'name';
nameLabel.innerHTML = 'Name:';
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';
nameInput.name = 'name';

// create the email field
const emailLabel = document.createElement('label');
emailLabel.htmlFor = 'email';
emailLabel.innerHTML = 'Email:';
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.name = 'email';

// create the submit button
const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Submit';

// append the form fields to the form element
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(submitButton);

// add the form to the page
document.body.appendChild(form);

// handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from being submitted

  // collect the form data
  const data = {
    name: form.elements.name.value,
    email: form.elements.email.value,
  };

  // submit the form data to the server
  fetch('/register', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(result => {
    // handle the response from the server
    if (result.success) {
      alert('Registration successful!');
    } else {
      alert('Registration failed: ' + result.error);
    }
  });
});