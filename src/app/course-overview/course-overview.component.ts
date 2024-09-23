import { Component } from '@angular/core';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrl: './course-overview.component.css'
})
export class CourseOverviewComponent {
  credits_length: number;

  constructor(){
    this.getCredits();
  }
  courseDetails = [
    {
      CourseCode: 'BA3102', 
      CourseName: 'Quantiative techniques',
      CourseType: 'Program Elective',
      CoursePeriod: 'Semester - I',
      Credits: {
        Lecture: 3,
        Tutorial: 0,
        Practical: 1,
        Project: 0,
      },
      CourseOutcomes: ['CO2', 'CO4', 'CO5', 'CO7', 'CO13', 'CO14'],
      MappedCourses: ['PO7', 'PO10', 'PO12', 'PO13'],
    }
  ];

  getCredits(){
    console.log(this.courseDetails);
  }
}
