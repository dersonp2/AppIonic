import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotoesPageRoutingModule } from './botoes-routing.module';

import { BotoesPage } from './botoes.page';
import {ComponentesModule} from '../../componentes/componentes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BotoesPageRoutingModule,
        ComponentesModule
    ],
  declarations: [BotoesPage]
})
export class BotoesPageModule {}
