export interface propsIcon {
    size: 'small' | 'large'
    color: 'primary' | 'sencodary'
}
export type propsLogo = {
    admin?: boolean
} & propsIcon
