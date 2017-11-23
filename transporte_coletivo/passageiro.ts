export class Passageiro {

    private codigo: number;
    private nome: string;

    getCodigo(){
        return this.codigo;
    }

    setCodigo(code: number) {
        this.codigo = code;
    }

    getNome() {
        return this.nome;
    }

    setNome(name: string) {
        this.nome = name;
    }
}