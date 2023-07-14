import { Component, OnInit, Output, EventEmitter, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterService } from 'src/app/filter.service';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class FilterButtonComponent  implements OnInit {

  @Output() filterEvent = new EventEmitter();
  filterService: FilterService = inject(FilterService);

  constructor() { }

  ngOnInit() {}

  handleFilterClick(filter){
   // this.filters.forEach(element => {
   //   if(filter == element.filter){
   //     element.isChecked = element.isChecked;
   //   }
   //   
   // }); 
   console.log(this.filterService.getFilters());
  }
}
