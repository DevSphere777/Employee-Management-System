import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficersComponent } from './officers.component';

describe('OfficersComponent', () => {
  let component: OfficersComponent;
  let fixture: ComponentFixture<OfficersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficersComponent]
    });
    fixture = TestBed.createComponent(OfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
