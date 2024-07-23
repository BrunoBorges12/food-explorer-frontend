'use client'
import { Navigation } from '@/components/Navigation'
import { Products } from '@/components/Products'
import Loading from './loading'
import { useSession } from 'next-auth/react'

export default function Home() {
    const { status } = useSession()
    if (status === 'loading') {
        return <Loading />
    }
    return (
        <div className=" ">
            <Navigation />
            <Products />
        </div>
    )
}
