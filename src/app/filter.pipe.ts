import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchNote:string) {


    if(value.length==='')
    {
      return value;
    }

    const Message=[];

    for(const n of value)
{
  if(n.Patient_name.includes(searchNote)||n.Patient_mail.includes(searchNote)||n.Patient_Injury.includes(searchNote))
  {
    Message.push(n)
  }
}
    return Message;
  }

}
