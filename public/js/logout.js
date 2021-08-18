const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    window.alert("logging out,")
    document.location.replace('/login');
  } else {
    alert(statusText);
  }
};

document.getElementById('logout').addEventListener('click', logout);
