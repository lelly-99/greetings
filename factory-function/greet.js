function greet() {
    var counter = 0;
    var userLanguage = '';
    var userNames = [];
    var userName = '';
    var error = ""
    var greetings = ""

    function getName(name) {
        userName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        return userName;
    }

    function getLanguage(language) {
        userLanguage = language;
        return userLanguage;
    }

    function getCounter() {
        return counter;
    }

    function getNames() {
        return userNames;
    }


    function greetUser() {
        if (userName.match(/^[A-Za-z]+$/) && !getNames().includes(userName) && userLanguage !== "") {
            addName();
            increment();

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

    function increment() {
        counter++
        return counter
    }

    function addName() {
        getNames().push(getName(userName));
    }

    function resetCounter() {
        counter = 0;
        return counter;
    }

    return {
        greetUser,
        getCounter,
        getNames,
        increment,
        addName,
        getName,
        getLanguage,
        resetCounter,
        errorMessage,
    }
}