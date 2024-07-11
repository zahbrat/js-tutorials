let a = 0;
while (a <= 10) {
  console.log(a);
  a++;
}

for (let i = 2; i <= 20; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`7 * ${i} = ${i * 7}`);
}

let b = 1;
while (b < 6) {
  console.log(b);
  b++;
}

for (let i = 1; i < 11; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

let n = 15;
for (let i = 0; i < n; i++) {
  if (i >= n) {
    break;
  }
  console.log(i);
}

let c = 1;

while (c <= 20) {
  if (c % 3 === 0) {
    c++;
    continue;
  }
  console.log(c);
  c++;
}
