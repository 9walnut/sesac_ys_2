const crypto = require("crypto");

function createHashedPwSalt(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  console.log(salt);
  const iterations = 100;
  const keylen = 64;
  const digest = "sha512";
  return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString("base64");
  // 암호화할 문자열, salt, 반복횟수, 키 길이, 알고리즘
}

function comparePw(pw, salt) {
  console.log(salt);
  const iterations = 100;
  const keylen = 64;
  const digest = "sha512";
  return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString("base64");
}

const input = "1234";

console.log(createHashedPwSalt("1234"));
console.log(createHashedPwSalt("1234"));

const db_salt =
  "oHN5pOS9rQtXoIDNdYXcuOZMoIsv9nremrWr5g3fBLEN7QQ9MvPj1MfsjAlu+0+0wTMbPZ5ODTjvQoSZ/Z2RCw==";
const dbPwsalt = "0goKkYoPLRX8iOVJljWDGg==";
console.log(comparePw(input, dbPwsalt) == db_salt);
