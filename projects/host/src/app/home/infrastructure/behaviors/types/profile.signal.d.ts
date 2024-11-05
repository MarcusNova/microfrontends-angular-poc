
declare module 'mfProfile/ProfileSignal' {
    import { WritableSignal } from "@angular/core";

    interface ProfileUser {
        name: string,
        email: string,
        age: number
    }
    const profileSignal: WritableSignal<ProfileUser>;
    export default profileSignal;
}