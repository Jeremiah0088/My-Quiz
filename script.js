let button = document.querySelector("button");
let q1Button = document.querySelector(".q1-button");
let q2Button = document.querySelector(".q2-button");
button.onclick = function() {
    let q1 = document.querySelector(".q1").value;
    let q2 = document.querySelector(".q2").value;

};
q1Button.onclick = (function() {
    let q1Input = document.querySelector(".q1").value;
    if (q1Input > 10) {
        document.querySelector(".result").innerHTML = q1Input + " wow thats a lot!";
        // document.querySelector(".result").style.color = "green";

    } else {
        document.querySelector(".result").innerHTML = "Try again";
        document.querySelector(".result").style.color = "red";
    }
});

q2Button.onclick = (function() {
    let q2Input = document.querySelector(".q2").value;
    if (q2Input === "") {
        document.querySelector(".result").innerHTML = "correct!";
        // document.querySelector(".result").style.color = "green";

    } else {
        document.querySelector(".result").innerHTML = "Try again";
        document.querySelector(".result").style.color = "red";
    }
});