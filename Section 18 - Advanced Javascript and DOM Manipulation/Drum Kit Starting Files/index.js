// Adding Event listner which will work when the event happens like click
// event listner takes two arguments 
// type,what to do(can be a function call or anonymous function)


// 1st: Passing the gotClicked function to event listner and event listner type is click when button will clicked
// the function will work
// if we pass gotClicked() instead of gotClicked then without even clicking button the event listner works
// gotClicked function called when setting eventListner so be causious
// document.querySelector("button").addEventListener("click",gotClicked);
// function gotClicked() {
//     alert('I got Cliked');
// }


// // 2nd: Passing anonymous function(function with no name) inside the eventListner as argument
// document.querySelector("button").addEventListener("click",function () {
//     alert("I got Clicked");
// });


// var numOfButtons = document.querySelectorAll(".drum").length;

// // to add same eventlistner on all the buttons we first have to travserse through each of the button
// // thats why we will use for loop and call event listner inside it

// for (let index = 0; index < numOfButtons; index++) {
//     // calling our event Listner
//     document.querySelectorAll("button")[index].addEventListener("click",function () {
//         // all the instructions goes here
//         alert(`Button ${index} got clicked`); 
//     });
// }


// using foreach instead of for loop
// document.querySelectorAll(".drum").forEach((button, index) => {
//   button.addEventListener("click", function () {
//     alert(`Button ${index} got clicked`);
//   });
// });


// Playing sound when button get clicked
// let drums = document.querySelectorAll(".drum");
// drums.forEach(drum => {
//   drum.addEventListener("click",function () {
//     let audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
//   })
// });



// Detecting Button Press
let buttons = document.querySelectorAll(".drum");
buttons.forEach(btn => {
  btn.addEventListener("click",function () {
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});

// Detecting keyboard press
document.addEventListener("keypress",function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});


// Play Sound
function playSound(key) {
      switch (key) {
      case "w":
        let tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        let tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        let tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        let tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        let snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        let crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        let kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
    
      default:
        console.log(buttonInnerHtml);
        break;
    }
}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey); //.w if w key pressed
  activeButton.classList.add("pressed"); //this will add the class e.g, if w button pressed it appends pressed class inside .w button

  // this will pressed class after some seconds
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}