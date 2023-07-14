import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListHomeComponent } from './list-home/list-home.component';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ListHomeComponent]
})
export class Tab2Page implements OnInit {
  

  constructor() {
  }

  ngOnInit() {
  }
}
