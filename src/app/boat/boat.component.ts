import { Component, OnInit } from '@angular/core';
import {BoatService} from './boat.service';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.scss']
})
export class BoatComponent implements OnInit {

  constructor(private service: BoatService) { }

  ngOnInit() {
  }

}
