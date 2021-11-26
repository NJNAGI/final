import { Component, OnInit } from '@angular/core';
import { ServiceloginService } from 'src/app/services/servicelogin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
listnotification:any
listnotificationh2:any
userconnect=JSON.parse(localStorage.getItem("userconnect")!)

  constructor(private apidata:ServiceloginService,private route: Router,private apinotification:NotificationService) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear()
  this.route.navigateByUrl('/')
      

 }

 getAllnotifications(){
  this.apinotification.getnotifications().subscribe((res:any)=>{
    this.listnotification=res
    console.log("reponse",res)
  })
}
 getAllnotificationsH2(){
  this.apinotification.getnotificationsh2().subscribe((res:any)=>{
    this.listnotificationh2=res
    console.log("notificationh2",res)
  })
}
isgrh(){
  return this.userconnect.niveau_hierarchique==="grh" ? true :false
}
isH2(){
  return this.userconnect.niveau_hierarchique==="H2" ? true :false
}
}
