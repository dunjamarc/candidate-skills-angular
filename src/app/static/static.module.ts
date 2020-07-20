import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StaticRoutingModule } from './static-routing.module';
import { StaticComponent } from './static.component';

@NgModule({
  declarations: [StaticComponent],
  imports: [CommonModule, StaticRoutingModule, NgbModule],
})
export class StaticModule {}
