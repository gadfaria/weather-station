import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HumidityPage } from './humidity.page';

describe('HumidityPage', () => {
  let component: HumidityPage;
  let fixture: ComponentFixture<HumidityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumidityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HumidityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
