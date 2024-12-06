function makeTextBigger() {
    alert("Hello, World!");
    var textArea = document.getElementById("textInput");
    textArea.style.fontSize = "24pt";
}

function applyFancyStyles() {
    var textArea = document.getElementById("textInput");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function removeFancyStyles() {
    var textArea = document.getElementById("textInput");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

// Function to handle radio button changes
function handleRadioChange() {
    if (document.getElementById("fancyShmancy").checked) {
        applyFancyStyles();
        alert("Hello, World!");
    } else if (document.getElementById("boringBetty").checked) {
        removeFancyStyles();
        alert("Hello, World!");
    }
}

// Function to uppercase text and add "-Moo" to last word of each sentence
function mooText() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;

    text = text.toUpperCase();
    var parts = text.split(".");
    text = parts.join("-Moo.")

    textArea.value = text;
}

document.addEventListener("DOMContentLoaded", function() {
    // "Bigger!" button
    document.getElementById("biggerBtn").onclick = makeTextBigger;

    // Radio buttons
    var fancyRadio = document.getElementById("fancyShmancy");
    var boringRadio = document.getElementById("boringBetty");

    fancyRadio.onchange = handleRadioChange;
    boringRadio.onchange = handleRadioChange;

    // "Moo" button
    document.getElementById("mooBtn").onclick = mooText;
});
