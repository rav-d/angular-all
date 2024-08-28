import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl: `./signup.component.html`,
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class SignupComponent {
    userInfo = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    })
}