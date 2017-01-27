/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CradsComponent } from './crads.component';

describe('CradsComponent', () => {
  let component: CradsComponent;
  let fixture: ComponentFixture<CradsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CradsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
