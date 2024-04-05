import { NegociacaoController } from './controllers/index';

const negociacaoController = new NegociacaoController();

document.querySelector('#formulario')?.addEventListener('submit', (e) => {
  negociacaoController.adiciona(e);
});