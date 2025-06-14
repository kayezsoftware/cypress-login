describe('Login Form Validations', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Başarılı giriş yapılabiliyor', () => {
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').type('StrongPass1');
    cy.get('input[type="checkbox"]').check();
    cy.get('button[type="submit"]').should('not.be.disabled').click();
    cy.url().should('include', '/success');
    cy.contains('Giriş başarılı 🎉');
  });

  it('Hatalı girişlerde beklenen mesajlar ve button disabled', () => {
    cy.get('input[type="email"]').type('wrong');
    cy.get('input[type="password"]').type('123');
    cy.contains('Geçerli e‑posta gir');
    cy.contains('En az 8 karakter, rakam içerir');
    cy.get('button[type="submit"]').should('be.disabled');

    cy.get('input[type="email"]').clear().type('test@example.com');
    cy.get('input[type="password"]').clear().type('StrongPass1');
    cy.get('button[type="submit"]').should('be.disabled');
  });
});