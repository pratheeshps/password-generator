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

  if (symbols) {
    const symbolsArray = generateAsciArray(33, 47)
      .concat(generateAsciArray(58, 64))
      .concat(generateAsciArray(91, 96))
      .concat(generateAsciArray(123, 126));

    passkeyArray = [...passkeyArray, ...symbolsArray];
  }

  if (numbers) {
    const numbersArray = generateAsciArray(48, 57);
    passkeyArray = [...passkeyArray, ...numbersArray];
  }

  if (uppercase) {
    const upperLetters = generateAsciArray(65, 90);
    passkeyArray = [...passkeyArray, ...upperLetters];
  }

  if (lowercase) {
    const lowerLetters = generateAsciArray(97, 122);
    passkeyArray = [...passkeyArray, ...lowerLetters];
  }

  const shuffledAsciArray = passkeyArray.sort(() => Math.random() - 0.5);
  const finalstring = shuffledAsciArray.join("");

  return finalstring;
};

export const generatePassword = (config) => {
  const fullstring = generatePasswordString(config);
  return fullstring.substring(0, config.range);
};
