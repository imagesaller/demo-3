document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let username = document.getElementById("usernameInput").value;
  if (username) {
    window.location.href = "homepage.html";
  }
});