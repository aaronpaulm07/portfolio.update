document.querySelector(".menu").addEventListener("click", function () {
  console.log("menu clicked");
  var dropdown = document.querySelector(".dropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});
