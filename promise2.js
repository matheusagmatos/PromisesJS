function somar (a, b) {
   console.log("ENTROU NA FUNCTION 'SOMAR'")
   let p = new Promise((resolve, reject) => {
    if((a+b) % 2 ==0){
      console.log("ENTROU NO PRIMEIRO IF")
        resolve;
    }else{
      console.log("ENTROU NO SEGUNDO IF")
        reject;
    }
   }) 

   p.then((data) => {
    console.log("Executou o THEN")
    callBackSuccess(data);
   }).catch((data) => {
    console.log("Executou o CATCH")
    callBackError(data);
   })
}

function callBackSuccess(promise) {
  console.log("OPERAÇÃO CONCLUÍDA COM SUCESSO!")
}

function callBackError(promise) {
  console.log("OCORREU UM ERRO DURANTE A OPERAÇÃO")
}

somar(10,4)