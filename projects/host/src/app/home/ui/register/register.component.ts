import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import Swal from "sweetalert2";
// import profileBehavior from "mfProfile/Behavior";
import profileSignal from "mfProfile/ProfileSignal";

@Component({
    selector: 'app-register',
    styleUrls: ['./register.component.scss'],
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    registerForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        age: new FormControl(0, [Validators.min(1)])
    })

    onSubmitHandler() {
        const data = {
            name: this.registerForm.get('name')?.value ?? '',
            email: this.registerForm.get('email')?.value ?? '',
            age: this.registerForm.get('age')?.value ?? 0
        };
        // profileBehavior.next(data);
        // Swal.fire({
        //     title: '¡Bien hecho!',
        //     text: 'Te has registrado con éxito.',
        //     icon: 'success',
        //     confirmButtonColor: '#EE5351'
        // })
        profileSignal.set(data) 
        Swal.fire({
                title: '¡Bien hecho!',
                text: 'Te has registrado con éxito.',
                icon: 'success',
                confirmButtonColor: '#EE5351'
        })
    }
}