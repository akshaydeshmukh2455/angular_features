import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeNumber'
})
export class PrimePipe implements PipeTransform {

  transform(value: number, ...args: number[]): string {
    if(value%2==0 || value/2==0){
      return "Number is prime";
    }
    else{
      return "Number is non-prime";
    }
    
  }

}
