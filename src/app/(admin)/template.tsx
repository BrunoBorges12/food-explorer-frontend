'use client'
import { Navigation } from '@/components/Navigation'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Loading from '../loading'
import { useEffect } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    const { data: session, status } = useSession()

    useEffect(() => {
        if (session?.admin === false) {
            router.push('/')
        }
    })
    if (status === 'loading') {
        return <Loading />
    }
    return (
        <div>
            <Navigation />
            {children}
        </div>
    )
}
