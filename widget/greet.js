var enteredName = document.querySelector('.enteredName');
var counterElement = document.querySelector('.counter');
var languageOptions = document.querySelectorAll('.language');
var errorMessageElem = document.querySelector('.errorMessage');
var greetButton = document.querySelector('.greetButton');
var helloName = document.querySelector('.helloName');
var resetCounterButton = document.querySelector('.resetCounterButton');


var existingNames = JSON.parse(localStorage.getItem("greetedNames")) || [];
localStorage.setItem("greetedNames", JSON.stringify(existingNames));

//persist counter
var counter = existingNames.length;
counterElement.innerHTML = counter;


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

//greet button
greetButton.addEventListener('click', function () {
  var nameEntered = enteredName.value
  //name enter by use converted to uppercase for the first letter and lower case for rest of the letters
  //in a case where use enters a same name with different cases, should be considered as name exist
  var name = nameEntered.charAt(0).toUpperCase() + nameEntered.slice(1).toLowerCase()
  var language = getSelectedLanguage();
  greetFunction.setName(name);
  greetFunction.setLanguage(language);
  var greeting = greetFunction.greetUser();
  var errorMessage = greetFunction.errorMessage();

  if (greeting) {
    helloName.innerHTML = greeting;
    if (!existingNames.includes(name) && name.match(/^[A-Za-z]+$/)) {
      existingNames.push(name);
      counterElement.innerHTML = existingNames.length
      localStorage.setItem('greetedNames', JSON.stringify(existingNames));
    }else {
      helloName.innerHTML = ""
      errorMessageElem.innerHTML = "Name already exists!";
      setTimeout(() => {
        errorMessageElem.innerHTML = '';
      }, 2000);
    }
  } 
   if (errorMessage) {
    helloName.innerHTML = ""
    errorMessageElem.innerHTML = errorMessage;
    setTimeout(() => {
      errorMessageElem.innerHTML = '';
    }, 2000);
  }
  //remmove name
  enteredName.value = '';
  //remove language selection
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


