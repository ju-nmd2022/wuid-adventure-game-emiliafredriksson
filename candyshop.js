const coin = document.getElementById("coin");
const candypiece = document.getElementById("candypiece");
candyPickedup = false;

// const rainbow = document.getElementById("rainbow");
// rainbowPickedup = false;

// const travelButton = document.getElementById("travelButton");

// const key = document.getElementById("key");
// keyPickedup = false;

// const friend = document.getElementById("friend");
// talkedToFriend = false;

// const door = document.getElementById("door");

coin.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 2);
  console.log(randomNumber);
  if (randomNumber === 0) {
    alert("Try again!");
  } else if (randomNumber === 1) {
    alert("Congratulation, you can now pick up the candy!");
    candyPickedup = true;
    sessionStorage.setItem("randomNumber", "win");
    sessionStorage.getItem("randomNumber");
    console.log(sessionStorage.getItem("randomNumber"));
  }
});

candypiece.addEventListener("click", function () {
  if (candyPickedup === true) {
    candypiece.style.top = "300px";
    candypiece.style.padding = "10px";
    sessionStorage.setItem("candyPickedup", "true");
    sessionStorage.getItem("candyPickedup");
    console.log(sessionStorage.getItem("candyPickedup"));
  } else {
    alert("Flip the coin!");
  }
});

if (sessionStorage.getItem("candyPickedup") != null);

// rainbow.addEventListener("click", function () {
//   if (candyPickedup === true) {
//     rainbowPickedup = true;
//     rainbow.style.top = "300px";
//     rainbow.style.padding = "10px";
//   } else {
//     alert("You need candy!");
//   }
// });

// travelButton.addEventListener("click", function () {
//   if (rainbowPickedup === true) {
//     alert("You can now travel home!");
//     travelButton.style.visibility = "visible";
//   } else {
//     alert("You need the rainbow to travel!");
//   }
// });

// friend.addEventListener("click", function () {
//   alert("Hi, welcome home! You can now pick up the key!");
//   talkedToFriend = true;
// });

// key.addEventListener("click", function () {
//   if (talkedToFriend === true) {
//     alert("Go unlock the door!");
//     keyPickedup = true;
//     key.style.top = "300px";
//     key.style.padding = "10px";
//   } else {
//     alert("Talk to your friend!");
//   }
// });

// door.addEventListener("click", function () {
//   if (keyPickedup === true) {
//     alert("Mission accomplicshed!");
//   } else {
//     alert("You need the key to unlock this door!");
//   }
// });
