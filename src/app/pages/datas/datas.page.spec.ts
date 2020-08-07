import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatasPage } from './datas.page';

describe('DatasPage', () => {
  let component: DatasPage;
  let fixture: ComponentFixture<DatasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
