import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(values: any, args?: any): any {
    if (!args) {
      return values;
    }
    else {
      args = args.toUpperCase();
    }    

    
    return values.filter(item => {      
      console.log(item);
      console.log("aaaaa")
      return item.tipo.toUpperCase().startsWith(args) == true
      
    })

  }

}
