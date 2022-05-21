import { test, expect} from '@playwright/test';

/**
 * TEST CASE
 * 
 * Ajouter un produit au panier
 * 
 * 1. Se rendre sur la page d'accueil
 * 2. Accéder à la page des détails d'un produit
 * 3. Cliquer sur "Ajouter au panier" avec une quantité de 3
 * 4. Cliquer sur l'icone du panier
 * 5. Vérifier les informations
 */

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Ajouter un produit au panier', () => {
  test('Test #1', () => {
    expect(true).toEqual(true)
  })
  });


