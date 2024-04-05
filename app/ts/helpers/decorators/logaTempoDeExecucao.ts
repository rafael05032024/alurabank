export function logaTempoDeExecucao() {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const metodo = descriptor.value as Function;
    descriptor.value = (...args: any) => {
      console.log('test-antes');
      //@ts-ignore
      const retorno = metodo.apply(this, args);

      console.log('test-depois');

      return retorno;
    }

    return descriptor;
  }
}
