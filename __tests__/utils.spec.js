const { createDebugger } = require('server/utils.js');


describe("Debug logs", () => {
  
  test("it should create a debug function", () => {
    // actual test

    const debug = createDebugger((...args) => console.log(...args));

    expect(typeof debug).toBe('function');

    console.log('AAA');

    debug('abc: %o', {test:1});
    debug('abc: %s', 'This is a good day');
  });
});