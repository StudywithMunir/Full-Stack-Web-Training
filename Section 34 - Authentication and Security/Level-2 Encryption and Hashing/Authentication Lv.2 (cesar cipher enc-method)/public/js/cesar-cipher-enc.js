// GPT generated function
export function caesarEncrypt(text, shift = 5) {
  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      // A-Z
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      // a-z
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
      // 0-9
      if (code >= 48 && code <= 57) {
        return String.fromCharCode(((code - 48 + shift) % 10) + 48);
      }
      return char; // Keep other characters unchanged
    })
    .join("");
}

export function caesarDecrypt(text, shift = 5) {
  return caesarEncrypt(text, 26 - shift); // reverse shift
}
