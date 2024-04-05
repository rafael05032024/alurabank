System.register([], function (exports_1, context_1) {
    "use strict";
    var NegociacaoModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            NegociacaoModel = class NegociacaoModel {
                constructor(data, valor, quantidade) {
                    this.data = data;
                    this.valor = valor;
                    this.quantidade = quantidade;
                }
                getData() {
                    return this.data;
                }
                getValor() {
                    return this.valor;
                }
                getQuantidade() {
                    return this.quantidade;
                }
                getVolume() {
                    return this.quantidade * this.valor;
                }
            };
            exports_1("NegociacaoModel", NegociacaoModel);
        }
    };
});
