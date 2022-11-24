const coin = document.getElementById("coin");
const candypiece = document.getElementById("candypiece");
candyPickedup = false;
const item1 = document.getElementById("item1");

coin.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 2);
  console.log(randomNumber);
  if (randomNumber === 0) {
    alert("Try again!");
  } else if (randomNumber === 1) {
    alert("Congratulation, you can now pick up the candy!");
    candyPickedup = true;
    sessionStorage.setItem("randomNumber", "win");
  }
});

if (sessionStorage.getItem("randomNumber") != null) {
  candyPickedup = true;
}

candypiece.addEventListener("click", function () {
  if (candyPickedup === true) {
    item1.style.visibility = "visible";
    sessionStorage.setItem("candyPickedup", "true");
  } else {
    alert("Flip the coin!");
  }
});

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
}
