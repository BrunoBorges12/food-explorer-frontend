'use client'
import { Button } from '@/components/Button'
import InputSearch from '../InputSearch'
import Ticket from '../Icons/Ticket'
import React from 'react'
import { GoSignOut } from 'react-icons/go'

export const Navbar = () => {
    return (
        <div className=" flex items-center  gap-16">
            <div className="pb-2">
                <InputSearch />
            </div>
            <div>
                <Button icon={<Ticket />} label="Pedidos (1)" />
            </div>
            <div className="text-white">
                <GoSignOut className="w-8 h-8" />
            </div>
        </div>
    )
}
