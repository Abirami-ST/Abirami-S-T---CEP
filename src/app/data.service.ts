import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  multi = [
    {
      "name": "Assignment",
      "series": [
        {
          "name": "COMPLETED",
          "value": 27
        },
        {
          "name": "COMPLETED1",
          "value": 73
        },
        {
          "name": "COMPLETED2",
          "value": 50
        },
        {
          "name": "PENDING",
          "value": 100
        }
      ]
    },
  
    {
      "name": "Quiz",
      "series": [
        {
          "name": "COMPLETED1",
          "value": 90
        },
        {
          "name": "COMPLETED2",
          "value": 38
        },
        {
          "name": "COMPLETED3",
          "value": 72
        },
        {
          "name": "COMPLETED4",
          "value": 78
        },
        {
          "name": "COMPLETED5",
          "value": 25
        },
        {
          "name": "COMPLETED6",
          "value": 55
        },
        {
          "name": "PENDING1",
          "value": 100
        },
        {
          "name": "PENDING2",
          "value": 100
        },
        {
          "name": "PENDING3",
          "value": 100
        },
      ]
    },
  
    {
      "name": "Presentation",
      "series": [
        {
          "name": "COMPLETED1",
          "value": 70
        },
        {
          "name": "COMPLETED2",
          "value": 35
        },
        {
          "name": "COMPLETED3",
          "value": 23
        }
      ]
    },

    {
      "name": "Lab",
      "series": [
        {
          "name": "COMPLETED1",
          "value": 48
        },
        {
          "name": "COMPLETED2",
          "value": 75
        },
      ]
    },

    {
      "name": "Viva",
      "series": [
        {
          "name": "COMPLETED",
          "value": 80
        },
      ]
    }
  ];
  
  getData(){
    return this.multi;
  }
}
