import { Component, HostBinding, OnInit } from "@angular/core";
import profileBehavior from "../../infrastructure/behaviors/profile.behavior";
import { tap } from "rxjs";
import { ProfileUser } from "../../infrastructure/models/profile-user.model";
import { PROFILE_INITIAL_DATA } from "../../infrastructure/constants/profile-user-initial.constant";
import { Location } from "@angular/common";
import { environment } from "projects/mf-profile/src/environments/environment";

@Component({
    selector: 'mf-app-profile',
    styleUrls: ['./profile.component.scss'],
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    // appUrlAssets: string =  'http://localhost:4300/assets'
    appUrlAssets: string = environment.appUrlAssets;
    @HostBinding("style.--imageUrl") imagesUrl = `url('${this.appUrlAssets}/images/background.jpg')`
    user: ProfileUser = {
        name: 'Desconocido',
        email: 'desconocido@gmail.com',
        age: 0
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