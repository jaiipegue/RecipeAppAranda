export const getCalificationRandom = (min: number, max: number) => {
    const precision = Math.pow(10, 1);
    min = min * precision;
    max =max * precision;
    const score = (Math.floor(Math.random()*(max-min+1) + min) / precision);
    return score
  };