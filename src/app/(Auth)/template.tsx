import { Logo } from '@/components/Logo'

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center     py-4  loading lg:h-screen lg:justify-between lg:flex-row lg:px-24  lg:max-w-[90%]">
            <div>
                <span className="flex items-center gap-4 py-8 text-light-100 text-2xl  lg:gap-2">
                    <div className="lg:hidden">
                        {' '}
                        <Logo size="small" />
                    </div>
                    <div className=" hidden lg:block">
                        {' '}
                        <Logo size="large" />
                    </div>
                    <span className="capitalize lg:text-4xl ">
                        food explorer
                    </span>
                </span>
            </div>
            {children}
        </div>
    )
}
