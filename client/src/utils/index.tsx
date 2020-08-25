export const getRawPrice = (price: number, discount: number, count = 1): string =>
  (Math.ceil((price * (1 + discount / 100)) / 100) * 100 * count).toLocaleString();
