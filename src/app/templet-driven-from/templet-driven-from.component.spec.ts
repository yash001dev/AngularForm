import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletDrivenFromComponent } from './templet-driven-from.component';

describe('TempletDrivenFromComponent', () => {
  let component: TempletDrivenFromComponent;
  let fixture: ComponentFixture<TempletDrivenFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempletDrivenFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempletDrivenFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
