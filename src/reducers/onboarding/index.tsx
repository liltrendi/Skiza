interface ActionProps {
    type: string;
    payload: boolean;
}

type OnboardingReducer = (state: boolean, action: ActionProps) => boolean

const initialState: boolean = false;

export const onboardingReducer: OnboardingReducer = (state: boolean = initialState, action: ActionProps): boolean => {
    switch(action.type){
        case "ONBOARDING_COMPLETE":
            return action.payload
        default:
            return state;
    }
}