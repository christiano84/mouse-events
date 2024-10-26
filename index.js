// eventListener = listen for specific events to create interactive web pages
// 
// events: cancelIdleCallback, mouseover, mouseout
// .addEventlistener(click, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "OUCH! 🤕";
});

myButton.addEventListener("mouseover", event => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Don't do it! 😯";
});

myButton.addEventListener("mouseout", event => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "Click Me 😊";
})

// event.target.style.backgroundColor = "tomato";
// event.target.textContent = "OUCH! 😟";

// function changeColor(event) {
//   //   event.target.style.backgroundColor = "tomato";
//   //   event.target.textContent = "OUCH! 😟";
//   // }