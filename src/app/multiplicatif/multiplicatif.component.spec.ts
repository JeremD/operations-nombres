import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicatifComponent } from './multiplicatif.component';

describe('MultiplicatifComponent', () => {
  let component: MultiplicatifComponent;
  let fixture: ComponentFixture<MultiplicatifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplicatifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
