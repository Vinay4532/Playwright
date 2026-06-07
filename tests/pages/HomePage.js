const { BasePage } = require('../../utils/BasePage');


class HomePage extends BasePage {

    constructor(page) {
        super(page);

        // ✅ NO await here
        this.products = page.locator('.card-title a');
    }

    async selectProduct(name) {

        const count = await this.products.count();

        for (let i = 0; i < count; i++) {

            const text = await this.getText(this.products.nth(i));

            if (text.includes(name)) {
                await this.click(this.products.nth(i));
                break;
            }
        }
    }
}
module.exports={HomePage}