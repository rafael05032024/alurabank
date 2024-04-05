System.register([], function (exports_1, context_1) {
    "use strict";
    var NegociacoesModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            NegociacoesModel = class NegociacoesModel {
                constructor() {
                    this.negociacoes = [];
                }
                adiciona(negociacao) {
                    this.negociacoes.push(negociacao);
                }
                getNegociacoes() {
                    return [...this.negociacoes];
                }
            };
            exports_1("NegociacoesModel", NegociacoesModel);
        }
    };
});
