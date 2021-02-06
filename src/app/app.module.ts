import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { arrRouting } from "./app.routing";

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllAlgoComponent } from './all-algo/all-algo.component';
import { IfComponent } from './if/if.component';
import { WhileComponent } from './while/while.component';
import { DoWhileComponent } from './do-while/do-while.component';
import { IfElseComponent } from './if-else/if-else.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';

@NgModule({
  declarations: [AppComponent, AllAlgoComponent, IfComponent, WhileComponent, DoWhileComponent, IfElseComponent, SwitchCaseComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, arrRouting, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
