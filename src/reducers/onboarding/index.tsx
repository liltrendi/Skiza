interface I_ActionProps {
    type: string;
    payload: boolean;
}

type T_OnboardingReducer = (state: boolean, action: I_ActionProps) => boolean

const initialState: boolean = false;

export const onboardingReducer: T_OnboardingReducer = (state: boolean = initialState, action: I_ActionProps): boolean => {
    switch(action.type){
        case "ONBOARDING_COMPLETE":
            return action.payload
        default:
            return state;
    }
}