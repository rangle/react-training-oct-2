function assertIsNumber(a) {
  if (typeof a !== 'number') {
    throw new Error('area only accepts numbers are arguments');
  }
}

function area(a, b) {
  assertIsNumber(a);

  if (a !== undefined && b !== undefined) {
    assertIsNumber(b);

    return a * b;
  }

  return Math.PI * a * a;
}

// Describing what we are testing
// what is It suppose to do
// assert
describe('area', () => {
  it('should calculate the area of a rectangle', () => {
    const result = area(3, 4);
    expect(result).toBe(12);
  });

  it('should calculate the area of a circle', () => {
    const result = area(3);
    expect(result).toBe(Math.PI * 3 * 3);
  });

  it('should calculate area only for numbers', () => {
    expect(() => {
      area('2', '3');
    }).toThrowError('area only accepts numbers are arguments');
  });
});
