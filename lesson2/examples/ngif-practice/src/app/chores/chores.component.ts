import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['Call mom','Complete LaunchCode prep work', 'Buy groceries', 'Clean kitchen', 'Empty dishwasher'];

   targetImage = 'https://static8.depositphotos.com/1000213/854/v/600/depositphotos_8547534-stock-illustration-target-with-arrow.jpg';

   constructor() { }

   ngOnInit() {
   }

}
