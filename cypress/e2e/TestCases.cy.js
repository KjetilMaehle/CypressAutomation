/// <reference types="Cypress"/>

//Load comamnds from /Support/TestCaseCommands.
import TCC from '../support/TestCaseCommands'


describe('Test Automation Assessment', function() {


    //Goal of test: Verify user can log into URL and verify the title of the page is correctly set. 
    it('Test Case 1', function(){
        //Load comamnds from /Support/TestCaseCommands.
        const tcg=new TCC()
        
        //Load URL
        tcg.LoadPage()

        //Load data from Json, this is the run in array, so one test run per data entry in Json. 
        cy.fixture('Test1.json').then(function(data1){
        this.data=data1
        const array1 = this.data
        //For Each Loop with data from array. 
        array1.forEach(element => {
            //Running command login with data from array. 
            tcg.Login(element)
            //Assertion of title per test-case description. 
            tcg.AssertLogin()
            //Logout to continue with next user on list. 
            tcg.Logout()
        })
        
    })
})

    
    //Goal of the test: Verify user can't log in with invalid credentials and are presented with correct error message.
    it('Test Case 2', function(){
        //Load comamnds from /Support/TestCaseCommands.
        const tcg=new TCC()
    
         //Load URL
         tcg.LoadPage()   

        //Load data from Json, this is the run in array, so one test run per data entry in Json. 
        cy.fixture('Test2.json').then(function(data1){
        this.data=data1
        const array1 = this.data
        //For Each Loop with data from array. 
        array1.forEach(element => {
            //Running command login with data from array. 
            tcg.Login(element)
            tcg.AssertErrorM()
            tcg.LoadPage()
        })
    })
})
    

    //Goal of the test: Verify the users interest lists. 
    it("Test Case 3", function(){
        //Load comamnds from /Support/TestCaseCommands.
        const tcg=new TCC()

        //Load URL
        tcg.LoadPage()

        //Load data from Json, this is then run in loop, so one test run per data entry in Json. 
        cy.fixture('Test3.json').then(function(data1){
            this.data=data1
            const array1 = this.data
            //For Each Loop with data from array. 
            array1.forEach(element => {
                //Running command login with data from array. 
                tcg.Login(element)
                //Command to navigate to Interests.
                tcg.NavInterests()
                //Creating the element we are currently in from the Array to a Jsonstring for next step.
                var ArrString = JSON.stringify(element)
                //Creating a loop for each object/interest of the user. Verifying if it is present in their Json of interests. 
                cy.get('#aos-MySavedInterests > :nth-child(2)').find('[class="aos-MR10px"]').each(($Interest) => {
                    //Run loop of values from Interests tagged and Json string. For future error handling, cy.log(ArrString) and cy.log($Interest.text()) can be added to if and else brackets, as a visual aid. 
                    if((ArrString).includes($Interest.text())                        
                    )
                    {
                        //Return true to cypress to continue test. 
                        expect(true).to.equal(true)
                    }
                    else
                    {
                        //Return Fail to Cypress to end test. 
                        expect(true).to.equal(false)
                    }
                }) 
                //Logout for next run in loop. 
                tcg.Logout()
            })
        })
        
})
    
    
})
