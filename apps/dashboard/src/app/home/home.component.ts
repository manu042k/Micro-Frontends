import { Component } from '@angular/core';
import { SideNavBarComponent } from '../side-nav-bar/side-nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideNavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
