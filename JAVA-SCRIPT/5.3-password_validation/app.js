function passwordsCheckIf(password) {
  if (password.length >= 7) console.log("Strong");
  else console.log("Weak");
}
function passwordsCheckTer(password) {
  password.length >= 7 ? console.log("Strong") : console.log("Weak");
}
function passwordsCheckAnd(password) {
  let result = password.length >= 7 && true;
  result ? console.log("Strong") : console.log("Weak");
}

passwordsCheckIf("12345678");
passwordsCheckTer("123456");
passwordsCheckAnd("123456789");

function passwordsAdvanced(password) {
  let toUpper = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i].toUpperCase()) {
      toUpper = true;
    }
  }

  if (password.length >= 7 && toUpper) return console.log(" Very Strong");
}
passwordsAdvanced("abcdefgHij");
