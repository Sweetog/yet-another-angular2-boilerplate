import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './core.component.html'
})
export class AppComponent { 
    name = 'Angular'; 
    title = ''
  
    public sliderValue: number = 5;
    public numericValue: number = 5;
    public min: number = 0;
    public max: number = 10;
    public smallStep: number = 1;

    
}

