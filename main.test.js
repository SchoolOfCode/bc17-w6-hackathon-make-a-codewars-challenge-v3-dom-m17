import { test, expect } from 'vitest'
import calculatePostiveAndNegative from './main'

const arrays = [
    [[3, -7, 2], [5, -7]],
    [[8, 1, 5, 4], [18, 0]],
    [[-9.6, 12, 3, -2, 6], [21, -11.6]],
    [[-4, -5, -2, -7, -3], [0, -21]],
    [[-3, 7, -4], [7, -7]],
    [[2, -8, 10, -3], [12, -11]],
    [[-1, 4, -9, 5, 6], [15, -10]],
    [[7, 3, 2, 8, 4, 9], [33, 0]],
    [[-5, 3, -6.4], [3, -11.4]],
    [[1.9, -2, 4, -7, 3, -1, 8], [16.9, -10]]
];

test("If the input is not an array, the function should error. Testing for a string.", () => {
    expect(() => calculatePostiveAndNegative("string")).toThrowError()
});

test("If the input is not an array, the function should error. Testing for a number.", () => {
    expect(() => calculatePostiveAndNegative(10)).toThrowError()
});

test("If the input is not an array, the function should error. Testing for an object.", () => {
    expect(() => calculatePostiveAndNegative({"key": "value"})).toThrowError()
});

test("If the input array does not exclusively contain numbers, the function should error. Testing for a string.", () => {
    expect(() => calculatePostiveAndNegative([0, 1, "string"])).toThrowError()
});

test("If the input array does not exclusively contain numbers, the function should error. Testing for a array.", () => {
    expect(() => calculatePostiveAndNegative([2, [3, 4], 5])).toThrowError()
});

test("An empty array as an input should return an empty arry", () => {
    expect(calculatePostiveAndNegative([])).toEqual([])
})

test.each(arrays)("Add positive numbers together and negative numbers together from %o and return an array with the totals %o", (nums, totals) => {
    expect(calculatePostiveAndNegative(nums)).toEqual(totals)
})
