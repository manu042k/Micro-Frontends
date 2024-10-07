import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeComponent } from '../home/home.component';
import { SideNavBarComponent } from '../side-nav-bar/side-nav-bar.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NxWelcomeComponent,
    HomeComponent,
    SideNavBarComponent,
  ],
  selector: 'app-dashboard-entry',
  template: `<app-side-nav-bar></app-side-nav-bar>`,
})
export class RemoteEntryComponent {}
