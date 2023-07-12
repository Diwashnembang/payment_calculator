import React from "react";
import substractTime from "../timeOperation";
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
