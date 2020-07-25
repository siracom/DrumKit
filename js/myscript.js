
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
});


function makeSound(key) {

  switch (key) {
    case "w":
        var snare = new Audio("G:/web design/DrumKit/sounds/snare.mp3");
        snare.play();
      break;

    case "a":
        var crash = new Audio("G:/web design/DrumKit/sounds/crash.mp3");
        crash.play();
      break;

    case "s":
        var tom1 = new Audio("G:/web design/DrumKit/sounds/tom-1.mp3");
        tom1.play();
      break;

    case "d":
        var tom2 = new Audio("G:/web design/DrumKit/sounds/tom-2.mp3");
        tom2.play();
      break;

    case "j":
        var tom3 = new Audio("G:/web design/DrumKit/sounds/tom-3.mp3");
        tom3.play();
      break;

    case "k":
        var tom4 = new Audio("G:/web design/DrumKit/sounds/tom-4.mp3");
        tom4.play();
      break;

    case "l":
        var kick = new Audio("G:/web design/DrumKit/sounds/kick-bass.mp3");
        kick.play();
      break;

    default:
        console.log("something wrong with switch");
  }
}
