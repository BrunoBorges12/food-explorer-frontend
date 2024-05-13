import { Logo } from '@/components/Logo'
import { Navbar } from './components/Navbar'

export const Navigation = () => {
    return (
        <header className="top-0 bg-dark-600  flex items-center  z-[999]  p-0 h-20    w-full fixed">
            <div className="  w-full px-5   relative lg:px-28">
                <div className="flex items-center justify-between   ">
                    <div className="pt-1 ml-8">
                        <Logo size="small" color="primary" />
                    </div>
                    <Navbar />
                </div>
            </div>
        </header>
    )
}
