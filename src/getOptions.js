const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const shuffle = (array) => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getOptions = (options) => {
  const size = randomBetween(4, 7);
  const shuffledOptions = shuffle(options);
  const subset = shuffledOptions.slice(0, size);
  return subset;
};
