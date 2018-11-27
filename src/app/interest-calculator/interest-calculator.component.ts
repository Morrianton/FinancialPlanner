import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'interest-calculator',
  templateUrl: './interest-calculator.component.html',
  styleUrls: ['./interest-calculator.component.css']
})
export class InterestCalculatorComponent implements OnInit {
principle: number = Number(this.principle);
interest: number = Number(this.interest);
timesCompounded: number = Number(this.timesCompounded);
term: number = Number(this.term);
result: string = this.result;

  constructor() { }

  
  ngOnInit() {
  }

  onSubmit(simpleInterestForm: NgForm) {
    this.principle = simpleInterestForm.value.principle;
    this.interest = simpleInterestForm.value.interest;
    this.timesCompounded = simpleInterestForm.value.timesCompounded;
    this.term = simpleInterestForm.value.term;

    this.interest /= 100;

    this.result = (this.principle * Math.pow((1 + (this.interest/this.timesCompounded)),(this.timesCompounded * this.term))).toFixed(2);
  }

  resetForm() {
    document.getElementById('principle').focus();
    this.result = "";
  }
  
}
