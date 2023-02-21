import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Fornecedor } from '../models/fornecedor';
import { FornecedorService } from './fornecedor.service';

@Injectable()
export class FornecedorResolve implements Resolve<Fornecedor> {

    constructor(private fornecedorService: FornecedorService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.fornecedorService.obterPorId(route.params['id']);
    }
}