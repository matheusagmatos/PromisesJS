   // //CREATING A PROMISSE
    // const p = new Promise((resolve, reject) => {
            
    //     const nome = "Matheus";

    //     if(nome === "Matheus"){
    //         resolve("Nome encontrado!")
    //     }else{
    //         reject("Nome não encontrado")
    //     }
    // });

    // p.then((data) => {
    //     console.log(data)
    // })

    // //Encadeamento de then's
    // //PROMISSE 02
    // const p2 = new Promise((resolve, reject) => {
            
    //     const nome = "Lucas";

    //     if(nome === "Lucas"){
    //         resolve("Nome encontrado!")
    //     }else{
    //         reject("Nome não encontrado")
    //     }
    // });

    // p2.then((data) => {
    //     return data.toUpperCase();
    // }).then((stringModificada) => {
    //     console.log(stringModificada)
    // })


    // //PROMISSE 03
    // const p3 = new Promise((resolve, reject) => {
            
    //     const nome = "Adam";

    //     if(nome === "Lucas"){
    //         resolve("Nome encontrado!")
    //     }else{
    //         reject()
    //     }
    // });

    // p3.then((data) => {
    //     return data.toUpperCase();
    // }).catch((err) => {
    //     console.log("Aconteceu um erro: " + err)
    // })

    //RESOLVENDO VÁRIAS PROMISES
function exep1 (){
    const promise01 = new Promise((resolve, reject) => {
        resolve(alert("P1 RESOLVIDA!"))
    })
    promise01.then(() => {
        document.getElementById('conf01').innerHTML="<p><b>Promise 01</b> executada com sucesso!</p>"
    })
}

function exep2 (){
    const promise02 = new Promise((resolve, reject) => {
        resolve(alert("P2 RESOLVIDA!"))
    })
    promise02.then(() => {
        document.getElementById('conf02').innerHTML="<p><b>Promise 02</b> executada com sucesso!</p>"
    })
}

function exep3 (){
    const promise03 = new Promise((resolve, reject) => {
        resolve(alert("P3 RESOLVIDA!"))
    })
    promise03.then(() => {
        document.getElementById('conf03').innerHTML="<p><b>Promise 03</b> executada com sucesso!<p>"
    })
}
    // const resolveAll = Promise.all([promise01, 
    //     promise02, promise03]).then((data) => {console.log(data)})