import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
 
  transform(items: any[], value: string): any[] {  
    if (!items) return [];  
    if(value) {  
        return items.filter(item => item.text.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1);  
    }  
    else  
    {  
        return items;  
    }  
  }
}