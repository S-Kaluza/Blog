const addValues = (a, b) => {
    return a + b;
}

it('Add two values', () => {
    expect(addValues(1, 2)).toBe(3);
});
