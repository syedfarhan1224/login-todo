document.getElementById("to-admin").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("user-login").style.display = "none";
  document.getElementById("admin-login").style.display = "block";
});

document.getElementById("to-user").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("admin-login").style.display = "none";
  document.getElementById("user-login").style.display = "block";
});
