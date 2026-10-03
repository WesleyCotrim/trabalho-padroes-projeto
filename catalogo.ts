class Catalogo {
    private static instancia: Catalogo

    private constructor(){}

    public static getInstance(): Catalogo {
        if (!Catalogo.instancia) {
            Catalogo.instancia = new Catalogo
        }

        return Catalogo.instancia
    }
}

