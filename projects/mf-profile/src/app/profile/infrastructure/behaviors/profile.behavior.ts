import { BehaviorSubject } from "rxjs";
import { PROFILE_INITIAL_DATA } from "../constants/profile-user-initial.constant";

export const profileBehavior = new BehaviorSubject({...PROFILE_INITIAL_DATA});

export default profileBehavior;