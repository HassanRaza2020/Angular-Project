import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from 'src/app/services/api.service';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 constructor(private apiService:ApiService){}

  public chart: any;
  categoryCount=[];
  category = [];
  totalCount = [];

  ngOnInit(): void {
    
    this.createChart();
    this.apiService.getDashboard().subscribe(response=>{     
    this.categoryCount = response;
    for(let item of this.categoryCount){
      this.category.push(item.content);
      this.totalCount.push(item.total);

    }
    this.createChart();

   console.log("category:", this.category);
   console.log("Total:", this.totalCount);

    
  })

  }

  createChart() {

   if(this.chart){
    this.chart.destroy();
   }

    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: this.category,
        datasets: [
          {
            label: 'Category',
            data: this.totalCount,
            backgroundColor: [
              'rgba(114, 59, 71, 0.2)',
              'rgba(248, 163, 77, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
          },
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}