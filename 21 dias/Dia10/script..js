class computador{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd

    constructor(tipo, processador, video, armazenamento, memoriaRam,ssd){
        this.Tipo=tipo
        this.Processador=processador
        this.Video=video
        this.Armazenamento=armazenamento
        this.MemoriaRam=memoriaRam
        this.Ssd=ssd
    }

ExibirInformaçoes(){
    console.log("Informaçoes do computador:")
    console.log(`Tipo: ${this.Tipo}`);
    console.log(`Processador:${this.Processador}`);
    console.log(`Video:${this.Video}`);
    console.log(`Armazenamento:${this.Armazenamento}`);
    console.log(`MemoraRam:${this.MemoriaRam}`);
    console.log(`Ssd:${this.Ssd}`);
}
}
// Exemplo de uso

const meucomputador = new computador("notebook", "ryzen 7", "dedicado", 1000, 16, true);
meucomputador.ExibirInformaçoes();