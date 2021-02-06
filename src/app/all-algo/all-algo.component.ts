import { Component, OnInit } from '@angular/core';
import { Operator } from 'rxjs';

@Component({
  selector: 'app-all-algo',
  templateUrl: './all-algo.component.html',
  styleUrls: ['./all-algo.component.css'],
})
export class AllAlgoComponent implements OnInit {
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
    this.a = this.initial + this.initialoper;

    for (this.initial = this.initialvalue; this.selectOperation(this.operator); this.selectOper(this.initialoper)) {
      this.out = this.out + this.loop + '\n';

    }
  }
  ngOnInit(): void { }
}
