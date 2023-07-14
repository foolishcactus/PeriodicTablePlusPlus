import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filters = [
    {
    filter: "Nonmetal",
    isChecked: false,
    },
    {
    filter: "Noble Gas",
    isChecked: false,
    },
    {
    filter: "Alkali Metal",
    isChecked: false,
    },
    {
    filter: "Alkaline-Earth Metal",
    isChecked: false,
    },
    {
    filter: "Halogen",
    isChecked: false,
    },
    {
    filter: "Metal",
    isChecked: false,
    },
    {
    filter: "Actinide",
    isChecked: false,
    },
    {
    filter: "Lanthanide",
    isChecked: false,
    },
    {
    filter: "Transition Metal",
    isChecked: false,
    },
  ]

  getFilters(){
    return this.filters;
  }

  isFilterChecked(filter:string): boolean{
    if (this.areAllFiltersUnchecked()){
      return false;
    }

    for (let i = 0; i < this.filters.length; i++){
      if (filter == this.filters[i].filter){
        return !this.filters[i].isChecked;
      }
    }
    return true;
  }

  areAllFiltersUnchecked(){
    let count = 0;

    for (let i = 0; i < this.filters.length; i++){
      if (!this.filters[i].isChecked){
        count++;
      }
    }

    if (count == this.filters.length){
      return true;
    }else{
      return false;
    }
  }
}
