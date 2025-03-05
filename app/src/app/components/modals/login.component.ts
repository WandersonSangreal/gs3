import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {IonicModule, IonInput} from '@ionic/angular';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ModalController} from "@ionic/angular";
import {MaskitoElementPredicate, MaskitoOptions} from "@maskito/core";
import {MaskitoDirective} from "@maskito/angular";

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

  public constructor(private formBuilder: FormBuilder, private modalController: ModalController, private router: Router) {

    this.form = this.formBuilder.group({
      cpf: [null, Validators.required],
      password: [null, Validators.required],
    });

  }

  public login() {

    this.modalController.dismiss();

    this.router.navigate(['/main']);

  }

}
