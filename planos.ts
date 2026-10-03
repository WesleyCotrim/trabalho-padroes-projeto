interface InterfacePlano {
    assinar(): string
}

abstract class Qualidade{}
abstract class PoliticaAnuncio{}
abstract class LimiteTelas{}

class Qualidade4K extends Qualidade {

}

class QualidadeHD extends Qualidade {

}

class ComAnuncio extends PoliticaAnuncio {

}

class SemAnuncio extends PoliticaAnuncio {

}

class DuasTelas extends LimiteTelas {

}

class QuatroTelas extends LimiteTelas {

}

class PlanoPadrao implements InterfacePlano {
    constructor(
        protected qualidade: Qualidade = new QualidadeHD(), 
        protected limiteTelas:LimiteTelas = new DuasTelas(), 
        protected politicaAnunios:PoliticaAnuncio = new ComAnuncio()) {}

    assinar(): string {
        return "Plano Padrão Assinado"
    }
}

class PlanoPremium implements InterfacePlano {
    constructor(
        protected qualidade: Qualidade = new Qualidade4K(), 
        protected limiteTelas:LimiteTelas = new QuatroTelas(), 
        protected politicaAnunios:PoliticaAnuncio = new SemAnuncio()) {}

    assinar(): string {
        return "Plano Premium Assinado"
    }
}

abstract class FabricaPlanos {
    abstract criarPlano(): InterfacePlano
}

class FabricaPlanoPadrao extends FabricaPlanos{
    criarPlano(): PlanoPadrao {
        return new PlanoPadrao()
    }
}

class FabricaPlanoPremium extends FabricaPlanos {
    criarPlano(): PlanoPremium {
        return new PlanoPremium()
    }
}
