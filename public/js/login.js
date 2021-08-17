const loginFormHandler = async (event) => {
  event.preventDefault();


  const email = document.getElementById('userEmail').value.trim();
  const password = document.getElementById('userPassword').value.trim();

  if (email && password) {

    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

      document.location.replace('/profile');
    } else {
      alert('Incorrect email or password. Please try again!')
      .then(document.location.reload);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#userName').value.trim();
  const email = document.querySelector('#emailSignup').value.trim();
  const password = document.querySelector('#passwordSignup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      console.log(response);
      alert('Must be a real email or password must be 6 characters long!');
      
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
