import { Logo } from '@/components/Logo'

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-between h-screen max-w-[90%] mx-auto px-24   py-4  loading">
            <div>
                <span className="flex items-center gap-2 text-light-100 text-2xl">
                    <Logo size="large" />
                    <span className="text-4xl capitalize">food explorer</span>
                </span>
            </div>
            {children}
        </div>
    )
}
