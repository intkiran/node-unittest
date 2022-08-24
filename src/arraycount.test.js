const arraycount = require('./arraycount');

describe('Test Cases for Array Count', () => {
  it('Test cases for Empty Array', () => {
    expect(arraycount([])).toEqual({});

  });
  it('Test for single value', () => {
    expect(arraycount([1])).toEqual({ "1": 1 });

  });
  it('Test for multiple types values', () => {
    expect(arraycount([1, "abc", 1])).toEqual({ "1": 2, "abc": 1 });

  });
  it('Test cases for null data', () => {
    expect(() => {
      arraycount(null);
    }).toThrow(TypeError);

  });
  it('Error cases for null data', () => {
    expect(() => {
      arraycount(null);
    }).toThrow(TypeError);

  });

  it('Error cases for empty data', () => {
    expect(() => {
      arraycount('');
    }).toThrow(TypeError);

  });
  it('Error cases for undefined data', () => {
    expect(() => {
      arraycount(undefined);
    }).toThrow(TypeError);

  });
})
