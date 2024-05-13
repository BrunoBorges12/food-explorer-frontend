'use client'
import { Navbar } from './components/Navbar'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'

import { SideBar } from './components/Sidebar'
import { useState } from 'react'

export const Navigation = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
    return (
        <>
            <header className="top-0 bg-dark-600  flex items-center  z-[999]  p-0 h-20      w-full fixed">
                <div className="  w-full px-5   relative lg:px-28">
                    <div className="flex items-center justify-between  relative z-50 ">
                        {openSideBar ? (
                            <IoMdClose
                                onClick={() => setOpenSideBar(false)}
                                className=" cursor-pointer text-white w-6 h-6 lg:hidden"
                            />
                        ) : (
                            <RxHamburgerMenu
                                onClick={() => setOpenSideBar(true)}
                                className=" cursor-pointer text-white w-6 h-6 lg:hidden"
                            />
                        )}

                        <Navbar />
                    </div>
                </div>
            </header>
            <SideBar openSideBar={openSideBar} />
        </>
    )
}
