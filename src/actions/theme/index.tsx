interface ActionProps {
    type: string;
    payload: string;
}

export const switchTheme= (type: string, payload: string): ActionProps => ({
    type, payload
})