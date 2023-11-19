import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrComponentComponent } from './ur-component.component';

describe('UrComponentComponent', () => {
  let component: UrComponentComponent;
  let fixture: ComponentFixture<UrComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrComponentComponent]
    });
    fixture = TestBed.createComponent(UrComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
