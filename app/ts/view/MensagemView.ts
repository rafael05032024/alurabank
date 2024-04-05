import { View } from './View';

type Model = {
  alertType: string;
  message: string; 
};

export class MensagemView extends View<Model> {
  constructor(seletor: string) {
    super(seletor);
  }

  template(model: Model): string {
    return `
      <p class="alert alert-${model.alertType ?? 'info'}">${model.message}</p>
    `;
  }
}