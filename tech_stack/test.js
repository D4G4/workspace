var b = (a, b) => {
console.log(a + b);
return ((c) => { console.log('this is  '); console.log(c) });
}

b(21, 22)(2);
