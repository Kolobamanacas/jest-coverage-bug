import { sum } from "./sum";

describe('sum', () => {
  it('Returns 8 when called with 3 and 5', () => {
    expect(sum(3, 5)).toBe(8);
  })
})
