export class NegociacaoModel {
  constructor(readonly data: Date, readonly valor: number, readonly quantidade: number) { }
  
  public getData() {
    return this.data;
  }

  public getValor() {
    return this.valor;
  }

  public getQuantidade() {
    return this.quantidade;
  }

  public getVolume() {
    return this.quantidade * this.valor;
  }
}