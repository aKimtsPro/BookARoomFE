import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Room} from "../components/models/room.model";
import {Observable} from "rxjs";

@Injectable()
export class RoomService {

  constructor(private readonly _client: HttpClient) {}

  public getRooms(): Observable<Room[]>{
    return this._client.get<Room[]>("http://localhost:8080/rooms/all")
  }

}
