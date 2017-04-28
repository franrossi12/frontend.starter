import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {BoatService} from '../boat.service';

@Component({
  selector: 'app-boat-start',
  templateUrl: '../boat-start/boat-start.component.html',
  styleUrls: ['../boat-start/boat-start.component.scss']
})
export class BoatStartComponent implements OnInit {

  constructor(private service: BoatService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    var boat = [
      {
        description: f.value.description,
        capacity: f.value.capacity
      }
    ];
    this.service.storeBoat(boat)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
