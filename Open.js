const {Builder, By, Key, until} = require('selenium-webdriver');

async function openFlipkartAndSearch() {
    // Initialize the Chrome browser
    let driver = await new Builder().forBrowser('chrome').build();

    
        // Open Flipkart website
        await driver.get('https://www.flipkart.com/');

        // Maximize the browser window
        await driver.manage().window().maximize();
		
		// click on Login button
		await driver.wait(until.elementLocated(By.xpath("//a[normalize-space()='Login']")), 1000).click()
		
		// Enter Email or Mobile no box
		let enterEmailId = await driver.wait(until.element(By.xpath("//input[@class='r4vIwl BV+Dqf']")), 1000).click()
		
		// Enter Email id
		await enterEmailId.sendKeys('deepalisrivastav1998@gmail.com', Key.RETURN);
		
		// For OTP
		
		const nodemailer = require('nodemailer'); // For email reading
		// Other necessary imports

		async function getOTPFromEmail() {
		    // Use a library like nodemailer or gmail API to retrieve the OTP
		    // Example: Use nodemailer or IMAP client to read latest email
		    let transporter = nodemailer.createTransport({
		        service: 'gmail',
		        auth: {
		            user: 'deepalisrivastava1998@gmail.com',
		            pass: 'Deepalisrisri@22' // Make sure to use an app-specific password
		        }
		    });

		    // Logic to fetch the latest email and extract OTP from its content
		    let otpCode = '123456';  // Example: after fetching email and extracting OTP
		    
		    return otpCode;
		}

		async function loginUsingOTP() {
		    let driver = await new Builder().forBrowser('chrome').build();
		    await driver.get('https://example.com');

		    // Perform actions to enter username and other details if required

		    // Wait for OTP input
		    let otpField = await driver.wait(until.elementLocated(By.xpath("//div[@class='XDRRi5']")), 10000);

		    // Fetch OTP using getOTPFromEmail function
		    let otpCode = await getOTPFromEmail();

		    // Enter OTP in the input field
		    await otpField.sendKeys(otpCode, Key.RETURN);

		    // Wait for login completion
		    await driver.wait(until.urlContains('dashboard'), 10000);
		}

		loginUsingOTP();


		/*
        // Locate the search box
        let searchBox = await driver.wait(until.elementLocated(By.name('q')), 7000);
        
        // Type 'iPhone 15 Pro Max' in the search box and press Enter
        await searchBox.sendKeys('iPhone 15 Pro Max', Key.RETURN);
		
		let mainPage = await driver.getWindowHandle();
		console.log("Main page=" + mainPage);
		
		// click on Apple iPhone 15 Pro Max (Black Titanium, 256 GB)
		await driver.wait(until.elementLocated(By.xpath("//div[normalize-space()='Apple iPhone 15 Pro Max (Black Titanium, 256 GB)']")), 10000).click();

		// we are on new page, move our command to newly open page
		let allPages = await driver.getAllWindowHandles(); // Get handles of all open windows

		for (let page of allPages) {
		    if (page !== mainPage) {
		        await driver.switchTo().window(page); // Switch to the new page
		        break;
		    }
		}
		
		let currentUrl = await driver.getCurrentUrl();
		console.log("current url = " + currentUrl);
		
		let products = await driver.findElements(By.className("U+9u4y")); // Locate elements by class name
		console.log("Number of products: " + products.length); // Print the size of the products list

		for (let product of products) {
		    let productText = await product.getText(); // Retrieve the text of each product element
		    console.log(productText); // Print the text of the product
		}
		
		await driver.wait(until.elementLocated(By.xpath("//button[normalize-space()='Add to cart']")), 10000).click();

		await driver.wait(until.elementLocated(By.xpath("//button[@class='QqFHMw zA2EfJ _7Pd1Fp']")), 10000).click();


}
*/

openFlipkartAndSearch();



