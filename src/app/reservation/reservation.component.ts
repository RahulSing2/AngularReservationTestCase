import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
public buscapacity=50
public peopleCount=20
reserveSeat(){
  return ++this.peopleCount;
}
cancelSeat(){
  return --this.peopleCount;
}
// reserveSeet(){
//   let seatReserved=false;
//   if(this.peopleCount<=this.buscapacity){
//     this.peopleCount++;
//     seatReserved=true;
 //  }
//   return seatReserved;
//}
}
