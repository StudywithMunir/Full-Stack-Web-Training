const Pi = 3.14;
const cube = 3;

function doublePi() {
    return Pi * 2;
}

function triplePi() {
    return Pi * 3;
}

// since export default only exports one variable we can pass multiple parameters inside {} and functions inside it as well
export {Pi, cube, doublePi,triplePi};