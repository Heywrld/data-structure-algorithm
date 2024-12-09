const everyone = [
  'dory', 'bruce', 'marlin', 'nemo', 'fill', 'nigel',
  'squirt', 'darla'
];

function findNemo(array : any[]) {
  for (let i = 0; i < array.length; i++ ) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo(everyone);