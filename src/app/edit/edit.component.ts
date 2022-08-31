import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee:any=[];
  submitted = false;

  constructor(private api:ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.detailData();
  }

  detailData(){
    this.employee.id = this.route.snapshot.params['employee.id'];
    console.log(this.employee.id);

    this.api.getOneData(this.employee.id).subscribe(result=>{
      this.employee = result;
    })
  }

  submit(){
    this.api.editData(this.employee.id, this.employee).subscribe(result=>{
      this.employee = result;
      console.log(result);
      window.alert('Successfully Edited.');
    })
  }

  onSubmit(){
    this.submitted = true;
  }

}
