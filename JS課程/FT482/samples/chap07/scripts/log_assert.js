function circle(radius) {
  console.assert(typeof radius === 'number' && radius > 0,
    '參數radius不是正數');
  return radius * radius * Math.PI;
}

console.log(circle(-5));
