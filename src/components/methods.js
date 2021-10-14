function PadZeros (number){
    let stringedNumber = number.toString();
    return '#' + stringedNumber.padStart(3,'0');
}

function BigLetterFirst (string){
    let stringArray = string.split('');
    stringArray[0] = stringArray[0].toUpperCase();
    return stringArray.join('');
}
function BigLetterAll(string){
    let stringArray = string.split('');
    let newStringArray = stringArray.map(letter => letter.toUpperCase())
    return newStringArray.join('');
}
export {PadZeros, BigLetterFirst, BigLetterAll};