let nome : string
nome = 'leonardo';
var  sobrenome = 'anjos';

//console.log(nome);
//console.log(sobrenome);
//console.log(nome+" "+sobrenome);

function ola(nome: string): void {
    console.log("olá meu nome é "+nome);
}
//ola("leo");

let passou = function(nota: number): boolean {
    return nota > 7
}
//console.log(passou(5.5)+", reprovado")

function avalicacao_fbuni(v1: number, v2: number): void {
    
    let media = v1*0.4+v2*0.6;

    if (media > 7) {
        console.log("parabens, aprovado");
    } else if (media > 4 && media < 7) {
        console.log("por pouco nao passou direto, mas ainda tem uma chanche..");
    } else if(media < 4) {
        console.log("REPROVADO!!! nos vemos proximo semestre kkkk");
    }
}

avalicacao_fbuni(6.2, 8.0)
