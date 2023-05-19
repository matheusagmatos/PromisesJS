export const invert = (n) => {
    let vetor = [];
    let nToString = String (n);
    let cont;
    for(let i = 0; i < nToString.length; i++){
        vetor[nToString.length - i] = nToString[i];
    }
    console.log("The inverted number is: " + vetor)
}