class BasePage {
    constructor(page) {
        this.page = page;
    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, value) {
        await locator.fill(value);
    }

    async wait(locator) {
        await locator.waitFor({ state: 'visible' });
    }

    async getText(locator) {
        return await locator.textContent();
    }

    async navigate(url) {
        await this.page.goto(url);
    }
}

// ✅ VERY IMPORTANT
module.exports = { BasePage };