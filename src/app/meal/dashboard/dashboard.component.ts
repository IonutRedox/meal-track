import { Component, OnInit } from '@angular/core';
import { Chart } from '@app/core';
import { AppState } from '@app/app.state';
import { Store } from '@ngrx/store';
import { loadStatistics } from '../store/actions/dashboard.actions';
import { Observable, of } from 'rxjs';
import {
  getChartDatasets,
  getChartOptions
} from '@app/meal/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartDatasets$: Observable<Array<any>>;
  chartOptions$: Observable<any>;
  
  chartOptions: any;
  chart: Chart;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chart = new Chart();
    this.initializeChart();
    this.loadStatistics();
  }

  loadStatistics() {
    this.store.dispatch(loadStatistics());
    this.chartDatasets$ = this.store.select(getChartDatasets);
    this.chartOptions$ = this.store.select(getChartOptions);
    this.chartOptions$.subscribe(options => {
      if (options) {
        this.chart.options = options;
        this.initializeChart();
      }
    })
  }

  initializeChart() {
    this.chart.type = 'bar';
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
  }
}