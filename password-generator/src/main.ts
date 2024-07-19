import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="main-container">
      <h1>Password Generator</h1>
      <div class="password-container">
        <input type="text" class="passbox" id="passbox" disabled value="Password123">
        <span class="material-icons" id="copyIcon">content_copy</span>
      </div>
      <div class="bar-container">
        <div class="bar"></div>
      </div>
      <div class="length-container">
        <input type="range" id="password-length" class="password-length" min="4" max="25" value="6" />
        <div class="label-container">
          <label for="password-length">Password Length</label>
          <p id="length"> 6 </p>
        </div>
      </div>   
      <div class="password-option-container">
        <div class="password-option">
          <label for="lowcase-check">Include Lowercase Letters (a-z)</label>
          <input type="checkbox" id="lowcase-check" name="include-in-password" value="a-z" />
        </div>
        <div class="password-option">
          <label for="uppcase-check">Include Uppercase Letters (A-Z)</label>
          <input type="checkbox" id="uppcase-check" name="include-in-password" value="A-Z" />
        </div>
        <div class="password-option">
          <label for="number-check">Include Numbers (0-9)</label>
          <input type="checkbox" id="number-check" name="include-in-password" value="0-9" />
        </div>
        <div class="password-option">
          <label for="symbols-check">Include Symbols (@-*)</label>
          <input type="checkbox" id="symbols-check" name="include-in-password" value="@-*" />
        </div>
      </div>
      <input type="button" id="generate-password-btn" value="Generate Password">
    </div>
  </div>
`


const sliderEl: HTMLInputElement | null = document.querySelector("#password-length")

if(sliderEl){
  sliderFill(null)
  sliderEl.addEventListener("input", (e) =>sliderFill(e))
}

function sliderFill(event: any|null): void{
  if(sliderEl){
    let tempSliderValue: number
    if(event)
      tempSliderValue = event.target.value; 
    else
      tempSliderValue = 6;
    console.log(tempSliderValue-4)
    const progress = ((tempSliderValue - 4 )/ 21) * 100;
  
    sliderEl.style.background = `linear-gradient(to right, #0079ff ${progress}%, #ebebeb ${progress}%)`;
  }
}
