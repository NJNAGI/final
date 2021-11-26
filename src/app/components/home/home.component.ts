import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private updateSubscription: Subscription;
  constructor(private route:Router) { }

  ngOnInit(): void {
    // this.route.navigateByUrl('/home', {skipLocationChange: true}).then(()=>
    // this.route.navigate(["home"])); 
  }

}
