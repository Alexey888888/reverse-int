module.exports = function reverse (n) {
  n = Math.abs(n);
  n = String(n);
  let result = '';
  let i = 0;
  while (i < n.length) {
    result = n[i] + result;
    i = i + 1;
  }
  return result;
}
