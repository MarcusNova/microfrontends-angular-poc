declare module 'mfProfile/Behavior' {
    import { BehaviorSubject } from "rxjs";
    interface ProfileUser {
        name: string,
        email: string,
        age: number
    }
    const profileBehavior: BehaviorSubject<ProfileUser>;
    export default profileBehavior;
}