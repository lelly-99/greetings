describe ("greet user", function (){
    it('should  be able to greet user in english"', function(){
        var greetingOne = greet();

        greetingOne.setName('lelly')
        greetingOne.setLanguage("english")

        assert.equal("Hi Lelly", greetingOne.greetUser("lelly", "english"))
    })

    it('should  be able to accept any case and capitalize first letter of user name"', function(){
        var greetingOne = greet();

        greetingOne.setName('lelLy')
        greetingOne.setLanguage("xhosa")

        assert.equal("Molo Lelly", greetingOne.greetUser("lelLy", "xhosa"))
    })



})

describe ("error message", function (){
    it('should  be able to return error message for name and radio input"', function(){
        var errorOne = greet();

        errorOne.setName('544')
        errorOne.setLanguage("")

        assert.equal("Enter a valid name and select a language", errorOne.errorMessage())
    })
    it('should  be able to return error message for name"', function(){
        var greetingOne = greet();

        greetingOne.setName('5665')
        greetingOne.setLanguage("xhosa")

        assert.equal("Enter a valid name", greetingOne.errorMessage())
    })
    it('should  be able to return error message for name"', function(){
        var greetingOne = greet();

        greetingOne.setName('lelly')
        greetingOne.setLanguage("")

        assert.equal("Select a language", greetingOne.errorMessage())
    })

})

describe ("counter", function(){
    it('should  be able to count number of people greeted "1"', function(){
        var countOne = greet();

        countOne.setName("lelly")

        assert.equal(1 , countOne.addName() )
    })

    it('should  be able to count number of people greeted "1" for the same name', function(){
        var countOne = greet();

        countOne.greetUser("lelly", "xhosa")
        countOne.greetUser("lelly", "xhosa")

        assert.equal(1 , countOne.addName() )
    })
})

describe ("reset counter", function(){
    it('should  be able to reset the counter to zero', function(){
        var countOne = greet();

        countOne.setName('lelly')
        countOne.setLanguage("xhosa")
        countOne.greetUser("lelly", "xhosa")
        countOne.getCounter()

        assert.equal(0 , countOne.resetCounter() )
    })
})
