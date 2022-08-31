import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees:any=[];
  isImageNotNull:boolean = true;

  constructor(
    public api:ApiService
  ) { }

  ngOnInit(): void {
    this.getListEmployee();
  }

  getListEmployee(){
    this.api.getDataAll('employee').subscribe(result=>{
      this.employees = result;
      if(this.employees.avatar == ''){
        this.isImageNotNull = false;
      }
    })
  }

}
