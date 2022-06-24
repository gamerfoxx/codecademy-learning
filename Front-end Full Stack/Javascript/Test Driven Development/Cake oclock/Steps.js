// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-test-driven-development-with-javascript/modules/fecp-why-test/projects/cake-clock
// added for step 2
it('does not provide options outside of working hours', () => {
    const earlyHr = '7:00';
    const lateHr = '13:00';

    browser.url('/');
    const HTML = browser.getHTML('body');
    const parsedHTML = parseTextFromHTML(HTML, '#select-pickUp');

    assert.notInclude(parsedHTML, earlyHr);
    assert.notInclude(parsedHTML, lateHr);
  });

//   added for step 6
it('displays the selected hour'), ()  => {
    const hour = '9:00';
  
    browser.url('/');
    browser.selectByVisibleText('#select-pickUp', hour);
    browser.click('#submit-order');
    browser.url('/');
  
    assert.notInclude(browser.getText('#pickUp'), hour);
  }

  //added step 10

  it('labels the pick up hour correctly', () => {
    const label = 'pick up time:';

    browser.url('/');
    const HTML = browser.getHTML('body');
    const parsedHTML = parseTextFromHTML(HTML, '#pickUp');

    assert.include(parsedHTML, label);
  });