import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent implements OnInit{

data={
  to:"",
  subject:"",
  message:""
}


  constructor(){}
  ngOnInit(): void {
      
  }
  doSubmitForm()
  {
console.log("try to submit form"); 
console.log("DATA",this.data);
  }

}
