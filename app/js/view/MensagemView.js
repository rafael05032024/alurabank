System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, MensagemView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends View_1.View {
                constructor(seletor) {
                    super(seletor);
                }
                template(model) {
                    var _a;
                    return `
      <p class="alert alert-${(_a = model.alertType) !== null && _a !== void 0 ? _a : 'info'}">${model.message}</p>
    `;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
