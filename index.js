document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let username = document.getElementById("usernameInput").value;
  // Here you can add code to handle the login process
  // For now, let's simulate a successful login and redirect to the homepage
  if (username) {
    window.location.href = "homepage.html";
  }
});