import { Component, OnInit } from '@angular/core';
import { CanvasJS } from '@canvasjs/angular-charts';
import { DataService } from '../data.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-assessment-progress',
  templateUrl: './assessment-progress.component.html',
  styleUrl: './assessment-progress.component.css'
})
export class AssessmentProgressComponent implements OnInit{

  multi: any[];
  view: any[] = [900, 300];

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  yAxisTicks : any [] = [0,25,50,75,100];

  customColors = { 
    domain: ['#4CAF50', '#C0C0C0'], 
    // group: ScaleType.Ordinal, 
    // selectable: true, 
    // name: 'COMPLETED', 
};


barAnimations = false

  constructor(private dataService:DataService) {
   this.multi =  this.dataService.getData();
   }

  ngOnInit(): void {
   
  }

  // setCustomColorScheme() {
  //   const pendingColor = '#4CAF50';
  //   const completedColor = '#C0C0C0';
  //   this.customColors.domain = this.getDomainColors(this.multi, pendingColor, completedColor);
  // }
  
  // getDomainColors(data: any[], pendingColor: string, completedColor: string): string[] {
  //   const colors: string[] = [];
  //   data.forEach(x => {
  //     x.series.forEach(series => {
  //       if (series.name.includes('PENDING')) {
  //         colors.push(pendingColor);
  //       } else if (series.name.includes('COMPLETED')) {
  //         colors.push(completedColor);
  //       }
  //     });
  //   });
  //   return colors;
  // }
  
  /*getColorScheme(): Color {
    const colors = [];
    this.multi.forEach(country => {
      country.series.forEach(series => {
        if (series.name.includes('PENDING')) {
          colors.push('#4CAF50');
        } else if (series.name.includes('COMPLETED')) {
          colors.push('#C0C0C0');
        }
      });
    });
    const uniqueColors = [...new Set(colors)];
  
    return {
      name: 'custom',
      selectable: true,
      group: ScaleType.Ordinal,
      domain: uniqueColors
    };
  }*/

  yAxisTickFormatting(value) {
    return (value) + "%" 
  }
}