import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent implements OnInit {

  initial: any;
  initialvalue: number;
  operator: any;
  c2: any;


  a: any;
  c1: any;

  initialoper: any;
  loop: any = '';
  loop1: any = '';
  loop2: any = '';
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
  run() {
    switch (this.operator) {
      case "<":
        return this.out = this.loop


      case ">":
        return this.out = this.loop1

      case "==":
        return this.out = this.loop2

    }
  }



  ngOnInit(): void {
  }

}
