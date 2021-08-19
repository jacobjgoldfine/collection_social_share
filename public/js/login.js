const loginFormHandler = async (event) => {
  event.preventDefault();


  const email = document.querySelector('#userEmail').value.trim();
  const password = document.querySelector('#userPassword').value.trim();

  if (email && password) {

    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Incorrect email or password. Please try again!')
      console.log(response.body);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#userName').value.trim();
  const email = document.querySelector('#emailSignup').value.trim();
  const password = document.querySelector('#passwordSignup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      console.log(response);
      alert('Must be a real email or password must be 6+ characters long!');
      
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
