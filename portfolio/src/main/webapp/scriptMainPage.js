function onClickGithub() {
    window.open("https://github.com/thomaspr1205");
}

function onClickLinkedin() {
    window.open("https://www.linkedin.com/in/thomaspenar");
}

function onClickProject3() {
    document.getElementById("project3").style.display = "block";
}

async function showRandomQuestion() {
    const responseFromServer = await fetch('/chat');
    const questionList = await responseFromServer.json();

    const questionsContainer = document.getElementById('question-container');
    randomIndex = Math.floor(Math.random() * 9) + 0;
    randomQuestion = questionList[randomIndex];
    questionsContainer.innerText = randomQuestion;
}

// Accordions
function myAccFunc(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
//slideshow
var slideIndex = 1;

function plusDivs(n) {
    slideIndex = slideIndex + n;
    showDivs(slideIndex);
}

function showDivs(n) {
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
