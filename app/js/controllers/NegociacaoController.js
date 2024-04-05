System.register(["../models/index", "../view/index", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, index_3, DAY_OF_WEEK, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            (function (DAY_OF_WEEK) {
                DAY_OF_WEEK[DAY_OF_WEEK["SABADO"] = 5] = "SABADO";
                DAY_OF_WEEK[DAY_OF_WEEK["DOMINGO"] = 6] = "DOMINGO";
            })(DAY_OF_WEEK || (DAY_OF_WEEK = {}));
            ;
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new index_1.NegociacoesModel();
                    this.negociacoesView = new index_2.NegociacoesView('#negociacoesView');
                    this.mensagemView = new index_2.MensagemView('#mensagemView');
                    this.negociacoesView.update(this.negociacoes.getNegociacoes());
                }
                adiciona(event) {
                    var _a, _b, _c;
                    event.preventDefault();
                    const dia = this.data.getDay();
                    if (!this.ehDiaUtil(dia)) {
                        return this.mensagemView.update({
                            alertType: 'danger',
                            message: 'Data inválida!'
                        });
                    }
                    this.data = new Date((_a = document.querySelector('#data')) === null || _a === void 0 ? void 0 : _a.value),
                        this.quantidade = Number((_b = document.querySelector('#quantidade')) === null || _b === void 0 ? void 0 : _b.value),
                        this.valor = Number((_c = document.querySelector('#valor')) === null || _c === void 0 ? void 0 : _c.value);
                    const negociacao = new index_1.NegociacaoModel(this.data, this.valor, this.quantidade);
                    this.negociacoes.adiciona(negociacao);
                    this.negociacoesView.update(this.negociacoes.getNegociacoes());
                    this.mensagemView.update({
                        message: 'Negociação cadastrada com sucesso!',
                        alertType: 'success'
                    });
                }
                ehDiaUtil(dia) {
                    return !(dia === DAY_OF_WEEK.SABADO || dia === DAY_OF_WEEK.DOMINGO);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            __decorate([
                index_3.logaTempoDeExecucao()
            ], NegociacaoController.prototype, "adiciona", null);
        }
    };
});
