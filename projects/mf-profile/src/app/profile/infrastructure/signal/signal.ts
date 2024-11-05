import { signal } from "@angular/core";
import { PROFILE_INITIAL_DATA } from "../constants/profile-user-initial.constant";

const profileSignal = signal({...PROFILE_INITIAL_DATA})
export default profileSignal;