
const email = "anwrjhanshaik@gmail.com";
function emailMasker(email) {
  const index = email.indexOf("@")-1;
  const portion = email.slice(1, index).length;
  const masked_email = email[0] + "*".repeat(portion) + email.slice(index);
  return masked_email;
}

const func_call = emailMasker(email);
console.log(func_call);
