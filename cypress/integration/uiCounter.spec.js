import '@testing-library/cypress/add-commands';

beforeEach(() => {
    cy.visit('/');
});

it('생성시 버튼과 초기값을 렌더링한다.', () => {
    cy.get('.btn-inc').should('be.visible');
    cy.get('.btn-dec').should('be.visible');
    cy.get('.value').should('have.text', '10');
    cy.screenshot();
});

it('+ 버튼 클릭시 1 증가한다.', () => {
    cy.get('.btn-inc').click();
    cy.get('.value').should('have.text', '11');
    cy.screenshot();
});

it('- 버튼 클릭시 1 감소한다.', () => {
    cy.get('.btn-dec').click();
    cy.get('.value').should('have.text', '9');
    cy.screenshot();
});

it('Max값인 경우 + 버튼이 disabled 상태가 되며 클릭해도 증가하지 않는다.', () => {
    cy.get('.btn-inc').click();
    cy.get('.btn-inc').click();
    cy.screenshot();
});

it('Min값인 경우 - 버튼이 disabled 상태가 되며 클릭해도 감소하지 않는다.', () => {
    cy.get('.btn-dec').click();
    cy.get('.btn-dec').click();
    cy.screenshot();
});