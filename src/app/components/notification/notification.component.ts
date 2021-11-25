import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  listnotification:any
  submitted=false
  constructor(private apinotification:NotificationService) { }

  ngOnInit(): void {
    this.getAllnotifications()
  
  }
  getAllnotifications(){
    this.apinotification.getnotifications().subscribe((res:any)=>{
      this.listnotification=res
      console.log("reponse",res)
    })
  }

}
