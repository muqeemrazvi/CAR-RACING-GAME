var bluecar = document.getElementById("bluecar");
var racecar = document.getElementById("racecar");
var result = document.getElementById("result")
const score = document.getElementById("score")
var game = document.getElementById("game");
var cbtn =document.getElementById("cbtn");
var audio= new Audio("jumpsound.mp3");
var lbtn=document.getElementById("lbtn");
var rbtn=document.getElementById("rbtn");
var counter = 0;









bluecar.addEventListener("animationiteration", function () {
    var random = ((Math.floor(Math.random() * 3)) * 130)
    bluecar.style.left = random + "px";
    counter++;
})

//for computer ......>

// window.addEventListener("keydown", function (e) {
//     if (e.keyCode == "39") {
//         var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
//         if (racecarleft < 260) {
//             racecar.style.left = (racecarleft + 130) + "px"
//         }
//         audio.play()

//     };
//     if (e.keyCode == "37") {
//         var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
//         if (racecarleft > 0) {
//             racecar.style.left = (racecarleft - 130) + "px"
//             audio.play()

//         }
//     }
// })



// for mobiles .....>>

rbtn.addEventListener('click', ()=>{
    var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
        if (racecarleft < 260) {
            racecar.style.left = (racecarleft + 130) + "px"
        }
        audio.play()

    })

lbtn.addEventListener('click',()=>{
    var racecarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
    if (racecarleft > 0) {
        racecar.style.left = (racecarleft - 130) + "px"
    }
        audio.play()

    })

setInterval(function Gameover() {
    var blueCarleft = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"))
    var raceCarleft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
    var blueCartop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"))
    if ((blueCarleft == raceCarleft) && (blueCartop > 250) && (blueCartop < 450)) {
        result.style.display = "block";
        game.style.display = "none";
cbtn.style.display = "none"
        score.innerHTML = `score : ${counter}`;
        counter = 0;
    }
}, 10)