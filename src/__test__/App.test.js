import React from "react";
import substractTime from "../timeOperation";
import { getTime } from "../timeOperation";
import { getEndTime } from "../getEndTime";
const userLocationmockObj = {
  lat: 19,
  long: 20,
};

const userWorkLocationMockObj = {
  lat: 40,
  long: 20,
};
test("time substraction works in 12hrs format only hours", () => {
  expect(substractTime({ hrs: "6", min: "0" }, { hrs: "7", min: "0" })).toBe(1);
});

test("time substraction works in 24hrs format only hours ", () => {
  expect(substractTime({ hrs: "20", min: "0" }, { hrs: "24", min: "0" })).toBe(
    4
  );
});

test("time substractio works with hours and minute ", () => {
  expect(substractTime({ hrs: "20", min: "30" }, { hrs: "24", min: "0" })).toBe(
    3.5
  );
});

test("returns correct end time", () => {
  const time = getTime();
  expect(
    getEndTime(userLocationmockObj, userWorkLocationMockObj)
  ).toStrictEqual(time);
});

test("doesn't return end time if user is in work location", () => {
  expect(getEndTime(userLocationmockObj, userLocationmockObj)).toBe(
    "still calculating pay"
  );
});
