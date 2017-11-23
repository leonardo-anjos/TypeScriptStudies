class Animal {

    private nome: string;
    private peso: number;
    
    getNome() {
        return this.nome;
    }

    setNome(name : string) {
        this.nome = name;
    }

    getPeso() {
        return this.peso;
    }

    setPeso(weight : number) {
        this.peso = weight;
    }
}

class Peixe extends Animal {
    
    private habitat: string;

    getHabitat() {
        return this.habitat;
    }

    setHabitat(habitat : string) {
        this.habitat = habitat;  
    }
}

class Cachorro extends Animal {
    
    private raca: string;

    getRaca() {
        return this.raca;
    }

    setRaca(raca : string) {
        this.raca = raca;  
    }
}

    let fish = new Peixe();
    fish.setHabitat('agua doce')
    fish.setNome('curimatã')
    fish.setPeso(450)

/*    console.log('hoje eu peguei um(a) '+fish.getNome()+
                ' de '+fish.getHabitat()+
                ' que pesava '+fish.getPeso()+'g')
*/
    let dog = new Cachorro();
    dog.setNome('thor')
    dog.setPeso(15)
    dog.setRaca('pastor alemão')

    console.log('ganhei um '+dog.getRaca()+
                ' e o nome dele e '+dog.getNome())
