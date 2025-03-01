// SheetDB API link
const apiUrl = 'https://sheetdb.io/api/v1/sj8rrqwic29ju'; // SheetDB API key replace karna hoga

// Data fetch karne ka function
fetch(apiUrl)
  .then(response => response.json())  // Response ko JSON me convert karenge
  .then(data => {
    console.log(data); // Data ko console me check karne ke liye
    // Ab data ko display karte hain HTML me
    const messagesContainer = document.getElementById('messagesContainer');
    
    data.forEach(item => {
      const messageElement = document.createElement('div');
      messageElement.innerHTML = `
        <h3>${item.name}</h3>
        <p><strong>Email:</strong> ${item.email}</p>
        <p><strong>Message:</strong> ${item.message}</p>
        <hr>
      `;
      messagesContainer.appendChild(messageElement);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


// Form submit ka function
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
    
    // Alert message dikhaenge jab form submit ho jayega
    alert('Your message has been sent!');
    
    // Form ko clear karenge (input fields ko reset karenge)
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
    // Optional: Agar tum chahti ho ki form ke baad user kisi aur page par chala jaye, to redirect kar sakti ho
    // window.location.href = "thankyou.html"; // Redirect to "thankyou.html" page
    
    // Contact details ko fetch karne ke liye page ko dobara reload karenge (ya fir "messagesContainer" ko update karenge)
    window.location.reload();  // This will refresh the page and clear the message list
  })
  .catch(error => {
    console.error('Error submitting message:', error);
    alert('There was an error sending your message.');
  });
});
