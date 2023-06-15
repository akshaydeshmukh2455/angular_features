import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greater'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value>10)
    {
      return "Number is greater than 10";
    }
    else
    {
      return "Number is less than 10"
    }
    
  }

}
