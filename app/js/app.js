System.register(["./controllers/index"], function (exports_1, context_1) {
    "use strict";
    var _a, index_1, negociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            negociacaoController = new index_1.NegociacaoController();
            (_a = document.querySelector('#formulario')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (e) => {
                negociacaoController.adiciona(e);
            });
        }
    };
});
