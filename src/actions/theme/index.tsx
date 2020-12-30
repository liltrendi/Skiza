interface I_ActionProps {
    type: string;
    payload: string;
}

export const switchTheme= (type: string, payload: string): I_ActionProps => ({
    type, payload
})