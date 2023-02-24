import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean'
})
export class BooleaPipe implements PipeTransform {

  transform(booleano: boolean, ...args: any[]): string {
    //console.log(booleano, args)
    return booleano ? args[0] : args[1]
    
  }
}
