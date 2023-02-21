import { Component, Input } from '@angular/core';
import { Produto } from 'src/app/produto/models/produto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'lista-produto',
  templateUrl: './lista-produtos.component.html'
})
export class ListaProdutosComponent {

  imagens: string = environment.imagensUrl;

  @Input()
  produtos: Produto[];
}