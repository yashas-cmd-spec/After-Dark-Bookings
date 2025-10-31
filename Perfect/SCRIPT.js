
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const eventValue = document.getElementById('event').value.trim();

  // Simple validation
  if (fullName === '' || email === '' || eventValue === '') {
    alert('Please fill in all fields.');

    return;
  }

  // Display confirmation message
  document.getElementById('registrationForm').style.display = 'none';
  document.getElementById('confirmation').style.display = 'block';
});
