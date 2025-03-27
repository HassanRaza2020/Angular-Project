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

 constructor(){}

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['Food', 'History', 'Sports','Fiction','Coding','Education','Science and Technology','Politics','Crimes','Others'],
        datasets: [
          {
            label: 'Questions',
            data: ['467', '567', '572', '599'],
            backgroundColor: 'blue'
          },
          {
            label: 'Answers',
            data: ['100', '120', '133', '134'],
            backgroundColor: 'red'
          }
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