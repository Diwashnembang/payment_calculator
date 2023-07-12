const date = new Date();
const substractTime = (startTime, endTime) => {
  // arguments must be object
  if (typeof startTime !== "object" || typeof endTime !== "object")
    console.log("args must be object");
  const startTimeHrs = hrsInSec(+startTime.hrs);
  const endTimehrs = hrsInSec(+endTime.hrs);
  const startTimeMin = minInSec(+startTime.min);
  const endTimeMin = minInSec(+endTime.min);

  const totalStartTimeInSec = startTimeHrs + startTimeMin;
  const totalEndTimeInSec = endTimehrs + endTimeMin;
  return (totalEndTimeInSec - totalStartTimeInSec) / (60 * 60);
};
function hrsInSec(hrs) {
  return hrs * 60 * 60;
}
function minInSec(min) {
  return min * 60;
}

export const getTime = () => {
  return { hrs: date.getHours(), min: date.getMinutes() };
};
export default substractTime;
