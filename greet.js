//reference to the input name
var enteredName = document.querySelector(".enteredName");
//reference to greet button
var greetButton = document.querySelector(".greetButton");
//references to output name
var helloName = document.querySelector(".helloName");

greetButton.addEventListener("click", function(){
    helloName.innerHTML = enteredName.value
    //remove name after clicking button
    enteredName.value = '';
});