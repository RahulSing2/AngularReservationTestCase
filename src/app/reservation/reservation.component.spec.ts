import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationComponent } from './reservation.component';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('ticket reservation ',()=>{
 // it('Reserve  & Incerement the people count by 1',()=>{
    let Reservation= new ReservationComponent();
    beforeEach(()=>{
      Reservation= new ReservationComponent();
    })
    afterEach(()=>{
      Reservation==null;
    })
    it('Reserve & Increment the count by 1',()=>{
      let peopleCount=Reservation.reserveSeat();
      expect(peopleCount).toEqual(21);
    })
    // let peopleCount=Reservation.reserveSeat();
    // expect(peopleCount).toEqual(21);
 // })
  it('Cancle  & Decerement the people count by 1',()=>{
    let Reservation= new ReservationComponent();
    let peopleCount=Reservation.cancelSeat();
    expect(peopleCount).toEqual(19);
  })
})