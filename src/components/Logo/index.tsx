import { propsLogo } from './@types/logo'
import IconLogo from './components/IconLogo'
import cls from 'classnames'

export const Logo = ({ size, admin, color }: propsLogo) => {
    return (
        <div className=" flex items-center gap-2 relative">
            <IconLogo size={size} color={color} />
            <h1
                className={cls(
                    'text-nowrap',
                    size === 'large' ? 'text-4xl' : 'text-base',
                    color === 'primary' ? 'text-light-100' : 'text-light-700',
                )}
            >
                Food explorer
            </h1>
            {admin && (
                <span className=" text-xs top-5 left-0 pl-28 absolute text-cake-200">
                    admin
                </span>
            )}
        </div>
    )
}
