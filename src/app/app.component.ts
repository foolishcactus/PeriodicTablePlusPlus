import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './tab1/tab1components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, HomeComponent],
})
export class AppComponent {
  constructor() {}
}
