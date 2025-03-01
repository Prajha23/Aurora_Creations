// SheetDB API link
const apiUrl = 'https://sheetdb.io/api/v1/sj8rrqwic29ju'; // SheetDB API key replace karna hoga

// Data submit hone ke baad, message ko hide karna
document.getElementById('submitBtn').addEventListener('click', function(event) {
  event.preventDefault();  // Form ko default submit hone se rokega

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const formData = {
    name: name,
    email: email,
    message: message
  };

  // Data ko SheetDB me POST karna
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Message sent successfully:', data);
    alert('Your message has been sent!'); // User ko popup
    // Form ko reset ya hide kar dena
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  })
  .catch(error => {
    console.error('Error submitting message:', error);
    alert('There was an error sending your message.');
  });
});
