import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <a href="/">
          <img src="/assets/logo.svg" alt="logo" aria-hidden="true" class="brand-logo">
        </a>
      </header>
      <section class="content">
       <router-outlet />
      </section>
    </main>`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
