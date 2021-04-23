describe('testing testing', () => {
    beforeEach(() => {
        cy.visit('localhost:3001')
    })

    const name = () => cy.get('input[name="name"]');
    const password = () => cy.get('input[name="password"]');
    const email = () => cy.get('input[name="email"]');
    const terms = () => cy.get('input[name="terms"]');
    const submitBtn = () => cy.get('form button')

   

    it('testing the tests', () => {
        expect(1 + 2).to.equal(3)
        expect(1 + 2).to.not.equal(4)
    })

    it('form inputs are present', ()=> {
        name().should('exist');
        password().should('exist');
        email().should('exist');
        terms().should('exist');
        submitBtn().should('exist')
    })

    it('name input contains typed name', () => {
        name().should('have.value', '').type('DEVIN').should('have.value', 'DEVIN') 
    })

    it('get email input and type an email into it', () => {
        email().should('have.value', '').type('test@testing.com').should('have.value', 'test@testing.com')
    })

    it('user can click checkbox', () => {
        terms().click().should('be.checked')
    })

    it('can submit form data', () => {
        submitBtn().should('be.disabled')
        name().type('username')
        email().type('test@testing.com')
        password().type('password')
        terms().click()
        submitBtn().should('be.enabled')
        submitBtn().click()
    })

    it('should not be able to submit if input is empty', () => {
        name().should('have.value', '')
        email().should('have.value', '')
        submitBtn().should('be.disabled') 
    })
    
})