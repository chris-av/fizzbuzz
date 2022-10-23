function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'fizz buzz'
  if (num % 3 === 0) return 'fizz'
  if (num % 5 === 0) return 'buzz'
  return num;
}


const args = process.argv.slice(2);

if (args.length !== 1) { throw new Error('provide one argument [int]'); }

const n = parseInt(args[0]);


for (let i = 0; i < n; i++) {
  console.log( fizzbuzz(i) );
}



