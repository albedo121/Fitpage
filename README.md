# Fitpage Assignment Task

## Description
This is a test assignment task for fitpage. The problem statement is to write a simple test automation flow in any language to handle the happy flow from selection of an event on the home page up until the payments page. Test site- https://www.indiarunning.com/

## Installation and Running script
### Steps to Run
1. Do a git pull and install all npm packages using command: 
```bash
    npm install
```
2. Run script using command:
```bash
    node index.js
```
4. The script runs on Firefox browser by default. To run it in chrome browser change browser name in script at line 17.
```bash
    driver = await new Builder().forBrowser(Browser.CHROME).build()
```
4. During script execution make sure to enter the OTP manually and do not press anything after that as the script continues automatically. Make sure to enter the desired phone number at line 13 in script
5. As asked in task, the script will only work until the payment gateway is triggered.
6. Before running the script please make sure that on the website all the personal information is filled already.
7. For this assignment i am selecting event 'New Year Running Challenges 2025' from home page. The script will fail incase that event no longer exists so keep that in mind. In case u want to change the event then you can modify the code from line 24,25 in script.
