import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],  // Declare Navbar Component
  exports:[NavbarComponent,FooterComponent],       // Export to use globally
  imports: [CommonModule],         // Import required modules
})
export class SharedModule { }
