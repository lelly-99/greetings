
const enteredName = document.querySelector('.enteredName');
const counterElement = document.querySelector('.counter');
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

    localStorage.getItem("theNames", JSON.stringify(greetFunction.getName(name)))
    var counter = parseInt(localStorage.getItem("greetCounter")) || 1



    greetFunction.getLanguage(language);
    var greeting = greetFunction.greetUser();
    var errorMessage = greetFunction.errorMessage();

    //greet user function if called
    if (greeting) {

        counterElement.innerHTML = counter
        counter++
        localStorage.setItem("greetCounter", counter.toString())

        enteredName.value = ""
        helloName.innerHTML = greeting
        //localStorage.setItem("theNames", greeting);
        errorMessageElem.innerHTML = ""

        //error message function is calledS
    } else if (errorMessage) {
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
    counterElement.innerHTML = resetCount;
    localStorage.clear()
});
