var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var reset = document.querySelector("#reset");
var gameOver = false;

p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === maxScore) {
            p1Display.classList.add("max");
            gameOver = true;
        }
    }
});

p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        if (p2Score === maxScore) {
            p2Display.classList.add("max");
            gameOver = true;
        }
    }
});

reset.addEventListener("click", function () {
    gameOver = false;
    p1Score = p2Score = 0;
    p1Display.textContent = p2Display.textContent = "0";
    removeMax(p1Display, p2Display);
});

document.querySelector("input[type='number']").addEventListener("change", function(){
    maxScore = Number(document.querySelector("input[type='number']").value);
    document.getElementById("maxDisplay").textContent = maxScore;
    if(p1Score < maxScore && p2Score < maxScore){
        gameOver = false;
        removeMax(p1Display, p2Display);
    }
    else {
        if (p1Score > p2Score){
            p1Display.classList.add("max");
        } else if (p2Score > p1Score) {
            p2Display.classList.add("max");
        } else {
            addMax(p1Display, p2Display);
        }
        gameOver = true;
    }
        
});

function removeMax (obj1, obj2) {
    obj1.classList.remove("max");
    obj2.classList.remove("max");
}
function addMax (obj1, obj2) {
    obj1.classList.add("max");
    obj2.classList.add("max");
}
