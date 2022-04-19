import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  myDisplay: string = '';
  result: any;
  operator: string = '';
  number1: string[] = [];
  number2: string[] = [];
  joinedNumber1: string = '';
  joinedNumber2: string = '';
  isCalculated: boolean = false;

  constructor() {}

  handleClick($event: any) {
    switch ($event.target.id) {
      case '+':
        this.operator = '+';
        this.myDisplay = '';
        break;
      case '-':
        this.operator = '-';
        this.myDisplay = '';
        break;
      case '*':
        this.operator = '*';
        this.myDisplay = '';
        break;
      case '/':
        this.operator = '/';
        this.myDisplay = '';
        break;
      case '1':
        this.myDisplay += '1';
        if (this.isCalculated) {
          this.myDisplay = '1';
          this.reset();
          this.isCalculated = !this.isCalculated;
        }
        if (
          this.operator === '+' ||
          this.operator === '-' ||
          this.operator === '*' ||
          this.operator === '/'
        ) {
          this.number2.push('1');
        } else {
          this.number1.push('1');
        }
        break;
      case '2':
        this.myDisplay += '2';
        if (this.isCalculated) {
          this.reset();
          this.myDisplay = '2';
          this.isCalculated = !this.isCalculated;
        }
        if (
          this.operator === '+' ||
          this.operator === '-' ||
          this.operator === '*' ||
          this.operator === '/'
        ) {
          this.number2.push('2');
        } else {
          this.number1.push('2');
        }
        break;
      case '3':
        this.myDisplay += '3';
        if (this.isCalculated) {
          this.reset();
          this.myDisplay = '3';
          this.isCalculated = !this.isCalculated;
        }
        if (
          this.operator === '+' ||
          this.operator === '-' ||
          this.operator === '*' ||
          this.operator === '/'
        ) {
          this.number2.push('3');
        } else {
          this.number1.push('3');
        }
        break;
      case '4':
        this.myDisplay += '4';
        if (this.isCalculated) {
          this.reset();
          this.myDisplay = '4';
          this.isCalculated = !this.isCalculated;
        }
        if (
          this.operator === '+' ||
          this.operator === '-' ||
          this.operator === '*' ||
          this.operator === '/'
        ) {
          this.number2.push('4');
        } else {
          this.number1.push('4');
        }
        break;
      case '5':
        this.myDisplay += '5';
        if (this.isCalculated) {
          this.reset();
          this.myDisplay = '5';
          this.isCalculated = !this.isCalculated;
        }
        if (
          this.operator === '+' ||
          this.operator === '-' ||
          this.operator === '*' ||
          this.operator === '/'
        ) {
          this.number2.push('5');
        } else {
          this.number1.push('5');
        }
        break;
      case '6':
        this.myDisplay += '6';
        if (this.isCalculated) {
          this.reset();
          this.myDisplay = '6';
          this.isCalculated = !this.isCalculated;
        }
        if (
          this.operator === '+' ||
          this.operator === '-' ||
          this.operator === '*' ||
          this.operator === '/'
        ) {
          this.number2.push('6');
        } else {
          this.number1.push('6');
        }
        break;
      case '7':
        this.myDisplay += '7';
        if (this.isCalculated) {
          this.reset();
          this.myDisplay = '7';
          this.isCalculated = !this.isCalculated;
        }
        if (
          this.operator === '+' ||
          this.operator === '-' ||
          this.operator === '*' ||
          this.operator === '/'
        ) {
          this.number2.push('7');
        } else {
          this.number1.push('7');
        }
        break;
      case '8':
        this.myDisplay += '8';
        if (this.isCalculated) {
          this.reset();
          this.myDisplay = '8';
          this.isCalculated = !this.isCalculated;
        }
        if (
          this.operator === '+' ||
          this.operator === '-' ||
          this.operator === '*' ||
          this.operator === '/'
        ) {
          this.number2.push('8');
        } else {
          this.number1.push('8');
        }
        break;
      case '9':
        this.myDisplay += '9';
        if (this.isCalculated) {
          this.reset();
          this.myDisplay = '9';
          this.isCalculated = !this.isCalculated;
        }
        if (
          this.operator === '+' ||
          this.operator === '-' ||
          this.operator === '*' ||
          this.operator === '/'
        ) {
          this.number2.push('9');
        } else {
          this.number1.push('9');
        }
        break;
      case '0':
        this.myDisplay += '0';
        if (this.isCalculated) {
          this.reset();
          this.myDisplay = '0';
          this.isCalculated = !this.isCalculated;
        }
        if (
          this.operator === '+' ||
          this.operator === '-' ||
          this.operator === '*' ||
          this.operator === '/'
        ) {
          this.number2.push('0');
        } else {
          this.number1.push('0');
        }
        break;
      case '.':
        this.myDisplay += '.';
        if (this.isCalculated) {
          this.reset();
          this.myDisplay = '';
          this.isCalculated = !this.isCalculated;
        }
        if (
          this.operator === '+' ||
          this.operator === '-' ||
          this.operator === '*' ||
          this.operator === '/'
        ) {
          this.number2.push('.');
        } else {
          this.number1.push('.');
        }
        break;
    }
    console.log('IS CALCULATED:', this.isCalculated);
    console.log('DISPLAY: ', this.myDisplay);
    console.log('Your first number: ', this.number1);
    console.log('Your second number: ', this.number2);
    console.log('Your operator: ', this.operator);
  }

  reset() {
    // this.myDisplay = '';
    this.operator = '';
    this.number1 = [];
    this.number2 = [];
    this.joinedNumber1 = '';
    this.joinedNumber2 = '';
  }
  reset_special(){
        this.myDisplay = '';
        this.operator = '';
        this.number1 = [];
        this.number2 = [];
        this.joinedNumber1 = '';
        this.joinedNumber2 = '';
  }

  calculate() {
    // equal Clicked - set flag
    this.joinedNumber1 = this.number1.join('');
    this.joinedNumber2 = this.number2.join('');
    this.isCalculated = !this.isCalculated;

    if (this.operator == '+') {
      this.myDisplay = String(
        Number(this.joinedNumber1) + Number(this.joinedNumber2)
      );
      this.reset();
    } else if (this.operator == '-') {
      this.myDisplay = String(
        Number(this.joinedNumber1) - Number(this.joinedNumber2)
      );
    } else if (this.operator == '*') {
      this.myDisplay = String(
        Number(this.joinedNumber1) * Number(this.joinedNumber2)
      );
    } else if (this.operator == '/') {
      this.myDisplay = String(
        Number(this.joinedNumber1) / Number(this.joinedNumber2)
      );
    }
  }

  ngOnInit(): void {}
}
