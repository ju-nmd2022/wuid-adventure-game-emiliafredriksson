const key = document.getElementById("key");
keyPickedup = false;

const friend = document.getElementById("friend");
talkedToFriend = false;

const item3 = document.getElementById("item3");

if (sessionStorage.getItem("randomNumber") != null) {
  candyPickedup = true;
}

if (sessionStorage.getItem("candyPickedup") != null) {
  item1.style.visibility = "visible";
}

if (sessionStorage.getItem("rainbowPickedup") != null) {
  item2.style.visibility = "visible";
}

friend.addEventListener("click", function () {
  alert("Hi, welcome home! You can now pick up the key!");
  talkedToFriend = true;
  key.style.visibility = "visible";
  sessionStorage.setItem("keyPickedup", "true");
});

if (sessionStorage.getItem("keyVisible") != null) {
  key.style.visibility = "visible";
}

key.addEventListener("click", function () {
  if (talkedToFriend === true) {
    alert("Go unlock the door!");
    keyPickedup = true;
    item3.style.visibility = "visible";
    sessionStorage.setItem("keyPickedup", "true");
  }
});

if (sessionStorage.getItem("keyPickedup") != null) {
  item3.style.visibility = "visible";
}
