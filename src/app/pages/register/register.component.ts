import { Component } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormGroup, FormBuilder, Validator, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/registers/registers.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NzFormModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzSelectModule
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form?: FormGroup;

  constructor(private formBuilder: FormBuilder, private registersService: RegisterService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pasword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      nickname: ['', [Validators.required]],
      role: ['Empleado'],
      phneNumber: ['', [Validators.required]],
      photoURL: [''],
    });
  }
  onClickRegister(): void{
    if(this.form?.invalid) return;
    const email = this.form?.value.email;
    const password = this.form?.value.password;
    
    this.registersService.createRegister({email, password}, 
      this.form?.value)
    .then((response) => {
      console.log(response);
    })
    .catch(error => console.log(error));
  }
}
