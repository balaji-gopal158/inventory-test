import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  showedData:any=[]
  
  
  searchText=''

  constructor(public ser:SharedService) { }

  ngOnInit(): void {
  this.displayData()
    
  }
  displayData(){
    this.ser.loadDatas().subscribe({
      next:(data:any)=>{
         this.showedData=data
        
         console.log(this.showedData)
      },error:(err:any)=>{
     console.log(err)
      } 
    })
  }
  removeData(pdt:any){
   this.ser.deleteData(pdt).subscribe({
    next:(data:any)=>{
      console.log(data)
      alert("Removed Successfully")
      this.displayData()
    },error:(err:any)=>{
      console.log(err)
    }
   })
  }


}
