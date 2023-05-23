function greet() {
    var counter = 0;
    var userLanguage = '';
    var userNames = [];
    var userName = '';
    var error = ""
    var greetings = ""
    //var greeted = []

    function setName(name) {
        userName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        return userName;
    }
    
    function setLanguage(language) {
        userLanguage = language;
        return userLanguage;
    }
    
    function getCounter() {
        counter++;
        return counter
    }
    
    function getNames() {
        return userNames;
    }
    function addName() {
        getNames().push(setName(userName));
    }
        
        function greetUser() {
            if (userName.match(/^[A-Za-z]+$/) && userLanguage !== "" && !getNames().includes(userName)) {
                getCounter();
                addName();

            if (userLanguage === "english") {
                greetings = "Hi " + userName;
            } else if (userLanguage === "afrikaans") {
                greetings = "Hallo " + userName;
            } else if (userLanguage === "xhosa") {
                greetings = "Molo " + userName;
            }
            return greetings;
        }
    }

    function errorMessage() {
        if (userName.match(/^[A-Za-z]+$/) && getNames().includes(userName)) {
            error = "Name already exists!";
        } else if (!userName.match(/^[A-Za-z]+$/) && userLanguage === "") {
            error = "Enter a valid name and select a language";
        } else if (userLanguage === "") {
            error = "Select a language";
        } else if (!userName.match(/^[A-Za-z]+$/)) {
            error = "Enter a valid name";
        } else{
            error = ""
        }

        return error;
    }

    function resetCounter() {
        counter = 0;
        return counter
    }

    return {
        greetUser,
        getCounter,
        getNames,
        setName,
        setLanguage,
        resetCounter,
        errorMessage,
        addName,
    }
}



const enteredName = document.querySelector('.enteredName');
const counterElement = document.querySelector('.counter');
const languageOptions = document.querySelectorAll('.language');
const errorMessageElem = document.querySelector('.errorMessage');
const greetButton = document.querySelector('.greetButton');
const helloName = document.querySelector('.helloName');
const resetCounterButton = document.querySelector('.resetCounterButton');


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


// Event listener for greet button click
greetButton.addEventListener('click', function () {
    var name = enteredName.value;
    var language = getSelectedLanguage();
    greetFunction.setName(name)
    greetFunction.setLanguage(language);
    var greeting = greetFunction.greetUser();
    var errorMessage = greetFunction.errorMessage();

    //greet user function is called
    if (greeting) {
        greetFunction.getNames()
        enteredName.value = ""
        helloName.innerHTML = greeting
        localStorage.setItem("greetedNames",name)
        if(localStorage.setItem("greetedNames",name)){
            counterElement.innerHTML++
        }

        errorMessageElem.innerHTML = ""
        setTimeout(() => {
            helloName.innerHTML = '';
            location.reload()
        }, 3000)

        //error message function is called
    } else if (errorMessage) {
        errorMessageElem.innerHTML = errorMessage;
        helloName.innerHTML = '';
        setTimeout(() => {
            helloName.innerHTML = '';
            location.reload()
        }, 2000)
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
    setTimeout(() => {
        helloName.innerHTML = '';
        location.reload()
    }, 2000)
    helloName.innerHTML = 'successfully cleared!';
    helloName.classList.add("green")
});