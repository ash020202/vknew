var username;
var password;

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  
  // Save the username and password to a database or localStorage
  
  document.getElementById("registrationForm").reset();
  showMessage("Registration successful. You can now log in.");
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var loginUsername = document.getElementById("loginUsername").value;
  var loginPassword = document.getElementById("loginPassword").value;
  
  // Check if the username and password match the ones in the database or localStorage
  
  if (loginUsername === username && loginPassword === password) {
    document.getElementById("loginForm").reset();
    showMessage("Login successful!");
    redirectToSuccessPage();
  } else {
    showMessage("Invalid username or password. Please try again.");
  }
});

function redirectToSuccessPage() {
  setTimeout(function() {
    window.location.replace("success.html");
  }, 2000);
}

function showMessage(message) {
  document.getElementById("message").textContent = message;
}
