import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  employees:any=[];
  company:any=[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getListEmployee();
  }

  getListEmployee(){
    this.api.getDataAll('employee').subscribe(result=>{
      this.employees = result;
      if(this.employees.avatar == ''){
      }
    })
  }

  data1 = [this.employees.length, 2];

  Highcharts: typeof Highcharts = Highcharts;

  highcharts: Highcharts.Options = {
    title: {
      text: "City Lived",
      align:'left',
    },
    xAxis: {
      categories: ["Jakarta","Bandung","Surabaya", "Yogyakarta","Malang"]
    },
    yAxis: {
      categories: ["2","4", "6", "8", "10"]
    },
    chart:{
      width:470,
    },
    series: [
      {
        name: "",
        type: "column",
        data: [12, 6, 4, 6, 7],
        color: "#496690"
      }
    ]
  }

  highcharts2: Highcharts.Options = {
    title: {
      text: "Salary Range",
      align:'left',
    },
    chart:{
      width:470,
    },
    series: [
      {
        name: "",
        type: "pie",
        data: [
          ['< 350$', 20],
          ['350$ < salary < 486$', 50],
          ['> 486$', 30],
        ],
      }
    ]
  }
}
