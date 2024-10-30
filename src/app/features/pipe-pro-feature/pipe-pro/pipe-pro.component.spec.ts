import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeProComponent } from './pipe-pro.component';

describe('PipeProComponent', () => {
  let component: PipeProComponent;
  let fixture: ComponentFixture<PipeProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeProComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
