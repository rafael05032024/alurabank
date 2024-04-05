System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, NegociacoesView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends View_1.View {
                template(negociacoes) {
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
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
