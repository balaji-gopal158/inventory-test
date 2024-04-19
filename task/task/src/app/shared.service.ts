import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public http:HttpClient) { }

  loadDatas(){
    return this.http.get("http://localhost:3000/products")
  }

  postDatas(data:any){
    return this.http.post("http://localhost:3000/products",data)
  }

  deleteData(id:any){
    return this.http.delete("http://localhost:3000/products/"+id)
  }

  fetchData(id:any){
    return this.http.get("http://localhost:3000/products/"+id)
  }

  updateData(id:any,data:any){
    return this.http.put("http://localhost:3000/products/"+id,data)
  }

}
