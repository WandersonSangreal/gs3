import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {IonicModule, IonInput} from '@ionic/angular';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ModalController} from "@ionic/angular";
import {MaskitoElementPredicate, MaskitoOptions} from "@maskito/core";
import {MaskitoDirective} from "@maskito/angular";
import {AuthService} from "../../services/auth.service";
import {ToastController} from "@ionic/angular/standalone";
import {push} from "ionicons/icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule, MaskitoDirective],
  standalone: true,
})
export class LoginComponent {

  public form: FormGroup;
  public readonly maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();
  public readonly cpfMask: MaskitoOptions = {
    mask: [
      ...Array(3).fill(/\d/),
      '.',
      ...Array(3).fill(/\d/),
      '.',
      ...Array(3).fill(/\d/),
      '-',
      ...Array(2).fill(/\d/),
    ],
  };

  public constructor(private formBuilder: FormBuilder, private modalController: ModalController, private router: Router, private toastController: ToastController, private authService: AuthService) {

    this.form = this.formBuilder.group({
      cpf: [null, Validators.required],
      password: [null, Validators.required],
    });

  }

  public async login() {

    if (this.form.valid) {

      const credentials = this.form.value;

      credentials.cpf = credentials.cpf.replace(/\D/g, '');

      this.authService.login(credentials).then(response => {

        if (response) {

          this.modalController.dismiss();

          this.router.navigate(['/main']);

        } else {

          this.error();

        }

      });

    }

  }

  public async error() {

    const toast = await this.toastController.create({
      message: 'Erro ao tentar logar!',
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();

  }

}
