class TCC



{
    LoadPage()
    {
        //URL for test-cases for "TheBookseller.com", if this URL changes, update here to update all test cases using this URL. 
        cy.visit("https://www.thebookseller.com/")
    }

    //Function to Login with data presented from TestCase.
    Login(data)
    {
            //Open Submenu to login.
            cy.get('[id="aos-de-menu-2231"]').click()
            //Enter Username.
            cy.get('#Email2108').type(data.Username)
            //Enter Password.
            cy.get('#Password2108').type(data.Password)
            //Press Login button.
            cy.get('[value="Login"]').eq(0).click()
    }

    //Assertion on title header of the page. If title doesn't match the test is automatically failed. 
    AssertLogin()
    {
        //Below is the Title that was present on the page, commented out. 
        //cy.title().should('eq', 'The Bookseller - Home')

        //Below is the Title defined in Use-Case. 
        cy.title().should('eq', 'The Bookseller | At the heart of the book trade since 1858.')
    }

    //Assertion of Error message present when login in with wrong credentials. 
    AssertErrorM()
    {
        //Get error message anv assert on it by text. 
        cy.get('#aoLogin > :nth-child(1)').should('have.text', 'The username/password match has not been found - you have 9 attempts remaining.')  
    }

    //Navigate to Logout button and press it. 
    Logout()
    {
        //Open Menu.
        cy.get('[id="aos-de-menu-2231"]').click()
        //Press Logout button.
        cy.get('#aos-de-menu-2231 > .aos__menu__l1 > [data-nodeind="5"]').click()
    }

    //Navigate to menu option "My interests". 
    NavInterests()
    {
        //Open Menu.
        cy.get('[id="aos-de-menu-2231"]').click()
        //Get menu option for Interest and enter. 
        cy.get('#aos-de-menu-2231 > .aos__menu__l1 > [data-nodeind="4"]').click()
    }

}

export default TCC;