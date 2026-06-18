# Email Masker JavaScript Utility

A simple, lightweight JavaScript function that protects user privacy by masking the middle characters of an email address username with asterisks.

## How It Works

The function keeps the first and last letter of the email username visible, counts the characters in between, and replaces them with an equivalent number of asterisks (`*`). The domain name remains completely untouched.

### Example
* **Input:** `anwrjhanshaik@gmail.com`
* **Output:** `a***********k@gmail.com`

## Code Snippet

```javascript
const email = "anwrjhanshaik@gmail.com";

function emailMasker(email) {
  const index = email.indexOf("@") - 1;
  const portion = email.slice(1, index).length;
  const masked_email = email[0] + "*".repeat(portion) + email.slice(index);
  return masked_email;
}

const func_call = emailMasker(email);
console.log(func_call); // Output: a***********k@gmail.com
```

## Future Improvements
* Add a conditional check to safely handle short email usernames (under 3 characters).
* Add support for masking the domain name (e.g., `gmail.com` to `g****.com`).
