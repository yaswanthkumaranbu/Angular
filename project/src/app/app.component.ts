import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from'@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name1:string = ''
  result:string = ''



  add(){  
    this.result = this.name1
  }

}
