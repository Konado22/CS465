import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { EditTripComponent } from './edit-trip.component';

describe('EditTripComponent', () => {
  let component: EditTripComponent;
  let fixture: ComponentFixture<EditTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule,EditTripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
