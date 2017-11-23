import { PessoaJuridica } from "./classepessoajuridica";
import { Vendas } from "./interfacevendas";

class Restaurante extends PessoaJuridica implements Vendas {
    
    private mesas: number;
    faturamento: number;
    
    constructor(public categoria : string, CNPJ : string) {
        super(CNPJ);
        this.faturamento = 0;
    }

    getCNPJ() {
        return this.CNPJ;
    }

    getMesas() {
        return this.mesas;
    }

    setMesas(quantidade: number) {
        this.mesas = quantidade;
    }

    realizar_vendas(valor: number) {
        this.faturamento += valor; 
    }

}
    let r = new Restaurante('Japones', '123456')
    r.setMesas(10);
    
 /*   console.log('o restaurante '+r.categoria+
                ' possui CNPJ '+r.getCNPJ()+
                ' '+r.getMesas()+' mesas disponiveis');
 */   
    r.realizar_vendas(100);
    r.realizar_vendas(450);
    console.log('seu faturamento até o momento e de R$ '+r.faturamento);