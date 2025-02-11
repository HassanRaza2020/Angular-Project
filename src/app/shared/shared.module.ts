import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],  // Declare Navbar Component
  exports:[NavbarComponent],       // Export to use globally
  imports: [CommonModule],         // Import required modules
})
export class SharedModule { }
