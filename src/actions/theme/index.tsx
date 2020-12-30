interface I_ActionProps {
    type: string;
    payload: string;
}

export const switchTheme = (type: string): I_ActionProps => {
    return {
        type,
        payload: type
    }
} 