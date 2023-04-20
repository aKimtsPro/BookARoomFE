import {Component, OnDestroy} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {interval, Subscription} from "rxjs";

const interv = interval(1000)

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy{

  sub: Subscription;

  constructor(authService: AuthService) {
    this.sub = interv.subscribe(console.log);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
