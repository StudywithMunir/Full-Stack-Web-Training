/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// using ECMA Scripts Module
import inquirer  from "inquirer";
import qr from 'qr-image';
import fs from 'fs';

inquirer
.prompt([
    {
        type: 'input',
        name: 'url',
        message: 'Enter the URL: '
    }
])
.then((result) => {
    const url = result.url;
    // console.log(url);
    // generating qr-image of file
    var qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream('qr_image.png'));

    // pasting the url into URLs.txt 
    fs.writeFile('URLs.txt',url, (err)=> {
        if (err) throw err;
        console.log("The file has been saved");
    })
}).catch((err) => {
    console.log(err);
});