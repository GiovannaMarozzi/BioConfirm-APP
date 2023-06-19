import { Component } from '@angular/core';
// import * as $ from 'jquery';


@Component({
  selector: 'app-cad-biometric',
  templateUrl: './cad-biometric.component.html',
  styleUrls: ['./cad-biometric.component.css']
})
export class CadBiometricComponent {
  cadastro: any = {};
  buttonClicked1 = false;
  buttonClicked2 = false;
  buttonClicked3 = false;
  buttonClicked4 = false;

  showModal(buttonNumber: number){
    // $('#exampleModalCenter').modal('show');
  }


  submitForm() {
    
  }
}
