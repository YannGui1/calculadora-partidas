const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



let vitoria;
let derrota;

const resultado = {
  saldo: "",
  rank: ""
} 

const question = (question) => {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer)
      })
    })
}

const main = async () => {
    vitoria = await question('Quantas Vitórias? ');
    derrota = await question('Quantas Derrotas? ');
    
    resultado.saldo = vitoria - derrota;

    rankDoHeroi(resultado.saldo);
    rl.close()
}

function rankDoHeroi(saldo){
    if (saldo <= 10 ){
        resultado.rank = "Ferro"
    } 
    else if (saldo > 10 && saldo <= 20){
        resultado.rank = "Bronze"
    }
    else if (saldo > 20 && saldo <= 50){
        resultado.rank = "Prata"
    }
    else if (saldo > 50  && saldo <= 80){
      resultado.rank = "Ouro"
    }
    else if (saldo > 80 && saldo <= 90){
      resultado.rank = "Diamante"
    }
    else if(saldo > 90 && saldo <= 100){
      resultado.rank = "Lendário"
    }
    else if (saldo > 100) {
      resultado.rank = "Imortal"
    }
    else {
      resultado.rank = "abaixo do ferro"
    }

    console.log(`O Herói tem de saldo de ${resultado.saldo} vitórias e está no nível ${resultado.rank}.`)
}

main()
