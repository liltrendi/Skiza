interface I_ActionProps {
    type: string;
    payload: boolean;
}

type T_TogglePlayerFooter = (type: string, payload: boolean) => I_ActionProps

export const togglePlayerFooter: T_TogglePlayerFooter = (type: string, payload: boolean): I_ActionProps => ({
    type, payload
})