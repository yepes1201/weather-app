// Function getTime() NOT in use.
export const getTime = () => {
  let time = "";
  const h = new Date().getHours();
  const m = new Date().getMinutes();
  if (h >= 0 && h < 10) {
    time += "0" + h;
  } else {
    time += h;
  }
  if (m >= 0 && m < 10) {
    time += ":0" + m;
  } else {
    time += ":" + m;
  }
  return time;
};
