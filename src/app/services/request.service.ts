import { Injectable } from '@angular/core';
import {RequestCreateForm} from "../components/models/request-create.form";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private readonly _client: HttpClient, private _authService: AuthService) { }

  create(form: RequestCreateForm) {

    // let headers = new HttpHeaders();
    // const user = this._authService.user;
    // if( user )
    //   headers = headers.set("Authorization", `Bearer ${user.token}`);

    return this._client.post("http://localhost:8080/booking/create", form/*, {headers: headers}*/);
  }

  accept(bookingId: number) {
    return this._client.patch(`http://localhost:8080/booking/${bookingId}/accept`, undefined)
  }
}
