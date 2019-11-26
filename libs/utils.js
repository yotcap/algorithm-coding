// 随机数组（无序）
function getRandomArr (n, min, max) {
  let res = [];
  n = +n || 5;
  min = +min || 0;
  max = +max || 100;
  for (let i=0; i<n; i++) {
    res.push(Math.floor(Math.random() * (max - min) + min));
  }
  return res;
}

module.exports = {
  getRandomArr,
}
