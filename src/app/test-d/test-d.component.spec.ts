import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDComponent } from './test-d.component';

describe('TestDComponent', () => {
  let component: TestDComponent;
  let fixture: ComponentFixture<TestDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
