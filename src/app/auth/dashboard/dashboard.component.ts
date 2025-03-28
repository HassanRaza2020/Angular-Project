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
  categoryId = [];
  totalCount = [];

  ngOnInit(): void {
    
    this.createChart();
    this.apiService.getDashboard().subscribe(response=>{     
    this.categoryCount = response;
    for(let item of this.categoryCount){
      this.categoryId.push(item.content);
      this.totalCount.push(item.total);
   
    }
    console.log("Total:", this.totalCount);
   
  })

  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: [this.categoryId],
        datasets: [
          {
            label: 'Questions',
            data: [12,23,223,33,44,44,44,44,,44,44],
            backgroundColor: 'red'
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