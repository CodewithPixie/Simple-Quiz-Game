let wordsArray = [
 `
  <p id="question">
      <span class="letter-design">A</span>
      <span class="letter-design missing-word">_</span>
      <span class="letter-design">p</span>
      <span class="letter-design">l</span>
      <span class="letter-design missing-word">_</span>
    </p>
`,
`   <p id="question">
      <span class="letter-design">H</span>
      <span class="letter-design missing-word">_</span>
      <span class="letter-design">l</span>
      <span class="letter-design">l</span>
      <span class="letter-design missing-word">_</span>
    </p>
`,
`
  <p id="question">
      <span class="letter-design">W</span>
      <span class="letter-design missing-word">_</span>
      <span class="letter-design">r</span>
      <span class="letter-design">l</span>
      <span class="letter-design missing-word">_</span>
    </p>
`
];


let correctWords = [
  "Broke","Apple","Hello","World"
];

let currentIndex = 0;

function submitButton() {
  let inputText = document.getElementById('input').value;

  if (
    inputText === correctWords[0] ||
    inputText === correctWords[1] ||
    inputText === correctWords[2] ||
    inputText === correctWords[3]
  ) {
      if (currentIndex < wordsArray.length) {
        document.getElementById('question').innerHTML = wordsArray[currentIndex];
        currentIndex++;
      } 
    
    document.getElementById('output').innerText = "Correct";
    document.getElementById('input').value = "";
  
  } else {
     document.getElementById('output').innerText = "Wrong";
     document.getElementById('input').value = ""; 
  }
}
