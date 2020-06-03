// test file, whatever test goes in here
// red green refactor
// red: failing test

const busyStudent = require("../src/index");

test("should return an integer", () => {
  expect(typeof busyStudent([1, 2, 3], [3, 2, 7], 4)).toBe("number");
});

// test("should throw an error if length of arrays are not equal", () => {
//     // const error = new Error("ERROR LOL")
//   expect(busyStudent([1, 2, 3], [3, 2], 4)).toThrowError(Error);
// });

test("should return one student", () => {
  expect(busyStudent([4], [4], 4)).toEqual(1);
});

test("should return 0", () => {
  expect(busyStudent([4], [4], 5)).toEqual(0);
});

// Input: (startTime = [1, 1, 1, 1]), (endTime = [1, 3, 2, 4]), (queryTime = 7);
// Output: 0;

test("should return 0", () => {
  expect(busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7)).toEqual(0);
});

Input: (startTime = [9, 8, 7, 6, 5, 4, 3, 2, 1]),
  (endTime = [10, 10, 10, 10, 10, 10, 10, 10, 10]),
  (queryTime = 5);
Output: 5;

test("should return 5", () => {
  expect(
    busyStudent(
      [9, 8, 7, 6, 5, 4, 3, 2, 1],
      [10, 10, 10, 10, 10, 10, 10, 10, 10],
      5
    )
  ).toEqual(5);
});
