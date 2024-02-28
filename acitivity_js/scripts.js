document.getElementById("am").addEventListener("click", function () {
  let show = document.getElementById("input-name").value;

  document.getElementById("greet").innerText = "Good Morning " + show;
});

document.getElementById("pm").addEventListener("click", function () {
  let show = document.getElementById("input-name").value;

  document.getElementById("greet").innerText = "Good Afternoon " + show;
});

document.getElementById("eve").addEventListener("click", function () {
  let show = document.getElementById("input-name").value;

  document.getElementById("greet").innerText = "Good Evening " + show;
});
