/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
const qr = require('qr-image');
const fs = require('fs');

inquirer
// Promise (An object representing future completion)
.prompt(
    // array of object
    [
        // object
    {
        // properties of object
        type: 'input',
        name: 'url',
        message: 'Enter the URL: ',
        validate: function (value) {
            // Basic validation for URL format
            const valid = /^(https?:\/\/)/.test(value);
            return valid || 'Please enter a valid URL (must start with http:// or https://)';
        }
    }
]

)
// .then() is a method used with Promises. It tells JavaScript what to do after a Promise is fulfilled (i.e., completed successfully).
.then((answers) => {
    // console.log(`You entered: ${answers.url}`);
    const url = answers.url;
    console.log(`You entered: ${url}`);
    
    // Generate QR code as PNG image stream
    const qr_png = qr.image(url,{type:'png'});

    // Save the stream to a file
      const output = fs.createWriteStream('url_qr.png');
    qr_png.pipe(output);

    console.log('QR code saved as url_qr.png');
  })
//   .catch() handles errors if the Promise fails (is rejected):
  .catch((error) => {
    console.error('Error:', error);
  });