// run `node index.js` in the terminal

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log('amazon ');
  else if (i % 3 === 0) process.stdout.write('google ');
  else if (i % 5 === 0) process.stdout.write('facebook');
  else process.stdout.write(`${i} `);
}
