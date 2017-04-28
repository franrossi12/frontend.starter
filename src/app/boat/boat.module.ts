import { NgModule } from '@angular/core';

import { BoatComponent } from './boat.component';
import { FormsModule } from '@angular/forms';
import { BoatService } from './boat.service';
import { BoatListComponent } from './boat-list/boat-list.component';
import { BoatEditComponent } from './boat-edit/boat-edit.component';
import { BoatStartComponent } from './boat-start/boat-start.component'


@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [
    BoatComponent,
    BoatListComponent,
    BoatEditComponent,
    BoatStartComponent
  ],
  providers: [BoatService]
})
export class BoatModule {
  public description: string;
  public capacity: string;

  constructor(desc: string, capacity: string) {
    this.description = desc;
    this.capacity = capacity;
  }
}

