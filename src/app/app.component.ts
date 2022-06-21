import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todolist: string = '';
  public listarray: any = [];
  public addlist() {
    if (this.todolist == '') {

    }
    else {
      this.listarray.push(this.todolist);
      this.todolist = ''
    }



  }
  public removefromlist(i: any) {
    this.listarray.splice(i, 1);
  }
}









