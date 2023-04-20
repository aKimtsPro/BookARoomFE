import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent {

  form: FormGroup;

  constructor( builder: FormBuilder , private readonly _reqService: RequestService) {
    this.form = builder.group({
      roomId:[],
      userId:[],
      date: [],
      beginsAt: [],
      endsAt:[]
    })
  }

  onSubmit(){
    this._reqService.create(this.form.value).subscribe();
  }
}
