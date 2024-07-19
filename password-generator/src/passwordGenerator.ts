let sliderEl: HTMLInputElement;
let lengthLabel: HTMLElement; 
let lowerCheck: HTMLInputElement;
let upperCheck: HTMLInputElement;
let numberCheck: HTMLInputElement;
let symbolCheck: HTMLInputElement;
let passwordContainer: HTMLInputElement;
let generateBtn: HTMLInputElement;
let securityPercentage: HTMLElement;

let passwordLength: number = 0;

let password: string = "";

export function setElements(range: HTMLInputElement, label: HTMLElement, lower: HTMLInputElement, upper: HTMLInputElement,
  number: HTMLInputElement, symbol: HTMLInputElement, passbox: HTMLInputElement, generate: HTMLInputElement, bar: HTMLElement){
  sliderEl = range;
  lengthLabel = label;
  lowerCheck = lower;
  upperCheck = upper;
  numberCheck = number;
  symbolCheck = symbol;
  passwordContainer = passbox;
  generateBtn = generate;
  securityPercentage = bar;
  
  if(sliderEl){
    sliderFill(null)
    fillBar()
    sliderEl.addEventListener("input", (e) =>{
      sliderFill(e);
      createPassword();
      fillBar();
    })
  }

  lowerCheck.addEventListener("input", () => fillBar())
  upperCheck.addEventListener("input", () => fillBar())
  numberCheck.addEventListener("input", () => fillBar())
  symbolCheck.addEventListener("input", () => fillBar())
  generateBtn.addEventListener("click", () => createPassword())
}

function sliderFill(event: any|null): void{
  if(sliderEl){
    if(event)
      passwordLength = event.target.value; 
    else
      passwordLength = 6;
    
    const progress = ((passwordLength - 4 )/ 21) * 100;
    lengthLabel.textContent = passwordLength.toString();
  
    sliderEl.style.background = `linear-gradient(to right, #0079ff ${progress}%, #ebebeb ${progress}%)`;
  }
}

function createPassword(){
  password =""
  if(lowerCheck.checked || upperCheck.checked || numberCheck.checked || symbolCheck.checked){
    for(let i = 0; i < passwordLength; i++){
      const ranList: number[] = [];
      let counter = 0;
      if(lowerCheck.checked){
        const lowerRan = (Math.floor(Math.random() * (122 - 97) ) + 97);
        ranList.push(lowerRan);
        counter++;
      }
      if(upperCheck.checked){
        const upperRan = (Math.floor(Math.random() * (90 - 65) ) + 65);
        ranList.push(upperRan);
        counter++;
      }
      if(numberCheck.checked){
        const numberRan = (Math.floor(Math.random() * (57 - 48) ) + 48);
        ranList.push(numberRan);
        counter++;
      }
      if(symbolCheck.checked){
        const symbolRan = (Math.floor(Math.random() * (47 - 42) ) + 42);
        ranList.push(symbolRan);
        counter++;
      }
      password += String.fromCharCode(ranList[(Math.floor(Math.random() * ((counter) - 0) ) + 0)]);
    }
    passwordContainer.value = password;
  }
}

function fillBar(){
  let percentage = (passwordLength / 25) * 80;
  let color = '';
  if(lowerCheck.checked){
    percentage += 5;
  }
  if(upperCheck.checked){
    percentage += 5;
  }
  if(numberCheck.checked){
    percentage += 5;
  }
  if(symbolCheck.checked){
    percentage += 5;
  }

  if(passwordLength < 8){
    percentage = 20
  }
  if(percentage <= 35){
    color = "#6b0007"
  }
  else if(percentage > 35 && percentage <=75){
    color = "#cdbd27"
  }
  else{
    color = "#3961c5"
  }

  securityPercentage.style.width = `${percentage}%`;
  securityPercentage.style.backgroundColor = color;
}
