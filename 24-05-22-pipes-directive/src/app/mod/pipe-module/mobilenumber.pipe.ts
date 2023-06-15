import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobilenumber'
})
export class MobilenumberPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    if(value.length==10){
      return "Mobile number is correct";
    }
    else{
      return "Mobile number is not correct";
    }
    
  }

}
