import { Injectable, effect, signal } from "@angular/core";
import { ProfileUser } from "../models/profile-user.model";
import { PROFILE_INITIAL_DATA } from "../constants/profile-user-initial.constant";
import profileSignal from "../signal/signal";

@Injectable({
    providedIn: 'root'
})
export class DataUserService {
    // Push new data
    emit(data: ProfileUser) {
        profileSignal.set(data);
    }
    // Subscribe to changes and handler it
    subscribe(callback: (payload: ProfileUser) => void) {
        effect(() => {
            callback(profileSignal())
        })
    }
    // Get just the value
    getValue() {
        return profileSignal();
    }
}