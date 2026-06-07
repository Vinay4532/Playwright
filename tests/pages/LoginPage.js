const { BasePage } = require('../../utils/BasePage');


class LoginPage extends BasePage

{
    constructor(page)
    {
        super(page)
        this.loginlink = page.locator("(//a[normalize-space()='Log in'])[1]")
        this.username = page.locator('//input[@id="loginusername"]')
        this.password= page.locator("(//input[@id='loginpassword'])[1]")
        this.loginButton = page.locator("(//button[normalize-space()='Log in'])[1]")


    }
    async open()
    {
        await this.page.goto("https://www.demoblaze.com/index.html")
    }
    async login(user,pass)
    {
        await this.click(this.loginlink)
       await this.wait(this.username);
       await this.fill(this.username,user)
       await this.wait(this.password)
       await this.fill(this.password,pass)
       await this.click(this.loginButton)
    }
}
module.exports = { LoginPage };