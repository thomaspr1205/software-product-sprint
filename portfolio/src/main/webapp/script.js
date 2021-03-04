// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
/*================== index ======================== */
function nameClick() {
    document.getElementById("name").innerHTML = "a Computer Science student";
    picture();
}
function picture(){
    document.getElementById("picture").style.display = "block";
    newPage();
}
function newPage(){
    document.getElementById("newPage").style.display = "block";
}
function onClickGithub() {
  window.open("https://github.com/thomaspr1205");
}
function onClickLinkedin() {
  window.open("https://www.linkedin.com/in/thomaspenar");
}

  /*================== information ======================== */
   function onClickExperience1() {
    document.getElementById("experience1").style.display = "block";
}
 function onClickExperience2() {
   document.getElementById("experience2").style.display = "block";
}
  function onClickExperience3() {
     document.getElementById("experience3").style.display = "block";

}
  function onClickProject1() {
    document.getElementById("project1").style.display = "block";
}

 function onClickProject2() {
    document.getElementById("project2").style.display = "block";
}

 function onClickProject3() {
    document.getElementById("project3").style.display = "block";
}  
  function onClickShowBlogSolution() {
    document.getElementById("blog-solution").style.display = "block";
}
async function showRandomQuestion() {
  const responseFromServer = await fetch('/chat');
  const questionList = await responseFromServer.json();

  const questionsContainer = document.getElementById('question-container');
  randomIndex = Math.floor(Math.random() * 9) + 0;  
  randomQuestion = questionList[randomIndex];    
  questionsContainer.innerText = randomQuestion;
}
