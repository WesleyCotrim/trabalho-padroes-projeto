class ConteudoStreaming {
    constructor(
        public titulo: string,
        public tipo: string,
        public qualidade: string,
        public idioma: string
    ) {}
}

class ConstrutorConteudoStreaming {
    private titulo: string = ""
    private tipo: string = ""
    private qualidade: string = "HD"
    private idioma: string = "Português"

    definirTitulo(titulo: string): this {
        this.titulo = titulo
        return this
    }

    definirTipo(tipo: string): this {
        this.tipo = tipo
        return this
    }

    definirQualidade(qualidade: string): this {
        this.qualidade = qualidade
        return this
    }

    definirIdioma(idioma: string): this {
        this.idioma = idioma
        return this
    }

    construir(): ConteudoStreaming {
        return new ConteudoStreaming(
            this.titulo,
            this.tipo,
            this.qualidade,
            this.idioma
        )
    }
}
