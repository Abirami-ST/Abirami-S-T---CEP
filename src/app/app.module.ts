import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { AssessmentProgressComponent } from './assessment-progress/assessment-progress.component';
import { StudentAttendenceComponent } from './student-attendence/student-attendence.component';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { DataService } from './data.service';
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    AppComponent,
    CourseOverviewComponent,
    AssessmentProgressComponent,
    StudentAttendenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CanvasJSAngularChartsModule,
    NgxChartsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
