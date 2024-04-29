import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
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
          *ngFor="let housingLocation of (filteredLocationList$ | async)" 
          [housingLocation]="housingLocation">
        </app-housing-location>
      </section>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filteredLocationList$: Observable<HousingLocation[]> | undefined;

  constructor(
    private housingService: HousingService
  ) { }

  ngOnInit(): void {
    this.filteredLocationList$ = this.housingService.getAllHousingLocations();
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList$ = this.housingService.getAllHousingLocations();
      return;
    }

    this.filteredLocationList$ = this.housingService.getAllHousingLocations()
      .pipe(
        map(locations => locations.filter(
          location => location.city.toLowerCase().includes(text.toLowerCase())
        ))
      );
  }
}
