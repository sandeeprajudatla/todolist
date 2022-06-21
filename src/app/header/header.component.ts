import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  public name: string='sandeep'
  public fristname:string='datla sandeep'
  public lastname:string='raju'


  public purna(e:any):void{
    console.log(e);
  }
  
  }

 

