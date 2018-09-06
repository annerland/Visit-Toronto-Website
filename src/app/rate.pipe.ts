import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {

  transform(values: any, args?: any): any {
    if (!args) {
      return values;
    }
    console.log(args);
    
    return values.filter(item => {
      return item.currentRate == args;   
      
    })

  }

}
