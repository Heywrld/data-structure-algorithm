const everyone = [
  'dory', 'bruce', 'marlin', 'nemo', 'fill', 'nigel',
  'squirt', 'darla'
];

const large = new Array(1000000).fill('nemo');

function findNemo(array : any[]) {
  for (let i = 0; i < array.length; i++ ) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo(large); // O(n) Linear Time