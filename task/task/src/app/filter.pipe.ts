import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:true
})


export class FilterPipe implements PipeTransform {
  transform(value:any[], searchText: any): any[] {
  if(value.length==0||searchText.length==0){
    return value
  }
   var tempArr:any=[]
   // var logMessage=false
   
  for(var i=0; i<value.length; i++)
    {
    if(value[i].pdtname.toLowerCase().includes(searchText)||
    value[i].pdtcode.toString().includes(searchText)||
    value[i].pdttype.toLowerCase().includes(searchText)||
    value[i].pdtdescription.toLowerCase().includes(searchText)||
    value[i].pdtprice.toString().includes(searchText))
      {
      tempArr.push(value[i])
      console.log(tempArr)
    }
 
   
  }
  return tempArr
}
}
