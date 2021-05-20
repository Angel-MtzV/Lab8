# Lab8_Starter
Partners
- Angel Martinez 
- Amal Kaduwela

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No, the messaging feature seems interconnected with a lot of other features, and therefore cannot be tested in isolation.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
Yes because that seems like a single function that can be tested independently of the entire app.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
If headless = True, no browser will show up when running tests

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
Call "router.setState('settings', false);" after the await line
