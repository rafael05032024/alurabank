export abstract class View<T = any> {
  protected element!: Element;

  constructor(seletor: string) {
    this.element = document.querySelector(seletor) as Element;
  }

  update(model: T): void {
    this.element.innerHTML = this.template(model);
  }

  abstract template(model: T): string;
}