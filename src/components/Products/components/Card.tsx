// import Swiper core and required modules
'use client'
import { FaPlus, FaMinus } from 'react-icons/fa6'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Card, Image } from 'antd'
import { Button } from '@/components/Button'

export const CardProduct = () => {
    return (
        <Card className="!bg-dark-700  !rounded-lg  !px-8">
            <div className="flex flex-col items-center justify-center text-white gap-3">
                <Image src="./product.png" alt="image" preview={false} />
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-light-300 font-poppins text-2xl text-center">
                        Spaguetti Gambe
                    </h1>
                    <p className="text-light-400 text-sm text-center ">
                        Rabanetes, folhas verdes e molho agridoce salpicados com
                        gergelim
                    </p>
                </div>
                <h2 className="text-cake-200 text-3xl">R$ 79,17</h2>
            </div>
            <div className="flex  gap-8   text-white pt-3 ">
                <div className="flex items-center gap-2">
                    <button>
                        <FaMinus className="w-7 h-7" />
                    </button>

                    <input
                        value={1}
                        className="border-none shadow-none focus:outline-none focus:ring-0  text-center bg-transparent font-bold w-10 text-2xl"
                        type="number"
                    />
                    <button>
                        <FaPlus className="w-7 h-7" />
                    </button>
                </div>
                <Button size="large" label="incluir" />
            </div>
        </Card>
    )
}
