import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button type="button" class="primary">Seach</button>
      </form>
      <section class="results">
        <app-housing-location 
          *ngFor="let housingLocation of housingLocationList" 
          [housingLocation]="housingLocation">
        </app-housing-location>
      </section>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] | undefined;

  constructor(
    private housingService: HousingService
  ) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
