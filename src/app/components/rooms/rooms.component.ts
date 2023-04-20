import {Component, OnInit} from '@angular/core';
import {DataSource} from "@angular/cdk/collections";
import {Room} from "../models/room.model";
import {RoomService} from "../../services/room.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{

  loading = true;
  rooms!: Room[];

  displayedColumns: string[] = ['id', 'number', 'capacity', 'actions'];
  dataSource = new MatTableDataSource<Room>([])

  constructor(private readonly _roomService: RoomService) {}

  ngOnInit(): void {

    this._roomService.getRooms().subscribe( data => {
      this.dataSource.data = data;
      this.loading = false;
    } )

  }



}
