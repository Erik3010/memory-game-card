export default (array) => {
  let result = JSON.parse(JSON.stringify(array));

  result.forEach((_, index) => {
    const randomIndex = ~~(Math.random() * result.length);

    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  });

  return result;
};
