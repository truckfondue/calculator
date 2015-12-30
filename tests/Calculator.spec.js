require('../src/es6/Calculator');

describe('Calculator', () => {
  it('should be available as an export', () => {
    // console.log(calculator)
    expect(typeof calculator).toBe('object');
  })
  it('should be zero upon load', () => {
    expect(calculator.answer.value).toBe('undefined');
  });
});
