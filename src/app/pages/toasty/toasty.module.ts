import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastyPageRoutingModule } from './toasty-routing.module';

import { ToastyPage } from './toasty.page';
import {ComponentesModule} from '../../componentes/componentes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ToastyPageRoutingModule,
        ComponentesModule
    ],
  declarations: [ToastyPage]
})
export class ToastyPageModule {}
