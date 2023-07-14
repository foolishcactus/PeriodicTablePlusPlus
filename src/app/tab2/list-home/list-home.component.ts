import { Component, OnInit, inject } from '@angular/core';
import { ElementService } from 'src/app/elements.service';
import { FilterPipe } from 'src/app/filter.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.scss'],
  imports: [FilterPipe, CommonModule, FormsModule],
  standalone: true,
})
export class ListHomeComponent  implements OnInit {
  elementService: ElementService = inject(ElementService);
  searchText: string;

  constructor() { }

  ngOnInit() {}

}
