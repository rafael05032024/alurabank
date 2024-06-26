System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor) {
                    this.element = document.querySelector(seletor);
                }
                update(model) {
                    this.element.innerHTML = this.template(model);
                }
            };
            exports_1("View", View);
        }
    };
});
