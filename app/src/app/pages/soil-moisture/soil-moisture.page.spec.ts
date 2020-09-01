import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoilMoisturePage } from './soil-moisture.page';

describe('SoilMoisturePage', () => {
  let component: SoilMoisturePage;
  let fixture: ComponentFixture<SoilMoisturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoilMoisturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoilMoisturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
