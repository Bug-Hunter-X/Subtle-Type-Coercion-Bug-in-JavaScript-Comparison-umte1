function foo(x) {
  if (x === null) {
    return 0; 
  } else if (typeof x === 'number' && x < 0) {
    return -1; 
  } else if (typeof x === 'number' && x >= 0) {
    return 1; 
  } else {
    return NaN; // Handle non-numeric cases
  }
}

console.log(foo(null)); // 0
console.log(foo(-1)); // -1
console.log(foo(0)); // 1
console.log(foo(1)); // 1
console.log(foo('0')); // NaN
console.log(foo('a')); // NaN