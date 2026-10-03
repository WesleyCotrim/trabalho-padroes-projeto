interface InterfaceTipoStreaming {
    assistir(): void 
    avaliar(): void
    salvar(): void
    favoritar(): void
}
class Filme implements InterfaceTipoStreaming{
    assistir(): void {}
    avaliar(): void {}
    salvar(): void {}
    favoritar(): void {}
}

class Serie implements InterfaceTipoStreaming{
    assistir(): void {}
    avaliar(): void {}
    salvar(): void {}
    favoritar(): void {}
}

abstract class CriadorStreaming{
    protected abstract criarStreaming(): InterfaceTipoStreaming

    public iniciarFluxo(): InterfaceTipoStreaming {
        const streaming = this.criarStreaming();
        return streaming
}
}

class ProdutoFilme extends CriadorStreaming {
    protected criarStreaming(): InterfaceTipoStreaming {
        return new Filme()
    }
}

class ProdutoSerie extends CriadorStreaming {
    protected criarStreaming(): InterfaceTipoStreaming {
        return new Serie()
    }
}