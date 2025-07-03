
# ✅ Express.js Field Validation Cheat Sheet

Use these validations inside your Express.js route handlers to validate incoming user input.

---

## 🔹 1. Name Validation
**Only letters and spaces, minimum 2 characters**
```js
const nameRegex = /^[a-zA-Z\s]{2,}$/;
if (!nameRegex.test(name)) {
  return res.status(400).send("Name must contain only letters and spaces.");
}
```

---

## 🔹 2. Email Validation
**General-purpose email format check**
```js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  return res.status(400).send("Invalid email address.");
}
```

---

## 🔹 3. Password Validation
**At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character**
```js
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
if (!passwordRegex.test(password)) {
  return res.status(400).send("Password must be 8+ characters with uppercase, lowercase, number, and special character.");
}
```

---

## 🔹 4. Phone Number Validation
**10 to 15 digits, optional "+"**
```js
const phoneRegex = /^\+?[0-9]{10,15}$/;
if (!phoneRegex.test(phone)) {
  return res.status(400).send("Invalid phone number.");
}
```

---

## 🔹 5. Username Validation
**3–16 characters, only letters and numbers**
```js
const usernameRegex = /^[a-zA-Z0-9]{3,16}$/;
if (!usernameRegex.test(username)) {
  return res.status(400).send("Username must be 3–16 characters and contain only letters and numbers.");
}
```

---

## 🔹 6. Postal Code (ZIP)
**US ZIP: 5 or 9 digits**
```js
const zipRegex = /^\d{5}(-\d{4})?$/;
if (!zipRegex.test(zip)) {
  return res.status(400).send("Invalid ZIP code.");
}
```

---

## 🔹 7. URL Validation
**HTTP/HTTPS URLs**
```js
const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z\.]{2,6})([\/\w .-]*)*\/?$/;
if (!urlRegex.test(website)) {
  return res.status(400).send("Invalid URL.");
}
```

---

## 🔹 8. Date of Birth / Age (18+)
**User must be at least 18 years old**
```js
const birthDate = new Date(dob);
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}
if (age < 18) {
  return res.status(400).send("You must be at least 18 years old.");
}
```

---

## 🧩 Optional: express-validator Example
```bash
npm install express-validator
```
```js
const { body, validationResult } = require('express-validator');

app.post("/register", [
  body("email").isEmail(),
  body("password").isStrongPassword(),
  body("name").isAlpha('en-US', {ignore: ' '}).isLength({ min: 2 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Proceed...
});
```
