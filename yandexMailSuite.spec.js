// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('YandexMail Suite', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('New letter YandexMail', async function() {
    await driver.get("https://mail.yandex.ru//?uid=1087895136")
    await driver.manage().window().setRect(1515, 1020)
    await driver.findElement(By.css(".mail-ComposeButton-Text")).click()
    {
      const element = await driver.findElement(By.css(".tst-field-to .composeYabbles"))
      await driver.executeScript("if(arguments[0].contentEditable === 'true') {arguments[0].innerText = '​'}", element)
    }
  })
  it('Draft  YandexMail', async function() {
    await driver.get("https://mail.yandex.ru//?uid=1087895136")
    await driver.findElement(By.css(".textinput__control")).click()
    await driver.findElement(By.css(".textinput__control")).sendKeys("yandex")
    await driver.findElement(By.css(".textinput__control")).sendKeys(Key.ENTER)
    await driver.findElement(By.css(".ns-view-messages-item-wrap:nth-child(2) .mail-MessageSnippet-Item > .mail-MessageSnippet-Item:nth-child(3)")).click()
  })
})
