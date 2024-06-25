function printInvertedTriangle(n) {
    for (let i = 0; i < n; i++) {
      let row = '';
      if (i === 0) {
        row = '#    +    #    +    #';
      } else if (i === 1) {
        row = '  +    +    +    +';
      } else if (i === 2) {
        row = '     #    +    #';
      } else if (i === 3) {
        row = '        +    +';
      } else {
        row = '           #';
      }
      console.log(row);
    }
  }
  
  printInvertedTriangle(5);