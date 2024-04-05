import { View } from './View';
import { NegociacaoModel } from '../models/index';

export class NegociacoesView extends View<NegociacaoModel[]> {
  template(negociacoes: NegociacaoModel[]): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
          ${negociacoes.map((neg) => `
            <tr>
              <td>${String(neg.getData().getDate())}/${neg.getData().getMonth() + 1}/${neg.getData().getFullYear()}</td>
              <td>${neg.getQuantidade()}</td>
              <td>${neg.getValor()}</td>
              <td>${neg.getVolume()}</td>
            </tr>
          `).join('')}
        </tbody>
        
        <tfoot>
        </tfoot>
      </table>
    `;
  }
}