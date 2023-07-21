import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import profileBehavior from "mfProfile/Behavior";

@Component({
    selector: 'app-register',
    styleUrls: ['./register.component.scss'],
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    registerForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        age: new FormControl(0)
    })

    onSubmitHandler() {
        const data = {
            name: this.registerForm.get('name')?.value ?? '',
            email: this.registerForm.get('email')?.value ?? '',
            age: this.registerForm.get('age')?.value ?? 0
        };
        profileBehavior.next(data)
    }
}