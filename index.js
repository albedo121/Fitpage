//ASSIGNMENT TASK FROM FITPAGE.
//Write a simple test automation flow in any language to handle the happy flow from selection of an event on the home page up until the payments page. 

const { log } = require('console');
const {Builder, By, Key, Browser, until, Select} = require('selenium-webdriver');
const { elementLocated } = require('selenium-webdriver/lib/until');
require('chromedriver'); //For Chrome browser

(async ()=>{
    try {
        //DECLARE VARIABLES
        const domain = 'https://www.indiarunning.com/'
        const phone = '9876543210' //Enter contact number here for OTP
        let handles; //To store all window handles

        //LAUNCH BROWSER AND MAXIMIZE WINDOW
        driver = await new Builder().forBrowser(Browser.FIREFOX).build() //Mention desired browser name here
        await driver.manage().window().maximize() //Maximize window

        //NAVIGATE TO ECOMMERCE SITE
        await driver.get(domain)

        //HOME PAGE- SELECT EVENT
        await driver.wait(until.elementLocated(By.partialLinkText('New Year Running Challenges 2025'),10000)) //Locate event banner
        const event_banner = await driver.findElement(By.partialLinkText('New Year Running Challenges 2025')) //Find event banner in viewport
        await event_banner.click() //Click on event banner

        //GET WINDOW HANDLE FOR NEW TAB AND SWITCH TO IT
        handles = await driver.getAllWindowHandles();
        await driver.switchTo().window(handles[1]);

        //EVENT PAGE- SELECT SECOND CATEGORY (Rs 1000) AND CLICK PROCEED BUTTON
        await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div/div[4]'),10000)) //Locate 2nd category
        const category_button = await driver.findElement(By.xpath('//*[@id="root"]/div[1]/div[3]/div[3]/div/div[4]')); //Find 2nd category in viewport
        await category_button.click() //Click on add button

        await driver.wait(until.elementLocated(By.className('text-white bg-primaryPink-500 px-8 py-2.5 text-lg rounded-md justify-center font-medium cursor-pointer'),10000))  //Locate proceed button
        const proceed_button = await driver.findElement(By.className('text-white bg-primaryPink-500 px-8 py-2.5 text-lg rounded-md justify-center font-medium cursor-pointer')) //Find proceed button in viewport
        await proceed_button.click() //Click on proceed button

        //LOGIN PAGE- ENTER CONTACT NUMBER AND PRESS PROCEED BUTTON
        await driver.wait(until.elementLocated(By.className('form-control border-0 font-semibold bg-white'),10000)) //Locate phone number input field
        const contact_field = await driver.findElement(By.className('form-control border-0 font-semibold bg-white')) //Find phone number input field in viewport
        await contact_field.sendKeys(phone) //Enter phone number

        await driver.wait(until.elementLocated(By.className('bg-primaryPink-500 text-white cursor-pointer px-8 smobile:py-3 tablet:py-2.5 text-lg rounded-lg justify-center font-bold mb-2.5'),10000)) //Locate confirm button
        const confirm_button = await driver.findElement(By.className('bg-primaryPink-500 text-white cursor-pointer px-8 smobile:py-3 tablet:py-2.5 text-lg rounded-lg justify-center font-bold mb-2.5'))  //Find confirm button in viewport
        await confirm_button.click() //Click on confirm button

        //HERE THE SITE ASKS FOR OTP WHICH NEEDS TO BE ENTERED MANUALLY BY USER. AFTER ENTERING THE 4 DIGIT OTP DONT PRESS ANY BUTTON

        //T&C PAGE - TICK T&C CHECKBOX AND PRESS SAVE BUTTON
        await driver.wait(until.elementLocated(By.id('tnc'),10000))  //Locate t&c checkbox
        const tnc_checkbox = await driver.findElement(By.id('tnc')) //Find t&c checkbox in viewport
        await tnc_checkbox.click() //Click on t&c checkbox

        await driver.wait(until.elementLocated(By.className("bg-primaryPink-500 text-white cursor-pointer  px-8 py-2.5 smobile:text-sm tablet:text-xl rounded-lg justify-center font-bold mb-2.5"),10000))  //Locate save button
        const save_button = await driver.findElement(By.className("bg-primaryPink-500 text-white cursor-pointer  px-8 py-2.5 smobile:text-sm tablet:text-xl rounded-lg justify-center font-bold mb-2.5")) //Find save button in viewport
        await save_button.click() //Click on save button

        //CHECKOUT PAGE - PRESS CHECKOUT BUTTON
        await driver.wait(until.elementLocated(By.className('bg-primaryPink-500 text-white cursor-pointer px-8 smobile:py-3 tablet:py-2.5 text-lg rounded-lg justify-center font-bold mb-2.5'),10000))  //Locate Checkout button
        const checkout_button = await driver.findElement(By.className('bg-primaryPink-500 text-white cursor-pointer px-8 smobile:py-3 tablet:py-2.5 text-lg rounded-lg justify-center font-bold mb-2.5')) //Find Checkout button in viewport
        await checkout_button.click() //Click on Checkout button

        //------------------------POST THIS THE PAYMENT GATEWAY TRIGGERS


    } catch (error) {
        console.log('AN ERROR OCCURRED...')
        console.log(error)
    } finally {
        //await driver.quit()  //Kept this line commented so that window stays open at script end
    }
}) ()