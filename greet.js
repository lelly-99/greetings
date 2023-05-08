//reference to the input name
var enteredName = document.querySelector(".enteredName");
//reference to greet button
var greetButton = document.querySelector(".greetButton");
//references to output name
var helloName = document.querySelector(".helloName");

function greet(){
    var nameEntered = enteredName.value
    var validateName = nameEntered.match(/^[A-Za-z]+$/)
    if(validateName){
        helloName.innerHTML = validateName
    }else if(!validateName){
        helloName.innerHTML = "Enter a valid name"
    }
}

greetButton.addEventListener("click", function(){
    greet();
    enteredName.value = ""
});