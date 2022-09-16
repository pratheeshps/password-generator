function generateAsciArray(start, end) {
  const arrayList = [];
  for (let i = start; i <= end; i++) {
    let char = String.fromCharCode(i);
    arrayList.push(char);
  }
  return arrayList;
}

export const generatePasswordString = ({
  symbols,
  numbers,
  uppercase,
  lowercase
}) => {
  let passkeyArray = [];
  let randomString = [];
  
  if (lowercase) {
    const lowerLetters = generateAsciArray(97, 122);
    randomString.push(lowerLetters[Math.floor(Math.random() * lowerLetters.length)]);
    passkeyArray = [...passkeyArray, ...lowerLetters];
  }
  
  if (symbols) {
    const symbolsArray = generateAsciArray(33, 47)
      .concat(generateAsciArray(58, 64))
      .concat(generateAsciArray(91, 96))
      .concat(generateAsciArray(123, 126));
    randomString.push(symbolsArray[Math.floor(Math.random() * symbolsArray.length)]);
    passkeyArray = [...passkeyArray, ...symbolsArray];
  }

  if (numbers) {
    const numbersArray = generateAsciArray(48, 57);
    randomString.push(numbersArray[Math.floor(Math.random() * numbersArray.length)]);
    passkeyArray = [...passkeyArray, ...numbersArray];
  }

  if (uppercase) {
    const upperLetters = generateAsciArray(65, 90);
    randomString.push(upperLetters[Math.floor(Math.random() * upperLetters.length)]);
    passkeyArray = [...passkeyArray, ...upperLetters];
  }

  
  const shuffledAsciArray = passkeyArray.sort(() => Math.random() - 0.5);
  const finalstring = randomString.join("").concat(shuffledAsciArray.join(""));

  return finalstring;
};

export const generatePassword = (config) => {
  const fullstring = generatePasswordString(config);
  return fullstring.substring(0, config.range);
};


export const strengthMeter = (config) => {
    const selectedValues = Object.keys(config).map(val => config[val]);
    const length = selectedValues.filter(value => value).length;
    const conf = {
        0: null,
        1: "WEAK",
        2: "FAIR",
        3: "GOOD",
        4: "STRONG"
    }
    return conf[length];
}
