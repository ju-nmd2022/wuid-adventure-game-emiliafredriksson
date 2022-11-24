const door = document.getElementById("door");

door.addEventListener("click", function () {
  if (keyPickedup === true) {
    alert("Mission accomplicshed!");
  } else {
    alert("You need the key to unlock this door!");
  }
});
