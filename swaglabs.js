const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
async function testRun(){
    let driver=await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
    await driver.get("https://ultimateqa.com/automation");
    await driver.findElement(By.xpath(`//a[@href="#" and contains(text(),'Education')]`)).click();

    

    
    await driver.sleep(5000);
    
    await driver.findElement(By.xpath(`//a[@href="https://courses.ultimateqa.com/collections" and contains(text(),'Free Courses')]`)).click();
    //a[@class="add-cart-popup-button"]
    //input[@name="qty"]
    
    await driver.sleep(2000);
    await driver.findElement(By.xpath(`//input[@class="form__control form__control-search"]`)).click();
    await driver.findElement(By.xpath(`//input[@class="form__control form__control-search"]`)).sendKeys('selenium');
    await driver.findElement(By.xpath(`//input[@class="form__control form__control-search"]`)).sendKeys(Key.ENTER);

    

    await driver.findElement(By.xpath(`//h3[contains(text(),'Complete Selenium WebDriver with Java Bootcamp')]`)).click();
    await driver.findElement(By.xpath(`//a[contains(@class,'button-free')]`)).click();


    await driver.sleep(5000);


    //await driver.sleep(5000);
    await driver.quit();
    
    
    
    }
    
    testRun();