// soal 2
const countWord = (input) => {
  let wordArray = input.split(" ");
  let specialChar = ["[", "]", "*", "_", "=", "&", "(", "!"];
  let wordWithSpecChar = [];

  for (let i = 0; i < wordArray.length; i++) {
    for (let j = 0; j < specialChar.length; j++) {
      let result = wordArray[i].includes(specialChar[j]);

      if (result == true) {
        wordWithSpecChar.push(wordArray[i]);
      }
    }
  }

  let output = wordArray.length - wordWithSpecChar.length;

  console.log(
    `Output : ${output} (Karena kata ${wordWithSpecChar.join(
      ", "
    )} memiliki special karakter)`
  );
};

countWord("kemarin sophia per[gi ke mall"); //soal contoh
countWord("Saat meng*ecat tembok, agung dib_antu oleh Raihan"); //soal 2a
countWord("Berapa u(mur minimal[ untuk !mengurus ktp?"); //soal 2b
countWord("Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda"); //soal 2c
