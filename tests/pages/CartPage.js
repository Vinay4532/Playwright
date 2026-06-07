const { BasePage } = require('../../utils/BasePage');
class CartPage extends BasePage
{
    constructor(page)
    {
        super(page)
        this.cart =page.locator('#cartur');
        this.placeOrderBtn = page.locator("//button[text()='Place Order']");

        this.name = page.locator('#name');
        this.country = page.locator('#country');
        this.city = page.locator('#city');
        this.card = page.locator('#card');
        this.month = page.locator('#month');
        this.year = page.locator('#year');

        this.purchaseBtn = page.locator("//button[text()='Purchase']");
    }
     async openCart() {
        await this.click(this.cart);
    }
    async placeOrder(data)
    {
        await this.click(this.placeOrderBtn)
        await this.fill(this.name,data.name)
        await this.fill(this.country, data.country);
        await this.fill(this.city, data.city);
        await this.fill(this.card, data.card);
        await this.fill(this.month, data.month);
        await this.fill(this.year, data.year);

        await this.click(this.purchaseBtn);
    }
}
module.exports = { CartPage };