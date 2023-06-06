import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allEmployees:any[],searchKey:string,propName:string): any[] {

    const result:any[]=[]; 

    if(!allEmployees || searchKey=='' || propName==''){
      return allEmployees;
    }

    allEmployees.forEach((employee:any)=>{
      if(employee[propName].trim().toLowerCase().includes(searchKey.toLowerCase().trim())){
        result.push(employee)
      }
    })
    return result;
  }

}
