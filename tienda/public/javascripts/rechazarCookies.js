var googleButton = document.getElementById('rechazarCookies');

  // Add a click event listener to the button
  googleButton.addEventListener('click', function(e) {
    e.preventDefault();
    // Redirect to www.google.es
    window.location.href = 'http://www.google.es';
  });