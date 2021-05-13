 import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { userInfo } from 'node:os';
import {User}  from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title:'MyFirstApp'
 /* nameOfCourse:string="Angular";
  version:string="14.0.0";
  instructor:string="Manish Guptha"
  coursedetails={
    name1:"angular",
    addresss:"Jammikunta"
  }
  datagiven:string
  status:boolean=false
  send(data){
    this.datagiven=data
  }*/
 /* flag:boolean=true;
  changeStatus(){
    this.flag=!this.flag;
  }*/
  arr:number[]=[1,2,3,4,5,6,7]
  arr1:string[]=[];
  flag1=false
  /*Event Binding
  SendData(data: string){
    this.arr1.push(data)
    console.log(this.arr1)
    data=""
  }
  reciveData(){
    this.flag1=!this.flag1
  }*/
  /* Two-Way Binding
  item :string
  arr2:string[]=[];
  SendDataEventBinding(){
    this.arr2.push(this.item)
  }*/
  
  users=[]
/*  submitResponse(refi:NgForm){
    let a=refi.value
    console.log(a)
    this.users.push(a)
    refi.reset()
  }
}*/
//user modela
Userobj:User={username:"",dob:"",email:""}
submitResponse(){
  console.log(this.Userobj)
  this.Userobj={username:"",dob:"",email:""}
}
}
/*interface User{
  username:string
  dob:string
  email:string

}*/
