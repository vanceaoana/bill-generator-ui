import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillUploaderComponent } from './bill-uploader.component';

describe('BillUploaderComponent', () => {
  let component: BillUploaderComponent;
  let fixture: ComponentFixture<BillUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
