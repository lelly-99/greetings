const enteredName = document.querySelector('.enteredName');
const counterElement = document.querySelector('.counter');
const languageOptions = document.querySelectorAll('.language');
const errorMessageElem = document.querySelector('.errorMessage');
const greetButton = document.querySelector('.greetButton');
const helloName = document.querySelector('.helloName');
const resetCounterButton = document.querySelector('.resetCounterButton');


var existingNames = JSON.parse(localStorage.getItem("greetedNames")) || [];
localStorage.setItem("greetedNames", JSON.stringify(existingNames));




const greetFunction = greet(existingNames);
//check for the selected radio button
function getSelectedLanguage() {
    var selectedLanguage = '';
    languageOptions.forEach(function (radio) {
        if (radio.checked) {
            selectedLanguage = radio.value;
        }
    });
    return selectedLanguage;
}


greetButton.addEventListener('click', function () {
    var name = enteredName.value;
    var language = getSelectedLanguage();
    greetFunction.setName(name);
    greetFunction.setLanguage(language);
    var greeting = greetFunction.greetUser();
    var errorMessage = greetFunction.errorMessage();
  
    if (greeting) {
      helloName.innerHTML = greeting;
      if (!existingNames.includes(name)) {
        existingNames.push(name);
        counterElement.innerHTML = existingNames.length;
        localStorage.setItem('greetedNames', JSON.stringify(existingNames));
      } else if(existingNames.includes(name)){
        errorMessageElem.innerHTML = "Name already exists!"
        helloName.innerHTML = ""
        setTimeout(() => {
            errorMessageElem.innerHTML = '';
            location.reload();
          }, 2000);
      } 
    }
    if (errorMessage) {
      errorMessageElem.innerHTML = errorMessage;
      helloName.innerHTML = '';
      setTimeout(() => {
        errorMessageElem.innerHTML = '';
        location.reload();
      }, 2000);
    }
  
    languageOptions.forEach(option => {
      option.checked = false;
    });
  
    enteredName.value = '';
  });
  
  resetCounterButton.addEventListener('click', function () {
    const resetCount = greetFunction.resetCounter();
    counterElement.innerHTML = resetCount;
    existingNames = [];
    localStorage.removeItem('greetedNames');
    setTimeout(() => {
      helloName.innerHTML = '';
      location.reload();
    }, 2000);
    helloName.innerHTML = 'successfully cleared!';
    helloName.classList.add('green');
  });
  

