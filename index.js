import {bomDia} from './bomdia.js';
import {invert} from './invertido.js';
import {filtrarNomes} from './nomescoma.js';
// console.log('1 - ADITION' /n);
// console.log('2 - SUBTRACT' /n);
// console.log('1 - DIVIDE' /n);
// console.log('1 - MULTIPLY' /n);

invert(456);

filtrarNomes(['Matheus','Ana','joão','Larissa','Agenor']);

//JSON Javascript Object Notation
let pessoa = {
    nome: "Matheus",
    idade: 24,
    sexo: 'masculino',
    endereco: {
        rua: 'rua da mooca',
        numero: 2369
    }
}
//JSON Javascript Object Notation
let concessionaria = {
    cnpj: "23854245-00",
    endereco: {
        rua: "rua orbille derby",
        numero: 234,
        bairro: 'Mooca'
    },
    veiculos: [
        {
          marca: 'Ford',
          modelo: 'Ecosport',
          anoFabricacao: 2018 
        },
        {
          marca:'Chevrolet',
          modelo: 'Onix',
          anoFabricacao: 2020
        },
        {
          marca: 'Volksvagem',
          modelo: 'Nivus',
          anoFabricacao: 2020,
        }
    ]
}
//HOW TO ACESS A JSON OBJECT
console.log("His name is " + pessoa["nome"] 
            + " sua idade é " + pessoa.idade
            + " e seu cep é " + pessoa.cep);

console.log(`My name is ${pessoa.nome}, i'm ${pessoa.idade} 
            and i live in ${pessoa.endereco.rua}
            number ${pessoa.endereco.numero} at São Paulo, Brazil`)

for (let veiculo of concessionaria.veiculos) {
        console.log(`Marca: ${veiculo.marca}`);
        console.log(`Modelo: ${veiculo.modelo}`);
        console.log(`Ano de Fabricação:${veiculo.anoDeFabricacao}`);
    }
                
