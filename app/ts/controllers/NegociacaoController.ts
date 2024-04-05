import { NegociacaoModel, NegociacoesModel } from '../models/index';
import { MensagemView, NegociacoesView } from '../view/index';
import { logaTempoDeExecucao } from '../helpers/decorators/index';

enum DAY_OF_WEEK {
	'SABADO'= 5,
	'DOMINGO' = 6 
};

export class NegociacaoController {
	private data!: Date;
	private quantidade!: number;
	private valor!: number;
	private negociacoes = new NegociacoesModel()
	private negociacoesView = new NegociacoesView('#negociacoesView');
	private mensagemView = new MensagemView('#mensagemView');

	constructor() {
		this.negociacoesView.update(this.negociacoes.getNegociacoes())
	}

	@logaTempoDeExecucao()
	public adiciona(event: Event) {
		event.preventDefault();
		
		const dia = this.data.getDay();

		if (!this.ehDiaUtil(dia)) {
			return this.mensagemView.update({ 
				alertType: 'danger',
				message: 'Data inválida!' 
			});
		}

		this.data = new Date((<HTMLInputElement>document.querySelector('#data'))?.value),
		this.quantidade = Number((<HTMLInputElement>document.querySelector('#quantidade'))?.value),
		this.valor = Number((<HTMLInputElement>document.querySelector('#valor'))?.value);

		const negociacao = new NegociacaoModel(this.data, this.valor, this.quantidade);

		this.negociacoes.adiciona(negociacao);

		this.negociacoesView.update(this.negociacoes.getNegociacoes());
		this.mensagemView.update({
			message: 'Negociação cadastrada com sucesso!',
			alertType: 'success'
		});

	}

	private ehDiaUtil(dia: number): boolean {
		return !(dia === DAY_OF_WEEK.SABADO || dia === DAY_OF_WEEK.DOMINGO);
	}

}