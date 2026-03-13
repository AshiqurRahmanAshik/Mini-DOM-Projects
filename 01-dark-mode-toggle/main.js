const btn = document.getElementById("toggleButton");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btn.innerText = "Toggle Light Mode";
});
