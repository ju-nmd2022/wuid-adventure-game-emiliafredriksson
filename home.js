const door = document.getElementById("door");

if (sessionStorage.getItem("randomNumber") != null) {
  candyPickedup = true;
}

if (sessionStorage.getItem("candyPickedup") != null) {
  item1.style.visibility = "visible";
}

if (sessionStorage.getItem("rainbowPickedup") != null) {
  item2.style.visibility = "visible";
}

if (sessionStorage.getItem("keyVisible") != null) {
  key.style.visibility = "visible";
}

if (sessionStorage.getItem("keyPickedup") != null) {
  item3.style.visibility = "visible";
  keyPickedup = true;
}

door.addEventListener("click", function () {
  if (keyPickedup === true) {
    alert("Mission accomplicshed!");
  }
});
