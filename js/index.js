// Your code goes here
let navHover = document.querySelectorAll(".nav-link")
console.log(navHover)
navHover.forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    item.style.backgroundColor = "#666";
    item.style.color = "white"
  });
  item.addEventListener("mouseleave", (event) => {
    item.style.backgroundColor = "white";
    item.style.color = "black"
  });
});

// Seperator

let busImage = document.querySelector(".intro img")
console.log(busImage)
window.addEventListener("keydown", (event) => {
  let wKey = 87;
  let sKey = 83;
  if (event.keyCode == wKey) {
    busImage.style.border = "2px dashed silver"
  } else if (event.keyCode == sKey) {
    busImage.style.border = "0px solid white"
  }
  console.log(event)
});


// Seperator


busImage.addEventListener('wheel', (event) => {
  console.log("you've spun the wheel")
});


// Seperator


coolImage = document.querySelector(".img-content img")
coolImage.addEventListener('click', (event) => {
  console.log("nav wheel ooo cool");
});


// Seperator


coolImage.addEventListener('dbclick', (event) => {
  coolImage.style.border = "2px dashed silver"
});


// Seperator

let veryCoolImage = document.querySelector('.inverse-content .img-content img')
veryCoolImage.addEventListener('mousemove', (event) => {
  console.log(veryCoolImage)
  alert("stop it pls")
})


// Seperator


let coolText = document.querySelector(".inverse-content .text-content h2")
coolText.addEventListener('copy', (event) => {
  console.log("bro u copied that text cringe");
})


// Seperator


coolText.addEventListener('cut', (event) => {
  console.log("bro u cut that text u can't even cut it bro cringe");
})


// Seperator


coolText.addEventListener('paste', (event) => {
  console.log("bro u can't paste text here bro cringe omg");
})

