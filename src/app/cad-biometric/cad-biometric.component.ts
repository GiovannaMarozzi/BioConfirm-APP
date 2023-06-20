import { Component } from '@angular/core';


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

  showModal(buttonNumber: number) {

    const modalElement = document.getElementById('modalBiometric');
    if (modalElement) {
      modalElement.classList.add('show');
      modalElement.style.display = 'block';
      modalElement.setAttribute('aria-modal', 'true');
    }

    switch (buttonNumber) {
      case 1:
        this.buttonClicked1 = true;
        break;
      case 2:
        this.buttonClicked2 = true;
        break;
      case 3:
        this.buttonClicked3 = true;
        break;
      case 4:
        this.buttonClicked4 = true;
        break;
      default:
        break;
    }

    const modalBackdropElement = document.getElementById('modalBackdrop');
    if (modalBackdropElement) {
      modalBackdropElement.addEventListener('click', () => {
        this.hideModal();
      });
    }
  }

  hideModal() {
    const modalElement = document.getElementById('modalBiometric');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.removeAttribute('aria-modal');
    }
  }


submitForm() {

}
}
