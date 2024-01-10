//EventListerner to button clicks
var num = document.querySelectorAll("button").length;

for (var i = 0; i < num; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var letter = this.textContent;
        sounds(letter);
        animation(letter);
    });
}

// EventListerner to keypress

document.addEventListener("keypress", function(event){
    sounds(event.key);
    animation(event.key)
});

// function to play the corresponding sound
function sounds(letter){
    switch (letter) {
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "f":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "g":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "h":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        default: console.log(letter);
            break;
    }
}

function animation(letter){
    var activeKey =  document.querySelector("." + letter);
    activeKey.classList.add("pressed");

    setTimeout(function(){
    activeKey.classList.remove("pressed");
    }, 100);
}