function greet(){
    var counter = 0;
    var userLanguage = '';
    var userNames = [];
    var userName = '';
    var error = ""
    var greetings = ""

    function getName(name){
        userName = name;
        return userName;
    }

    function getLanguage(language){
        userLanguage = language;
        return userLanguage;
    }

    function getCounter(){
        return counter;
    }

    function getNames(){
        return userNames;
    }

    function greetUser(name, language){
        if(name.match(/^[A-Za-z]+$/) && !userNames.includes(name.match(/^[A-Za-z]+$/)) && language !== null){
            addName(name.match(/^[A-Za-z]+$/))

            if(language === 'english'){
                greetings = "Hi " + name;
            }
            else if(language === 'afrikaans'){
                greetings = "Hallo " + name;
            }
            else if(language === 'xhosa'){
                greetings = "Molo " + name;
            }

            return greetings;
        } 
    }

    function errorMessage(name, language){
        if(!name.match(/^[A-Za-z]+$/) && language === null){
            error = 'Enter a valid name and  select a language';
        }
        else if(language === null){
            error = 'Select a language'
        }
        else if(!name.match(/^[A-Za-z]+$/)){
            error = 'Enter a valid name'
        }else [
            error = ""
        ]

        return error
    }
    function increment(){
        if(greetings && addName()){
            counter++;
        }
        return counter
    }

    function addName(name){
        return userNames.push(getName(name));
    }

    function resetCounter(){
        counter = 0;
        return counter;
    }

    return{
        greetUser,
        getCounter,
        getNames,
        increment,
        addName,
        getName,
        getLanguage,
        resetCounter,
        errorMessage
    }
}
