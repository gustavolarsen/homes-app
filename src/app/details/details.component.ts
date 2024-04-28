import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ housiongLoctionId }}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housiongLoctionId: number = 0;

  constructor() {
    this.housiongLoctionId = Number(this.route.snapshot.params['id']);
  };
}
