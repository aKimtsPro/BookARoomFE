import { Component } from '@angular/core';
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {

  bookingId: number = 0;

  constructor(private readonly _requestService: RequestService) {
  }

  onSubmit(){
    this._requestService.accept(this.bookingId).subscribe();
  }

}
