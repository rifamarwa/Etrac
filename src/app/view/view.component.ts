import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

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


}
