import { Component } from "@angular/core";
import {FormGroup, FormControl} from '@angular/forms';
import { ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: `app-login`,
    templateUrl: `./login.component.html`,
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class LoginComponent {
    profileForm = new FormGroup({
        password: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
    })
}