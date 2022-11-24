const candypiece = document.getElementById("candypiece");
candyPickedup = false;

const rainbow = document.getElementById("rainbow");
rainbowPickedup = false;

const travelButton = document.getElementById("travelButton");

const item2 = document.getElementById("item2");

if (sessionStorage.getItem("randomNumber") != null) {
  candyPickedup = true;
}

if (sessionStorage.getItem("candyPickedup") != null) {
  item1.style.visibility = "visible";
}

rainbow.addEventListener("click", function () {
  if (candyPickedup === true) {
    rainbowPickedup = true;
    item2.style.visibility = "visible";
    travelButton.style.visibility = "visible";
    alert("You can now travel home!");
    sessionStorage.setItem("rainbowPickedup", "true");
  } else {
    alert("You need candy!");
  }
});

if (sessionStorage.getItem("rainbowPickedup") != null) {
  item2.style.visibility = "visible";
  travelButton.style.visibility = "visible";
}

if (sessionStorage.getItem("keyVisible") != null) {
  key.style.visibility = "visible";
}

if (sessionStorage.getItem("keyPickedup") != null) {
  item3.style.visibility = "visible";
}
