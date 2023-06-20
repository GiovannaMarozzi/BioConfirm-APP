import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-paassenger',
  templateUrl: './new-paassenger.component.html',
  styleUrls: ['./new-paassenger.component.css']
})

export class NewPaassengerComponent {
  @ViewChild('formCad') formCad: any;
  
  onSubmit(): void {
    if (this.formCad.valid) {
      const formData = this.formCad.value;
      console.log(formData);
    }
  }
}