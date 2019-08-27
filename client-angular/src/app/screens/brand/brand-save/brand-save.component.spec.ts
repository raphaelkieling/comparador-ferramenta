import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSaveComponent } from './brand-save.component';

describe('BrandSaveComponent', () => {
  let component: BrandSaveComponent;
  let fixture: ComponentFixture<BrandSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
