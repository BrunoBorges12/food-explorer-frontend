import cls from 'classnames'

type propsLogo = {
    size: 'small' | 'large'
}
export const Logo = ({ size }: propsLogo) => {
    return (
        <svg
            className={cls(
                {
                    'w-12 h-12': size === 'large',
                    'w-7 h-7': size === 'small',
                },
                '',
            )}
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="48"
            fill="none"
            viewBox="0 0 43 48"
        >
            <path
                fill="#065E7C"
                d="M21.57.217l21.404 11.875v23.75L21.57 47.719.167 35.843V12.092L21.571.217z"
            ></path>
        </svg>
    )
}
