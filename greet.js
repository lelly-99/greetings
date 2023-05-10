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
var notValidName = document.querySelector(".notValidName")
var noSelectedOption = document.querySelector(".noSelectedOption")
function greet(){
    var nameEntered = enteredName.value
    //ensure that user input name only contains alphaphets
    var validateName = nameEntered.match(/^[A-Za-z]+$/)
    //if the name enetered is valid it should return it 
    //
    var selectedLanguage = document.querySelector('input[name="language"]:checked');
    if(validateName && selectedLanguage.value === 'english'){
        helloName.innerHTML = "Hi " + validateName;

    }else if(validateName && selectedLanguage.value === 'xhosa'){
        helloName.innerHTML = "Molo " + validateName;

    }else if(validateName && selectedLanguage.value === 'afrikaans'){
        helloName.innerHTML = "Hallo " + validateName;
    
    }else if(validateName && selectedLanguage.value === 'afrikaans'){
        helloName.innerHTML = "Hallo " + validateName;
    //if the name if not valid is should return "Enter a valid name"   
    }
    //if name is not valid should return error message
    if(!validateName){
        notValidName.innerHTML = "Enter a valid name";
    }
    //if valid name is entered should not return anything
    if(validateName){
        notValidName.innerHTML = ""
    }
    //if radio button not selected should return error message
    if(!selectedLanguage){
        noSelectedOption.innerHTML = "Select a language"
    }
    //if radio button is selected should not return anything
    if(selectedLanguage){
        noSelectedOption.innerHTML = ""
    }
    //
    if(validateName){
        counter.innerHTML++
    }
}

greetButton.addEventListener("click", function(){
    greet();
    enteredName.value = ""
});