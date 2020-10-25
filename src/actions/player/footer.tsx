interface ActionProps {
    type: string;
    payload: boolean;
}

type TogglePlayerFooter = (type: string, payload: boolean) => ActionProps

export const togglePlayerFooter: TogglePlayerFooter = (type: string, payload: boolean): ActionProps => ({
    type, payload
})