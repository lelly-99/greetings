//reference to the input name
var enteredName = document.querySelector(".enteredName");
//reference to greet button
var greetButton = document.querySelector(".greetButton");
//references to output name
var helloName = document.querySelector(".helloName");
//refences to counter
var counter = document.querySelector(".counter");
//reference to radio button
var selectLanguage = document.querySelector(".language:checked");
var greetLanguage = document.querySelector(".greetLanguage");

function greet(){
    var nameEntered = enteredName.value
    //ensure that user input name only contains alphaphets
    var validateName = nameEntered.match(/^[A-Za-z]+$/)
    //if the name enetered is valid it should return it 
    if(validateName){
        helloName.innerHTML = "Hello " + validateName;
    //if the name if not valid is should return "Enter a valid name"   
    }else if(!validateName){
        helloName.innerHTML = "Enter a valid name";
    }

    if(validateName){
        counter.innerHTML++
    }
}

greetButton.addEventListener("click", function(){
    greet();
    enteredName.value = ""
});