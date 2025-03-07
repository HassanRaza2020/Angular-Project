import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [FooterComponent],  // Declare Navbar Component
  exports:[FooterComponent],       // Export to use globally
  imports: [CommonModule],         // Import required modules
})
export class SharedModule { }
