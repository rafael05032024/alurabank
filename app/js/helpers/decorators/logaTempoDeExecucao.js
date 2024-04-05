System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logaTempoDeExecucao() {
        return (target, key, descriptor) => {
            const metodo = descriptor.value;
            descriptor.value = (...args) => {
                console.log('test-antes');
                //@ts-ignore
                const retorno = metodo.apply(this, args);
                console.log('test-depois');
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logaTempoDeExecucao", logaTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
