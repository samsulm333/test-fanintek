// soal 1
const readyPairSocks = (input) => {
  let arr = input;
  let readySocks = [];
  let countPairs = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        readySocks.push(arr[i]);
        arr.splice(j, 1);
        countPairs++;
        break;
      }
    }
  }
  //   console.log(readySocks);
  console.log(countPairs);
};

readyPairSocks([5, 7, 7, 9, 10, 4, 5, 10, 6, 5]); //soal contoh
readyPairSocks([10, 20, 20, 10, 10, 30, 50, 10, 20]); //soal 1a
readyPairSocks([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]); //soal 1b
readyPairSocks([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]); //soal 1c
