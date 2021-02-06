import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-while',
  templateUrl: './do-while.component.html',
  styleUrls: ['./do-while.component.css']
})
export class DoWhileComponent implements OnInit {
  initial: any;
  initialvalue: number;
  operator: any;
  c2: any;


  a: any;
  c1: any;

  initialoper: any;
  loop: any = '';
  i: any;
  abc: any = "<";
  abc1: any = "<=";
  abc2: any = ">";
  abc3: any = ">=";
  out: any = '';
  forCondition: boolean = false;
  iforCondition: any = false;
  bra: any = "{";
  bra2: any = "}";
  cbra: any = "(";
  cbra2: any = ")";
  constructor() { }
  selectOperation(oper: string) {
    switch (oper) {
      case "<":
        this.forCondition = this.initial < this.c2;

        return this.forCondition
      case "<=":
        this.forCondition = this.initial <= this.c2;

        return this.forCondition
      case ">":
        this.forCondition = this.initial > this.c2;

        return this.forCondition
      case ">=":
        this.forCondition = this.initial >= this.c2;

        return this.forCondition
    }
  }
  selectOper(ioper: any) {
    switch (ioper) {
      case "++":
        this.iforCondition = this.initial++;

        return this.iforCondition
      case "--":
        this.iforCondition = this.initial++;

        return this.iforCondition
    }
  }

  run() {
    this.initial = this.initialvalue;
    do {
      this.out = this.out + this.loop + '\n';
      this.selectOper(this.initialoper)
    }
    while (this.selectOperation(this.operator));



  }
  ngOnInit(): void {
  }

}
