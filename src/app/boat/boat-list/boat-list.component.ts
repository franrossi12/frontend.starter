import { Component, OnInit } from '@angular/core';
import { BoatService } from '../boat.service';
import {BoatModule} from '../boat.module';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boat-list.component.html',
  styleUrls: ['./boat-list.component.scss']
})

export class BoatListComponent implements OnInit {
  boats : BoatModule[];
  constructor(private boatService: BoatService) { }

  ngOnInit() {
   this.boatService.getBoats()
     .subscribe(
     (boats: any[]) => this.boats = boats,
     (error) => console.log(error)
   );
   console.log(this.boats);
  }

}
