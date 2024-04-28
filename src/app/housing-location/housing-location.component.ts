import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HousingLocation } from '../housing-location';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img 
        [src]="housingLocation.photo" 
        alt="Exterior pfot of {{ housingLocation.name }}" 
        aria-hidden="true" 
        class="listing-photo">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn more</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

}
