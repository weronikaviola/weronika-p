export function generateRandom(max) {
  return Math.floor(Math.random() * max);
};

export function translateToBin(string) {
  if (!string) return;
  let text = '';
  for (let i = 0; i < string.length; i++) {
    let letter = charToBinary(string[i]);
    if (i < string.length - 1) letter += ' ';
    text += letter;
  }
  return text;
}

function charToBinary(char) {
  char = charToAscii(char);
  char = char.toString(2);
  return char.padStart(8, '0');
}

function charToAscii(char) {
  return char.charCodeAt(0);
}

