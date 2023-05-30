var dropdown = document.getElementById("dropdown");
var dropdownMenu = document.getElementById("dropdownMenu");

dropdown.addEventListener("click", function() {
  dropdownMenu.classList.toggle("show");
});

dropdown.addEventListener("mouseleave", function() {
  dropdownMenu.classList.remove("show");
});
