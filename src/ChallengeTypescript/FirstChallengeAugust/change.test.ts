import minCoinsToMakeChange from "./change";


describe('Minimum coins to make change', () => {
  test('Empty coins array', () => {
    const coins: number[] = [];
    const result = minCoinsToMakeChange(coins);
    expect(result).toBe(1);
  });

  test('Coins with unique values', () => {
    const coins = [1, 5, 1, 10];
    const result = minCoinsToMakeChange(coins);
    expect(result).toBe(3);
  });

  test('Coins with duplicates', () => {
    const coins = [1, 1, 1, 2, 5, 5];
    const result = minCoinsToMakeChange(coins);
    expect(result).toBe(16);
  });

  test('Unordered coins', () => {
    const coins = [5, 1, 10, 2];
    const result = minCoinsToMakeChange(coins);
    expect(result).toBe(4);
  });

  test('Unordered coins', () => {
    const coins = [5, 1, 10, 2, 2];
    const result = minCoinsToMakeChange(coins);
    expect(result).toBe(21);
  });
});
