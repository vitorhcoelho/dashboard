import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ngx-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  chartOptions: any;
  chartOptions2: any;
  chartOptions3: any;
  chartOptions4: any;
  chartOptions5: any;
  chartOptions6: any;
  chartOptions7: any;
  chartOptions8: any;
  chartOptions9: any;
  chartOptions10: any;
  chartOptions11: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };

    this.chartOptions2 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.chartOptions3 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'area',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.chartOptions4 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'column',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.chartOptions5 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.chartOptions6 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'radialBar',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.chartOptions7 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'radar',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.chartOptions8 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'heatmap',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.chartOptions9 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'treemap',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.chartOptions10 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'candlestick',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.chartOptions11 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'polarArea',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
