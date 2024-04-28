import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img [src]="housingLocation?.photo" class="listing-photo">
      <section class="listing-description">
        <h2 class="listing-heading">
          {{ housingLocation?.name }}
        </h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
      <h2 class="section-heading">
          About this housign location
        </h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">
          Apply now to live here
        </h2>

        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input type="text" name="first-name" id="first-name" formControlName="firstName">

          <label for="last-name">Last Name</label>
          <input type="text" name="last-name" id="last-name" formControlName="lastName">

          <label for="email">E-mail</label>
          <input type="email" name="email" id="email" formControlName="email">
          <button class="primary" type="submit">Apply now</button>
        </form>
        

      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousiongLocationById(housingLocationId);
  };

  submitApplication() {
    this.housingService.submitAppication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );

    this.applyForm.reset();
  }
}
