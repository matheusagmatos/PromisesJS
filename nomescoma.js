export const filtrarNomes = (lista) => {
    let nomesComA = lista.filter((item) => item.startsWith("A"));
    console.log(nomesComA)
}