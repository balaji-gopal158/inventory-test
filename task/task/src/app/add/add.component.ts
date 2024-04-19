import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  logInform : FormGroup
  model:boolean=false

  constructor(public ser:SharedService , public myRouter:Router) { }

  ngOnInit(): void {
    this.logInform=new FormGroup({
      pdtname:new FormControl(null,Validators.required),
      pdtcode:new FormControl(null,[Validators.required,Validators.pattern("^[0-4]{1,5}$")]),
      pdttype:new FormControl(null,Validators.required),
      pdtdescription:new FormControl(null,[Validators.required,Validators.minLength(5)]),
      pdtprice:new FormControl(null,[Validators.required,Validators.pattern("^[0-6]{1,5}$")])
    })
  }

  
  onSubmit(){
    if(this.logInform.invalid){
      return
    }else{
      console.log(this.logInform.value)
      this.ser.postDatas(this.logInform.value).subscribe({
        next:(data:any)=>{
            console.log(data)
            this.logInform.reset()
            this.model=true
            alert("Saved Details Successfully")
            this.myRouter.navigateByUrl("list")
        },
        error:(err:any)=>{
           console.log(err)
        }
      })
    }
   

  }
  get pdtnamecntrl(){
    return this.logInform.get('pdtname')
  }
  get pdtcodecntrl(){
    return this.logInform.get('pdtcode')
  }
  get pdttypecntrl(){
    return this.logInform.get('pdttype')
  }
  get pdtdescriptioncntrl(){
    return this.logInform.get('pdtdescription')
  }
  get pdtpricecntrl(){
    return this.logInform.get('pdtprice')
  }

}
