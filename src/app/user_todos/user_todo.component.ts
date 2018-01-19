import { Component, OnInit } from "@angular/core";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
@Component({
  selector: "user_todos",
  templateUrl: './user_todo.component.html'
})
export class user_todos {
userid : any;  
user_todos :any; 
resultdata:any;
value :any;
displaydata(){
    console.log(this.user_todos);
} 
  constructor(private http : Http) {}
  ngOnInit() {
      //this.userid = sessionStorage.getItem('userId');
      this.http.get('http://localhost:3000/testcase_status/status/10002').subscribe( res =>{
      //console.log("in response fun");   
      //console.log(res.json()); 
      this.resultdata = res.json();
      this.user_todos = this.resultdata.Data;

      //this.user_todos =  this.user_todos.data;
      this.displaydata(); 
      });
  }
}
