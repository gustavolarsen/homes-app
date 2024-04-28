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
        <input type="text" placeholder="Filter by city" #filter>
        <button type="button" class="primary" (click)="filterResults(filter.value)" >Search</button>
      </form>
      <section class="results">
        <app-housing-location 
          *ngFor="let housingLocation of filteredLocationList" 
          [housingLocation]="housingLocation">
        </app-housing-location>
      </section>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];


  constructor(
    private housingService: HousingService
  ) {
    this.getAllHousingLocations();
  }

  private async getAllHousingLocations(): Promise<void> {
    this.housingLocationList = await this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      locationsByCity => locationsByCity?.city.toLowerCase().includes(
        text.toLowerCase())
    );
  }
}
