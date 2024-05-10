import { propsIcon } from '../@types/logo'
import cls from 'classnames'

function IconLogo({ size, color }: propsIcon) {
    return (
        <svg
            className={cls(
                {
                    'w-10 h-10': size === 'large',
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
                className={cls(
                    color === 'primary' ? 'fill-[#065E7C]' : 'fill-light-700',
                )}
                d="M21.57.217l21.404 11.875v23.75L21.57 47.719.167 35.843V12.092L21.571.217z"
            ></path>
        </svg>
    )
}

export default IconLogo
