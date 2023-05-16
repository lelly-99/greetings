describe ("greet user", function (){
    it('should  be able to greet user in english"', function(){
        var greetingOne = greet();

        greetingOne.getName('lelly')
        greetingOne.getLanguage("english")

        assert.equal("Hi lelly", greetingOne.greetUser("lelly", "english"))
    })

    it('should  be able to greet user in xhosa"', function(){
        var greetingOne = greet();

        greetingOne.getName('lelly')
        greetingOne.getLanguage("xhosa")

        assert.equal("Molo lelly", greetingOne.greetUser("lelly", "xhosa"))
    })

    it('should  be able to greet user in afrikaans"', function(){
        var greetingOne = greet();

        greetingOne.getName('lelly')
        greetingOne.getLanguage("afrikaans")

        assert.equal("Hallo lelly", greetingOne.greetUser("lelly", "afrikaans"))
    })


})

describe ("error message", function (){
    it('should  be able to return error message for name and radio input"', function(){
        var errorOne = greet();

        errorOne.getName('5665')
        errorOne.getLanguage(null)

        assert.equal("Enter a valid name and  select a language", errorOne.errorMessage("5665", null))
    })
    it('should  be able to return error message for name"', function(){
        var greetingOne = greet();

        greetingOne.getName('5665')
        greetingOne.getLanguage("xhosa")

        assert.equal("Enter a valid name", greetingOne.errorMessage("5665", "xhosa"))
    })
    it('should  be able to return error message for name"', function(){
        var greetingOne = greet();

        greetingOne.getName('lelly')
        greetingOne.getLanguage(null)

        assert.equal("Select a language", greetingOne.errorMessage("lelly", null))
    })

    it('should  be able to return no error message for entered inputs', function(){
        var greetingOne = greet();

        greetingOne.getName('lelly')
        greetingOne.getLanguage("english")

        assert.equal("", greetingOne.errorMessage("lelly", "english"))
    })
})

describe ("counter", function(){
    it('should  be able to count number of people greeted "1"', function(){
        var countOne = greet();

        countOne.getName('lelly')
        countOne.getLanguage("xhosa")
        countOne.greetUser("lelly", "xhosa")
        countOne.getCounter()

        assert.equal(1 , countOne.increment() )
    })

    it('should  be able to count number of people greeted "1" for the same name', function(){
        var countOne = greet();

        countOne.getName('lelly')
        countOne.getLanguage("xhosa")
        countOne.greetUser("lelly", "xhosa")
        countOne.getCounter()

        countOne.getName('lelly')
        countOne.getLanguage("xhosa")
        countOne.greetUser("lelly", "xhosa")
        countOne.getCounter()

        assert.equal(1 , countOne.increment() )
    })
})

describe ("reset counter", function(){
    it('should  be able to reset the counter to zero', function(){
        var countOne = greet();

        countOne.getName('lelly')
        countOne.getLanguage("xhosa")
        countOne.greetUser("lelly", "xhosa")
        countOne.getCounter()

        assert.equal(0 , countOne.resetCounter() )
    })
})
