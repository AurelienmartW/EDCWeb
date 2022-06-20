import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  launchSA(conf:string) {
    if (conf !=''){
    window.open("https://jhiueikyz3.eu-west-1.awsapprunner.com/"+"?config="+conf)}
  
  else{
    window.open("https://jhiueikyz3.eu-west-1.awsapprunner.com/")
  }
}
}
