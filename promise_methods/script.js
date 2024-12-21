const delayedPromise = (values, time) => {
  const promises = values.map(
    (value) =>
      new Promise((resolve) => {
        setTimeout(() => resolve(value), time);
      })
  );

  return Promise.all(promises);
};

delayedPromise([1, 2, 3, 4, 5], 1000).then((values) =>
  console.log("I: " + values)
);

const randomDelay = (values) => {
  const promises = values.map(
    (value) =>
      new Promise((resolve) => {
        setTimeout(() => resolve(value), Math.random() * 1000);
      })
  );

  return Promise.race(promises);
};

randomDelay([1, 2, 3, 4, 5]).then((value) => console.log("II: " + value));
