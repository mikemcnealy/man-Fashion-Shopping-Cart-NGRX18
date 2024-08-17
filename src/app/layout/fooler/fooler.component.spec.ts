import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoolerComponent } from './fooler.component';

describe('FoolerComponent', () => {
  let component: FoolerComponent;
  let fixture: ComponentFixture<FoolerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoolerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
