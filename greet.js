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
function greet(){
    var nameEntered = enteredName.value
    //ensure that user input name only contains alphaphets
    var validateName = 
    //if the name enetered is valid it should return it 
    var selectedLanguage = document.querySelector('input[name="language"]:checked');

}

greetButton.addEventListener("click", function(){
    greet();
    enteredName.value = ""
});

resetCounterButton.addEventListener("click", function(){
    counter.innerHTML = 0;
});