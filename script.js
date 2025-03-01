document.querySelector('#contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting normally

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const formData = {
    name: name,
    email: email,
    message: message
  };

  fetch('https://sheetdb.io/api/v1/sj8rrqwic29ju', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    alert('Message sent!');
  })
  .catch(error => {
    alert('Error: ' + error.message);
  });
});
