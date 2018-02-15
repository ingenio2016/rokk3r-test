import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Activity } from './chart.service';

export class InMemoryHighChartDataService implements InMemoryDbService {
  createDb() {
    const activities: Activity[] = [
      {
        zoneId: 'Calle 85',
        data: {count: 1, speed: 10, time: 1466781876681}
      },
      {
        zoneId: 'Salitre plaza',
        data: {count: 2, speed: 8.5, time: 1466781876681}
      },
      {
        zoneId: 'Parque 93',
        data: {count: 4, speed: 15, time: 1466781876681}
      },
      {
        zoneId: 'Calle 80',
        data: {count: 3, speed: 13.5, time: 1466781876681}
      },
      {
        zoneId: 'Centro',
        data: {count: 1, speed: 9, time: 1466781876681}
      }
    ];

    setInterval(function () {
      activities.forEach((activity) => {
        activity.data.count = Math.floor(Math.random() * 6);
        activity.data.speed = Math.floor(Math.random() * 30);
        activity.data.time = Date.now();
      });
    }, 500);


    return {activities};
  }
}
