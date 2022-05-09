const lessOrGreater10 = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 10) resolve();
    else reject();
  });
};
lessOrGreater10(19)
  .then(() => {
    console.log("greater then 10");
  })
  .catch(() => {
    console.log("less then 10");
  });
