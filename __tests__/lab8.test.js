describe('Basic user flow for SPA ', () => {
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
  });

  // test 1 is given
  it('Test1: Initial Home Page - Check for 10 Journal Entries', async () => {
    const numEntries = await page.$$eval('journal-entry', (entries) => {
      return entries.length;
    });
    expect(numEntries).toBe(10);
  });

  //test 2 is given
  // it('Test2: Make sure <journal-entry> elements are populated', async () => {
  //   let allArePopulated = true;
  //   let data, plainValue;
  //   const entries = await page.$$('journal-entry');
  //   for (let i = 0; i < entries.length; i++) {
  //     data = await entries[i].getProperty('entry');
  //     plainValue = await data.jsonValue();
  //     if (plainValue.title.length == 0) { allArePopulated = false; }
  //     if (plainValue.date.length == 0) { allArePopulated = false; }
  //     if (plainValue.content.length == 0) { allArePopulated = false; }
  //   }
  //   expect(allArePopulated).toBe(true);
  // }, 30000);

  it('Test3: Clicking first <journal-entry>, new URL should contain /#entry1', async () => {
    // implement test3: Clicking on the first journal entry should update the URL to contain “/#entry1”
    const entries = await page.$('journal-entry');

    await entries.click();
    await page.waitForTimeout(1000);
    
    expect(page.url()).toContain('/#entry1');

  });

  it('Test4: On first Entry page - checking page header title', async () => {
    // implement test4: Clicking on the first journal entry should update the header text to “Entry 1” 
    const header = await page.$('h1');
    const property = await header.getProperty('innerText');

    expect(property._remoteObject['value']).toContain('Entry 1');
  });

  it('Test5: On first Entry page - checking <entry-page> contents', async () => {
    const entries = await page.$('entry-page');
  
    const data = await entries.getProperty('entry');
    const plainValue = await data.jsonValue();
    expect(plainValue.title).toMatch('You like jazz?');
    expect(plainValue.date).toMatch('4/25/2021');
    expect(plainValue.content).toMatch("According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.");
    expect(plainValue.image['src']).toMatch('https://i1.wp.com/www.thepopcornmuncher.com/wp-content/uploads/2016/11/bee-movie.jpg?resize=800%2C455');
    expect(plainValue.image['alt']).toMatch('bee with sunglasses');

    /*
     implement test5: Clicking on the first journal entry should contain the following contents: 
        { 
          title: 'You like jazz?',
          date: '4/25/2021',
          content: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.",
          image: {
            src: 'https://i1.wp.com/www.thepopcornmuncher.com/wp-content/uploads/2016/11/bee-movie.jpg?resize=800%2C455',
            alt: 'bee with sunglasses'
          }
        }
      */

  }, 10000);

  it('Test6: On first Entry page - checking <body> element classes', async () => {
    // implement test6: Clicking on the first journal entry should update the class attribute of <body> to ‘single-entry’
    const body = await page.$('body');
    expect(body._remoteObject['description']).toContain('single-entry');
  });

  it('Test7: Clicking the settings icon, new URL should contain #settings', async () => {
    // implement test7: Clicking on the settings icon should update the URL to contain “/#settings”

    const settings = await page.$('img');

    await settings.click();
    await page.waitForTimeout(1000);
    
    expect(page.url()).toContain('/#settings');

  });

  it('Test8: On Settings page - checking page header title', async () => {
    // implement test8: Clicking on the settings icon should update the header to be “Settings”
    const settings = await page.$('h1');
    const property = await settings.getProperty('innerText');

    expect(property._remoteObject['value']).toContain('Settings');
  });

  it('Test9: On Settings page - checking <body> element classes', async () => {
    // implement test9: Clicking on the settings icon should update the class attribute of <body> to ‘settings’
    const body = await page.$('body');
    expect(body._remoteObject['description']).toContain('settings');
  });

  it('Test10: Clicking the back button, new URL should be /#entry1', async() => {
    // implement test10: Clicking on the back button should update the URL to contain ‘/#entry1’
    
    await page.goBack();
    expect(page.url()).toContain('/#entry1');
  });

  it('Test11: Clicking the back button, new URL should be ""', async() => {
    // define and implement test11: Clicking the back button once should bring the user back to the home page
    await page.goBack();
    expect(page.url()).toContain('');
  });

  it('Test12: The header title should be “Journal Entries”', async() => {
    // define and implement test12: When the user if on the homepage, the header title should be “Journal Entries”
    const settings = await page.$('h1');
    const property = await settings.getProperty('innerText');
    expect(property._remoteObject['value']).toContain('Journal Entries');
  });
  
  it('Test13: The body should be empty', async() => {
     // define and implement test13: On the home page the <body> element should not have any class attribute 
     const body = await page.$('body');
     expect(body._remoteObject['description']).toContain('');
  });
 

  it('Test14: Verify URL for entry2', async() => {
    // define and implement test14: Verify the url is correct when clicking on the second entry
    const entries = await page.$$('journal-entry');
    const entry = entries[1];

    await entry.click();
    await page.waitForTimeout(100);
    
    expect(page.url()).toContain('/#entry2');

 });
  
 it('Test15: Verify the attributes of entry2', async() => {
  // define and implement test15: Verify the title is current when clicking on the second entry
  const entry2 = await page.$('h1');
  const property = await entry2.getProperty('innerText');

  expect(property._remoteObject['value']).toContain('Entry 2');
});
  
it('Test16: Verify the attributes of entry2', async() => {
   // define and implement test16: Verify the entry page contents is correct when clicking on the second entry
  const entries = await page.$('entry-page');
  
  const data = await entries.getProperty('entry');
  const plainValue = await data.jsonValue();
  expect(plainValue.title).toMatch('Run, Forrest! Run!');
  expect(plainValue.date).toMatch('4/26/2021');
  expect(plainValue.content).toMatch("Mama always said life was like a box of chocolates. You never know what you're gonna get.");
  expect(plainValue.image['src']).toMatch('https://s.abcnews.com/images/Entertainment/HT_forrest_gump_ml_140219_4x3_992.jpg');
  expect(plainValue.image['alt']).toMatch('forrest running');
});

it('Test17: Test click on h1 brings user back to home page', async() => {
  // Verify that clicking on the Entry 2 title takes you back to home page URL
  const homeButton = await page.$('h1');
  await homeButton.click();

  expect(page.url()).toContain('');
});

it('Test18: Test if h1 has changed to home page', async() => {
  // Verify the page title is Journal Entries
  const homeButton = await page.$('h1');
  const property = await homeButton.getProperty('innerText');

  expect(property._remoteObject['value']).toContain('Journal Entries');
});

it('Test19: Clicking the back button, new URL should be /#entry2', async() => {
  // implement test19: Clicking on the back button should update the URL to contain ‘/#entry2’
  
  await page.goBack();
  expect(page.url()).toContain('/#entry2');
});

it('Test20: Test if h1 has changed beack to Entry 2', async() => {
  // Verify the page title is Entry 2
  const entry2 = await page.$('h1');
  const property = await entry2.getProperty('innerText');

  expect(property._remoteObject['value']).toContain('Entry 2');
});

});