document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("container");
  container.addEventListener("click", function () {
    alert("Hola! Soy el div");
  });
  let saludar = this.getElementById("saludar");
  saludar.addEventListener("click", function (e) {
    e.stopPropagation();
    alert("Hola!");
  });
});
