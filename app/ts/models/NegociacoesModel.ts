import { NegociacaoModel } from './NegociacaoModel';

export class NegociacoesModel {
  private negociacoes: NegociacaoModel[] = [];

  adiciona(negociacao: NegociacaoModel) {
    this.negociacoes.push(negociacao);
  }

  getNegociacoes(): NegociacaoModel[] {
    return [...this.negociacoes];
  }
}