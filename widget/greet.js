
const enteredName = document.querySelector('.enteredName');
const counter = document.querySelector('.counter');
const languageOptions = document.querySelectorAll('.language');
const errorMessageElem = document.querySelector('.errorMessage');
const greetButton = document.querySelector('.greetButton');
const helloName = document.querySelector('.helloName');
const resetCounterButton = document.querySelector('.resetCounterButton');

// Create a new greet instance
const greetFunction = greet();

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


// Event listener for greet button click
greetButton.addEventListener('click', function () {
    var name = enteredName.value;
    var language = getSelectedLanguage();
    greetFunction.getName(name);
    greetFunction.getLanguage(language);
    var greeting = greetFunction.greetUser();
    var errorMessage = greetFunction.errorMessage();
    var namesStored = localStorage.getItem("namesGreeted")
    var names = namesStored ? JSON.parse(namesStored) : [];

    //greet user function if called
    if (greeting) {
        enteredName.value = ""
        helloName.innerHTML = greeting;
        counter.innerHTML = greetFunction.getCounter();
        errorMessageElem.innerHTML = ""
        names.push(name);
        localStorage.setItem("namesGreeted", JSON.stringify(name))
    //error message function is called
    }else if(errorMessage) {
        errorMessageElem.innerHTML = errorMessage;
        helloName.innerHTML = '';
    } else {
        errorMessageElem.innerHTML = '';
    }

    languageOptions.forEach(option => {
        option.checked = false;
    });

    enteredName.value = ""

});

// Event listener for reset counter button click
resetCounterButton.addEventListener('click', function () {
    const resetCount = greetFunction.resetCounter();
    counter.innerHTML = resetCount;
});
