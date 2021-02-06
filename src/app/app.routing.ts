import { RouterModule, Routes } from '@angular/router';

import { AllAlgoComponent } from './all-algo/all-algo.component';
import { IfComponent } from './if/if.component';
import { WhileComponent } from './while/while.component';
import { DoWhileComponent } from './do-while/do-while.component';
import { IfElseComponent } from './if-else/if-else.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';

const arr: Routes = [
  { path: 'if', component: IfComponent },
  { path: '', component: AllAlgoComponent },
  { path: 'while', component: WhileComponent },
  { path: 'do-while', component: DoWhileComponent },
  { path: 'if-else', component: IfElseComponent },
  { path: 'switch-case', component: SwitchCaseComponent },

];
export const arrRouting = RouterModule.forRoot(arr);
