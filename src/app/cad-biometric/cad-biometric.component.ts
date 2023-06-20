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
  modalOpen = false;
  biometricsCompleted = false;

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
        if (this.buttonClicked2 && this.buttonClicked3 && this.buttonClicked4) {
          this.biometricsCompleted = true;
        }
        break;
      case 2:
        this.buttonClicked2 = true;
        if (this.buttonClicked1 && this.buttonClicked3 && this.buttonClicked4) {
          this.biometricsCompleted = true;
        }
        break;
      case 3:
        this.buttonClicked3 = true;
        if (this.buttonClicked1 && this.buttonClicked2 && this.buttonClicked4) {
        this.biometricsCompleted = true;
        }
        break;
      case 4:
        this.buttonClicked4 = true;
        if (this.buttonClicked2 && this.buttonClicked2 && this.buttonClicked3) {
          this.biometricsCompleted = true;
        }
        break;
      default:
        break;
    }

    const modalBackdropElement = document.getElementsByClassName('modal-backdrop')[0];
    if (modalBackdropElement) {
      modalBackdropElement.addEventListener('click', () => {
        this.hideModal();
      });
    }
    this.modalOpen = true;
  }

  hideModal() {
    const modalElement = document.getElementById('modalBiometric');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
      modalElement.removeAttribute('aria-modal');
    }

    const modalBackdropElement = document.getElementsByClassName('modal-backdrop')[0];
    if (modalBackdropElement) {
      modalBackdropElement.removeEventListener('click', () => {
        this.hideModal();
      });
    }
    this.modalOpen = false;
  }

  submitForm() {
    // Lógica para o envio do formulário
  }
}
