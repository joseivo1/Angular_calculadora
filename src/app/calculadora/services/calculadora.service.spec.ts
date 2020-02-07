import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';



describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[CalculadoraService]
  }));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });

  it("Deve Garantir que 1 + 5 = 6",
  inject([CalculadoraService], (service: CalculadoraService) =>{
    let soma = service.calcular(1,5,CalculadoraService.SOMA);
    expect(soma).toEqual(6);
  }));

  it("Deve Garantir que 1 - 4 = -3",
  inject([CalculadoraService], (service: CalculadoraService) =>{
    let subtrair = service.calcular(1,4,CalculadoraService.SUBTRACAO);
    expect(subtrair).toEqual(-3);
  }));

  it("Deve Garantir que 2 / 2 = 1",
  inject([CalculadoraService], (service: CalculadoraService) =>{
    let dividir = service.calcular(2,2,CalculadoraService.DIVISAO);
    expect(dividir).toEqual(1);
  }));

  it("Deve Garantir que 5 * 5 = 25",
  inject([CalculadoraService], (service: CalculadoraService) =>{
    let multiplicacao = service.calcular(5,5,CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(25);
  }));

  it("Deve retornar 0 para operação invalida",
  inject([CalculadoraService], (service: CalculadoraService) =>{
    let operacaoInvalida = service.calcular(1,4,"%");
    expect(operacaoInvalida).toEqual(0);
  }));

});
