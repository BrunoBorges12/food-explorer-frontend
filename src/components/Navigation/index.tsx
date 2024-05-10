import { Logo } from '@/components/Logo'
import { Navbar } from './Navbar'

export const Navigation = () => {
    return (
        <header className="top-0 bg-dark-600  items-center  z-[999] h-auto p-0  py-6  w-full fixed">
            <div className=" flex items-center gap-16 w-full px-5   relative lg:px-28">
                <Logo size="small" color="primary" />
                <Navbar />
            </div>
        </header>
    )
}
