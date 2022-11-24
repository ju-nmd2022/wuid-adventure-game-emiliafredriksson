const coin = document.getElementById("coin");
const candypiece = document.getElementById("candypiece");
let candy = {
  candyPickedup: false,
};

const rainbow = document.getElementById("rainbow");
let rainbowItem = {
  rainbowPickedup: false,
};

const travelButton = document.getElementById("travelButton");

const key = document.getElementById("key");
let keys = {
  keyPickedup: false,
};

const friend = document.getElementById("friend");
let talk = {
  talkedToFriend: false,
};

const door = document.getElementById("door");

coin.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 2);
  console.log(randomNumber);
  if (randomNumber === 0) {
    alert("Try again!");
  } else if (randomNumber === 1) {
    alert("Congratulation, you can now pick up the candy!");
    candy.candyPickedup = true;
  }
});

candypiece.addEventListener("click", function () {
  if (candyPickedup === true) {
    // move the candypiece to pickedup field
  } else {
    alert("Flip the coin!");
  }
});

rainbow.addEventListener("click", function () {
  if (candyPickedup === true) {
    rainbowItem.rainbowPickedup = true;
    // move rainbow to pickedup field
  } else {
    alert("You need candy!");
  }
});

travelButton.addEventListener("click", function () {
  if (rainbowPickedup === true) {
    alert("You can now travel home!");
    // make the button work, how???
  } else {
    alert("You need the rainbow to travel!");
  }
});

friend.addEventListener("click", function () {
  alert("Hi, welcome home! You can now pick up the key!");
  talk.talkedToFriend = true;
});

key.addEventListener("click", function () {
  if (talkedToFriend === true) {
    alert("Go unlock the door!");
    keys.keyPickedup = true;
    //move the key to pickedup field
  } else {
    alert("Talk to your friend!");
  }
});

door.addEventListener("click", function () {
  if (keyPickedup === true) {
    alert("Mission accomplicshed!");
  } else {
    alert("You need the key to unlock this door!");
  }
});
