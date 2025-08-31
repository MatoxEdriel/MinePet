/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VetToolsComponent } from './vet-tools.component';

describe('VetToolsComponent', () => {
  let component: VetToolsComponent;
  let fixture: ComponentFixture<VetToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
