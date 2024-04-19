import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  data_id:any=[]
  based_id_data:any=[]
  constructor(public ser:SharedService, public route:ActivatedRoute, public myRoute:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param:Params)=>{
      this.data_id=param['get']("id")
      console.log(this.data_id)
    })
    this.fetchDatas()
  }

  fetchDatas(){
    this.ser.fetchData(this.data_id).subscribe({
      next:(data:any)=>{
       this. based_id_data=data
       console.log(this.based_id_data)
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }
  updateDatas(){
    this.ser.updateData(this.data_id,this.based_id_data).subscribe({
      next:(data:any)=>{
         console.log(data)
         alert("Updated Successfully")
         this.myRoute.navigateByUrl("list")
      },error:(err:any)=>{
        console.log(err)
      }
    })
  }


}
