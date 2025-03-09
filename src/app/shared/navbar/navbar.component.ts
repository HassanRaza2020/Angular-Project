import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user_id: string | null = null;
  username: string | null = null;
  searchQuery: string | null = null;

  constructor(
    private apiService: ApiService, 
    public authService: AuthService,
    private sharedService:SharedService, 
    private router: Router, 
    private cdr: ChangeDetectorRef // Required for UI update
  ) {}

  ngOnInit(): void {
    this.loadUserData(); // Load user data when the component initializes


    // Listen for route changes to update user data dynamically
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadUserData(); 
        this.cdr.detectChanges(); // Force UI refresh
      }
    });
  }

  // Load user data from localStorage
  loadUserData() {
    this.user_id = localStorage.getItem('user_id');
    this.username = localStorage.getItem('username');
    console.log("Username:", this.username);
    console.log("User ID:", this.user_id);
  }

  // Search Function
  searchQuestion() {
    this.apiService.getSearch(this.searchQuery).subscribe(response => {
      console.log("Search data:", response);
      this.sharedService.sentSearchData(response);
    },

    


    

    error =>{
      console.error("Search Error:", error);
    }
    
    
    
    );
  }

}
