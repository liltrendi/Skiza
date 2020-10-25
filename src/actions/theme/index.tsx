interface SwitchThemeProps {}

interface ActionProps {
    type: string;
    payload: string;
}

export const switchTheme: SwitchThemeProps = (type: string, payload: string): ActionProps => ({
    type, payload
})