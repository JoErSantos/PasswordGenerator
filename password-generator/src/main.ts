import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setElements } from './passwordGenerator.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="main-container">
      <h1>Password Generator</h1>
      <div class="password-container">
        <input type="text" class="passbox" id="passbox" disabled>
        <span class="material-icons" id="copyIcon">content_copy</span>
      </div>
      <div class="bar-container">
        <div id="bar" class="bar"></div>
      </div>
      <div class="length-container">
        <input type="range" id="password-length" class="password-length" min="4" max="25" value="6" />
        <div class="label-container length-label">
          <label for="password-length">Password Length</label>
          <span id="length"> 6 </span>
        </div>
      </div>   
      <div class="password-option-container">
        <div class="label-container">
          <label for="lowcase-check">Include Lowercase Letters (a-z)</label>
          <input type="checkbox" id="lowcase-check" name="include-in-password" value="a-z" />
        </div>
        <div class="label-container">
          <label for="uppcase-check">Include Uppercase Letters (A-Z)</label>
          <input type="checkbox" id="uppcase-check" name="include-in-password" value="A-Z" />
        </div>
        <div class="label-container">
          <label for="number-check">Include Numbers (0-9)</label>
          <input type="checkbox" id="number-check" name="include-in-password" value="0-9" />
        </div>
        <div class="label-container">
          <label for="symbols-check">Include Symbols (@-*)</label>
          <input type="checkbox" id="symbols-check" name="include-in-password" value="@-*" />
        </div>
      </div>
      <input type="button" id="generate-password-btn" value="Generate Password">
    </div>
  </div>
`

setElements(document.querySelector("#password-length")!,document.querySelector("#length")!,
  document.querySelector("#lowcase-check")!,document.querySelector("#uppcase-check")!,
  document.querySelector("#number-check")!,document.querySelector("#symbols-check")!,
  document.querySelector("#passbox")!,document.querySelector("#generate-password-btn")!,document.querySelector("#bar")!,
  document.querySelector("#copyIcon")!)

//copyIcon