abstract class PrototipoUsuario {
    public name: string
    public idade: number
    public sexo : string

    constructor(objetoOrigem: PrototipoUsuario) {
        this.name = objetoOrigem.name
        this.idade = objetoOrigem.idade
        this.sexo = objetoOrigem.sexo
    }

    abstract clonar(): PrototipoUsuario

}

class Usuario extends PrototipoUsuario {
    constructor(usuario: Usuario) {
        super(usuario)
    }

    clonar(): PrototipoUsuario {
        return new Usuario(this)
    }
}