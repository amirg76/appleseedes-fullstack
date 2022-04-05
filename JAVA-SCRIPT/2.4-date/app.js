function datesConvert() {
  let myDate = new Date();
  let myMonth = new Date();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dayConvert = weekdays[myDate.getDay()];
  let monthConvert = monthNames[myMonth.getMonth()];
  return `Today is ${dayConvert} the ${myDate.getDate()} of ${monthConvert} , ${myDate.getFullYear()}`;
}
console.log(datesConvert());
