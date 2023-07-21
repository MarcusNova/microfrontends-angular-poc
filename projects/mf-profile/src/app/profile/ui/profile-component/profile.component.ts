import { Component, OnInit } from "@angular/core";
import profileBehavior from "../../infrastructure/behaviors/profile.behavior";
import { tap } from "rxjs";
import { ProfileUser } from "../../infrastructure/models/profile-user.model";
import { PROFILE_INITIAL_DATA } from "../../infrastructure/constants/profile-user-initial.constant";
import { Location } from "@angular/common";

@Component({
    selector: 'mf-app-profile',
    styleUrls: ['./profile.component.scss'],
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    user: any = {
        name: 'Desconocido',
        email: 'desconocido@gmail.com',
        edad: 20
    }
    constructor(public location: Location) {}
    ngOnInit(): void {
        profileBehavior.pipe(
            tap((value: ProfileUser) => {
                this.user = value ? { ...value } : { ...PROFILE_INITIAL_DATA }
            })
        )
        .subscribe()
    }
    onBack() {
        this.location.back();
    }

}