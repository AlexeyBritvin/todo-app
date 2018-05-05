export function getRandom (min=0, max=10000) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
