class FilaCircular {
    private fila: number[];
    private capacidade: number;
    private tamanhoAtual: number;
    private inicio: number;
    private fim: number;

    constructor(capacidade: number) {
        this.fila = new Array(capacidade);
        this.capacidade = capacidade;
        this.inicio = 0;
        this.fim = 0;
        this.tamanhoAtual = 0;
    }

    public enfileirar(elemento: number): void {
        if (this.estaCheia()) {
            console.log("A fila está cheia! Não foi possível adicionar o elemento.");
            return;
        }

        this.fila[this.fim] = elemento;

        // Movimento circular
        this.fim = (this.fim + 1) % this.capacidade;

        this.tamanhoAtual++;
    }

    // Remover e retornar o primeiro elemento da fila
    public desenfileirar(): number | null {
        if (this.estaVazia()) {
            console.log("A fila está vazia! Nada para remover.");
            return null;
        }

        const elementoRemovido: number = this.fila[this.inicio];

        // Movimento circular
        this.inicio = (this.inicio + 1) % this.capacidade;

        this.tamanhoAtual--;
        return elementoRemovido;
    }

    // Retornar o elemento mais antigo
    public primeiroElemento(): number | null {
        if (this.estaVazia()) {
            console.log("A fila está vazia.");
            return null;
        }

        return this.fila[this.inicio];
    }

    public estaVazia(): boolean {
        return this.tamanhoAtual === 0;
    }

    public estaCheia(): boolean {
        return this.tamanhoAtual === this.capacidade;
    }

    public quantidadeDeElementos(): number {
        return this.tamanhoAtual;
    }

    // Retornar a capacidade máxima
    public capacidadeMaxima(): number {
        return this.capacidade;
    }

    // Exibir quantos elementos ainda podem ser inseridos
    public espacosDisponiveis(): number {
        return this.capacidade - this.tamanhoAtual;
    }

    public elementosDaFila(): number[] {
        if (this.estaVazia()) return [];

        const elementos: number[] = [];
        for (let i = 0; i < this.tamanhoAtual; i++) {
            elementos.push(this.fila[(this.inicio + i) % this.capacidade]);
        }

        return elementos;
    }
}

// Casos de teste - Aplicando em uma fila circular numérica.

let fila: FilaCircular = new FilaCircular(10);

fila.enfileirar(1);
fila.enfileirar(2);
fila.enfileirar(3);
fila.enfileirar(4);
fila.enfileirar(5);

fila.desenfileirar();
fila.desenfileirar();

console.log(fila.primeiroElemento());
console.log(fila.elementosDaFila());