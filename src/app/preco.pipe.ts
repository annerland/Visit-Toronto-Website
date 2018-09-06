import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preco'
})
export class PrecoPipe implements PipeTransform {

  transform(values: any, args?: any): any {
    if (!args) {
      return values;
    }
    console.log(args);
    
    return values.filter(item => {
      return item.preco == args;   
      
    })

  }


}
