import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {
  title = 'tcs-assignment';
  myImg:string = "assets/Images/background.jpg";
}
