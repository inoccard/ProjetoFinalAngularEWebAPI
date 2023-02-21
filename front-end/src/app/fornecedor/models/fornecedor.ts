import { Endereco } from './endereco';
import { Produto } from 'src/app/produto/models/produto';

export class Fornecedor {
    id: string;
    nome: string;
    documento: string;
    ativo: boolean;
    tipoFornecedor: number;
    endereco: Endereco;
    produtos: Produto[]
}

