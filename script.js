alert("Welcome to my portfolio!");

const btnChange = document.getElementById("btn-change-text");
const dynamicText = document.getElementById("dynamic-text");

const phrases = [
    "I am passionate about technology and video games!",
    "I love learning new things every day.",
    "My favorite language right now is Python.",
    "I enjoy building projects that look great and work well."
];

let current = 0;

btnChange.addEventListener("click", function() {
    current = current + 1;
    if (current >= phrases.length) {
        current = 0;
    }
    dynamicText.textContent = phrases[current];
});

const btnSeeMore = document.getElementById("btn-see-more");
const hiddenContent = document.getElementById("hidden-content");

btnSeeMore.addEventListener("click", function() {
    if (hiddenContent.classList.contains("visible")) {
        hiddenContent.classList.remove("visible");
        btnSeeMore.textContent = "See more about me";
    } else {
        hiddenContent.classList.add("visible");
        btnSeeMore.textContent = "See less";
    }
});