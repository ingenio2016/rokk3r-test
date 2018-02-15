import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { ChartService, Activity } from '../../providers/chart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories = [];

  // Charts Series
  series = [
    { name: 'Calle 85', data: [] },
    { name: 'Salitre plaza', data: [] },
    { name: 'Parque 93', data: [] },
    { name: 'Calle 80', data: [] },
    { name: 'Centro', data: [] }
  ];
  // LineChart
  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Speed Zones'
    },
    xAxis: {
      categories: this.categories
    },
    yAxis: {
      title: {
        text: 'Speed (Km)'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: this.series
  });

  // barCharts
  barChart = new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Count By Zones'
    },
    xAxis: {
      categories: this.categories,
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Rainfall (mm)'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: this.series
  });

  // Donut Chart
  donutChart = new Chart({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Speed Zones'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}Km</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Speed',
      data: [{
        name: 'Calle 85',
        y: 56.33
      }, {
        name: 'Salitre plaza',
        y: 24.03
      }, {
        name: 'Parque 93',
        y: 10.38
      }, {
        name: 'Calle 80',
        y: 4.77
      }, {
        name: 'Centro',
        y: 0.91
      }]
    }]
  });

  // Interval Observable Vars
  private subscription: any;
  activities: Activity[];
  constructor( private _chartService: ChartService ) { }

  ngOnInit() {
    this.subscription = Observable.interval(5000).subscribe(x => {
      this.getDataFromJson();
    });
  }

  getDataFromJson() {
    this._chartService.getData().subscribe((data) => {
      this.activities = data;
      const time = this.activities[0].data.time;
      this.categories.push(this.formatDate(time));
      this.activities.forEach( (zone, index) => {
        this.add(zone.data, index);
      });
    });
  }

  formatDate(miliseconds: number) {
    const date = new Date(miliseconds);
    return date.getHours() + ':' + date.getMinutes();
  }

  add(data , index: number) {
    this.lineChart.addPoint(data.speed, index);
    this.barChart.addPoint(data.count, index);
  }
}
