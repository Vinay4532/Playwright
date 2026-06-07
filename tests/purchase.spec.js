const { test, expect } = require('@playwright/test');

const { LoginPage } = require('./pages/LoginPage');
const { HomePage } = require('./pages/HomePage');
const { CartPage } = require('./pages/CartPage');
const { ProductPage } = require('./pages/ProductPage');
const data = require('./fixtures/testData.json');

test('E2E Flow', async ({ page }) => {

const login = new LoginPage(page);
    const home = new HomePage(page);
     const cart = new CartPage(page);
      const product = new ProductPage(page);
    await login.open()
     await login.login(data.username, data.password);
       
      await home.selectProduct("Samsung galaxy s6");
       await product.addToCart();
      await cart.openCart();
      await cart.placeOrder(data.order)
    



})