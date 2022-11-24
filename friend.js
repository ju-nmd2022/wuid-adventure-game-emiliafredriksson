const key = document.getElementById("key");
keyPickedup = false;

const friend = document.getElementById("friend");
talkedToFriend = false;

friend.addEventListener("click", function () {
  alert("Hi, welcome home! You can now pick up the key!");
  talkedToFriend = true;
});

key.addEventListener("click", function () {
  if (talkedToFriend === true) {
    alert("Go unlock the door!");
    keyPickedup = true;
    key.style.top = "300px";
    key.style.padding = "10px";
  } else {
    alert("Talk to your friend!");
  }
});
