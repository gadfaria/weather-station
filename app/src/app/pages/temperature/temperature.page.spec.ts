import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemperaturePage } from './temperature.page';

describe('TemperaturePage', () => {
  let component: TemperaturePage;
  let fixture: ComponentFixture<TemperaturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemperaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
