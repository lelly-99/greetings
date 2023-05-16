//reference to the input name
var enteredName = document.querySelector(".enteredName");
//reference to greet button
var greetButton = document.querySelector(".greetButton");
//references to output name
var helloName = document.querySelector(".helloName");
//refences to counter
var counter = document.querySelector(".counter");
//reference to radio button
var languageRadios = document.querySelectorAll('.language');
//refence to valid inputs message
var errorMessage = document.querySelector(".errorMessage")
//reference to reset counter
var resetCounterButton = document.querySelector(".resetCounterButton");

const greetingFunction = greet();
var userNames = greetingFunction.getNames() || JSON.parse(localStorage.getItem("userNames"))
var greetCounter = parseInt(localStorage.getItem("greetCounter")) || 0

greetButton.addEventListener("click", function () {

    counter.innerHTML = greetCounter

    
    var nameEntered = enteredName.value
    //if the name enetered is valid it should return it 
    var selectLanguage = document.querySelector('input[name="language"]:checked');

});

resetCounterButton.addEventListener("click", function () {
    //counter.innerHTML = 0;
});