import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './core.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';//example ng-model

// Import the InputsModule...
import { InputsModule } from '@progress/kendo-angular-inputs';


//navigation
import { MainNavComponent } from './nav/nav.component';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule, 
                  NgbModule.forRoot(),
                  InputsModule],
  declarations: [ AppComponent,
                  MainNavComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }