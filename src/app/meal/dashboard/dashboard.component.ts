import { Component, OnInit } from '@angular/core';
import { AveragenutrientsIntake, Chart } from '@app/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  averageNutrientsIntake: AveragenutrientsIntake;
  chart: Chart;

  constructor() { }

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart() {
    this.chart = new Chart();
    this.chart.type = 'bar';
    this.chart.dataSets = [
      {
        data: [
          this.averageNutrientsIntake.protein,
          this.averageNutrientsIntake.fats,
          this.averageNutrientsIntake.carbs,
        ],
        label: 'Average nutrients intake'
      }
    ];
    this.chart.labels = ['Protein', 'Fats', 'Carbs'];
    this.chart.colors = [
      {
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 2,
      }
    ];
    this.chart.options = {
      responsive: true,
      scales: {
        yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 0, max:200}}]
      }
    };
  }
}