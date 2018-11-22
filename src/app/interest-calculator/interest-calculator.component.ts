import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'interest-calculator',
  templateUrl: './interest-calculator.component.html',
  styleUrls: ['./interest-calculator.component.css']
})
export class InterestCalculatorComponent implements OnInit {
principle = this.principle;
interest = this.interest;
timesCompounded = this.timesCompounded;
term = this.term;
result = this.result;

  constructor() { }

  onSubmit(interestForm: NgForm) {
    this.principle = Number(interestForm.value.principle);
    this.interest = Number(interestForm.value.interest);
    this.timesCompounded = Number(interestForm.value.timesCompounded);
    this.term = Number(interestForm.value.term);

    this.result = this.principle * Math.pow((1 + (this.interest/this.timesCompounded)),(this.timesCompounded * this.term))
  }

  ngOnInit() {
  }

}
