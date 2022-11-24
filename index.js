const candypiece = document.getElementById("candypiece");
candyPickedup = false;

const rainbow = document.getElementById("rainbow");
rainbowPickedup = false;

const travelButton = document.getElementById("travelButton");

rainbow.addEventListener("click", function () {
  if (candyPickedup === true) {
    rainbowPickedup = true;
    rainbow.style.top = "300px";
    rainbow.style.padding = "10px";
  } else {
    alert("You need candy!");
  }
});

travelButton.addEventListener("click", function () {
  if (rainbowPickedup === true) {
    alert("You can now travel home!");
    travelButton.style.visibility = "visible";
  } else {
    alert("You need the rainbow to travel!");
  }
});

if (sessionStorage.getItem("candyPickedup") != null) {
}
