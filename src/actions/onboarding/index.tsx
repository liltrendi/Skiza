interface ActionProps {
    type: string;
    payload: boolean;
}

export const completeOnboarding = (type: string, payload: boolean): ActionProps => ({
    type, payload
})