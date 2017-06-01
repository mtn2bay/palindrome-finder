import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PalindromeComponent } from './palindrome/palindrome.component';

export const router: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'palindrome', component: PalindromeComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
