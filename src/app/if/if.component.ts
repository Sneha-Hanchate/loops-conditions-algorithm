import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

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
      case "==":
        this.forCondition = this.initial == this.c2;

        return this.forCondition
      case "!=":
        this.forCondition = this.initial != this.c2;

        return this.forCondition
    }
  }


  run() {
    this.out = "";
    this.initial = this.initialvalue;

    if (this.selectOperation(this.operator)) {

      this.out = this.out + this.loop + '\n';

    }
  }
  ngOnInit(): void {
  }

}
