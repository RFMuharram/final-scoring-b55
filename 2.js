let arr = ["u", "D", "m", "w", "b", "a", "y", "s", "i", "s", "w", "a", "e", "s", "e", "o", "m", " ", " "];


function sortArray(arr) {
    let sentence = "Dumbways is awesome";
    let result = [];
  
    for (let char of sentence) {  
      // mengambil elemen-elemen dari sentence untuk di assign kedalam char disetiap loopingan
      let index = arr.indexOf(char);
      // untuk mengembalikan nilai dari char yang dicheck pada arr jika tidak ditemukan akan bernilai -1
      if (index !== -1) {
        result.push(char);
        // untuk menambahkan nilai char ke dalam result 
        arr.splice(index, 1);
      }
    }
  
    return result.join('');
  }
  
  console.log(sortArray(arr));