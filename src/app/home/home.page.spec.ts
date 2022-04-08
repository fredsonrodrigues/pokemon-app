import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create component', () => expect(component).toBeDefined());

  it('should correct action called on button click', fakeAsync(() => {
    spyOn(component, 'submitForm');
    let input = fixture.debugElement.nativeElement.querySelector('ion-input');
    let button = fixture.debugElement.nativeElement.querySelector('ion-button');
    input.value = 'pikachu';
    button.click();
    tick();
    expect(component.submitForm).toHaveBeenCalled();
    expect(input.value).not.toBeNull();
  }));
});
