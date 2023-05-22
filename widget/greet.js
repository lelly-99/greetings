var enteredName = document.querySelector('.enteredName');
var counterElement = document.querySelector('.counter');
var languageOptions = document.querySelectorAll('.language');
var errorMessageElem = document.querySelector('.errorMessage');
var greetButton = document.querySelector('.greetButton');
var helloName = document.querySelector('.helloName');
var resetCounterButton = document.querySelector('.resetCounterButton');


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
  var nameEntered = enteredName.value;
  var name = nameEntered.charAt(0).toUpperCase() + nameEntered.slice(1).toLowerCase()
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
    } else {
      helloName.innerHTML = ""
      errorMessageElem.innerHTML = "Name already exists!";
      setTimeout(() => {
        errorMessageElem.innerHTML = '';
      }, 2000);
    }
  } else if (errorMessage) {
    errorMessageElem.innerHTML = errorMessage;
    setTimeout(() => {
      errorMessageElem.innerHTML = '';
    }, 2000);
  }

  enteredName.value = '';

  languageOptions.forEach(option => {
    option.checked = false;
  })
});

resetCounterButton.addEventListener('click', function () {
  const resetCount = greetFunction.resetCounter();
  counterElement.innerHTML = resetCount;
  existingNames = [];
  localStorage.clear();
  setTimeout(() => {
    helloName.innerHTML = '';
    location.reload();
  }, 2000);
  helloName.innerHTML = 'successfully cleared!';
  helloName.classList.add('green');
});


