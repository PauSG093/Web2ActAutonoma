import { Component } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormGroup, FormBuilder, Validator, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzFormModule,
            NzInputModule,
            NzButtonModule,
            ReactiveFormsModule,
            NzCheckboxModule,
            RouterLink,
            NzIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private UsersService: UsersService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  onClickLogin(): void {
    this.UsersService.login(this.form.value)
      .then((response) => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }
 
  onClickLoginGoogle(): void {
    this.UsersService.loginWithGoogle()
      .then((response) => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }
}
