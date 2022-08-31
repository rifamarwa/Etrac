import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  employees:any=[];
  submitted = false;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

  }

  saveData():void{
    const data = {
      name:this.employees.name,
      cityLived:this.employees.cityLived,
      email:this.employees.email,
      phoneNumber:this.employees.phoneNumber,
      companyName:this.employees.companyName,
      salary:this.employees.salary,
      avatar:this.employees.avatar
    };

    this.api.createData(data).subscribe(result=>{
      this.employees = result;
      this.submitted = true;
      window.alert('Successfully Added.');
    })
   
    
  }

  onSubmit(){
    this.submitted = true;
  }

}
