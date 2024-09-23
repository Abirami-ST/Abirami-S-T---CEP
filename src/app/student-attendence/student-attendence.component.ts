import { Component } from '@angular/core';
import { CanvasJS } from '@canvasjs/angular-charts';
import { interval } from 'rxjs';

@Component({
  selector: 'app-student-attendence',
  templateUrl: './student-attendence.component.html',
  styleUrl: './student-attendence.component.css'
})
export class StudentAttendenceComponent {
  chart: any;
	chartOptions = {
		theme: "light2",
		zoomEnabled: true,
		axisY: {
			title: "Attendence",
			interval: 25,
			suffix: "%",
			maximum: 100,
			minimum: 0,
			gridThickness: 0,
			lineThickness: 1
		},
		axisX: {
			title: "Weeks",
			labelFormatter: function (e) {
				return CanvasJS.formatDate( e.value, "DD/MM");
			},
			gridThickness: 1,
            gridColor: "#A0A0A0",
            
		},
		data: [{
			width:900,
			height: 300,
			type: "line",
			connectNullData : true,
			nullDataLineDashType: 'solid',
			color: "purple",
			dataPoints: [
			  { x: new Date(2000, 7, 1), y: 27 },
			  { x: new Date(2000, 7, 8), y: 55 },
			  { x: new Date(2000, 7, 15), y: 20 },
			  { x: new Date(2000, 7, 22), y: 80},
			  { x: new Date(2000, 7, 29), y: 53 },
			  { x: new Date(2000, 8, 5), y: 64 },
			  { x: new Date(2000, 8, 12), y: 82 },
			  { x: new Date(2000, 8, 19), y: 54 },
			  { x: new Date(2000, 8, 26), y: null},
			  { x: new Date(2000, 9, 2), y: 98 },
			  { x: new Date(2000, 9, 9), y: 74 },
			  { x: new Date(2000, 9, 16), y: 50 },
			  { x: new Date(2000, 9, 23), y: 75 },
			  { x: new Date(2000, 9, 30), y: 48 },
			  { x: new Date(2000, 10, 14), y: null, nullDataLineDashType: 'dot'},
			  { x: new Date(2000, 10, 21) },
		
			]
		}]
	}
}
