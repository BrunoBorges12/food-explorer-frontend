import cls from 'classnames'
import InputSearch from '../InputSearch'

type propsSideBar = {
    openSideBar: boolean
}
export const SideBar = ({ openSideBar }: propsSideBar) => {
    return (
        <nav
            className={cls(
                openSideBar ? '-translate-x-0' : '-translate-x-full',
                '   transition-all  fixed bg-dark-1000 h-full top-0 left-0 w-full lg:hidden',
            )}
        >
            <div
                className=" flex flex-col px-11 pt-32 gap-8
            "
            >
                <InputSearch />
                <span className="border-b text-white pb-2">Sair</span>
            </div>
        </nav>
    )
}
