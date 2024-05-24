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
import { useContext, useState } from 'react'
import { CartContext } from '@/context/cart'
import { IProduct } from '@/@types/product'

export type propsCardProduct = IProduct
export const CardProduct = ({
    name,
    price,
    img,
    description,
    id,
}: propsCardProduct) => {
    const { dispatch } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)
    if (quantity < 1) {
        setQuantity(1)
    }
    return (
        <Card className="!bg-dark-700  !rounded-lg  !px-8">
            <div className="flex flex-col items-center justify-center text-white gap-3">
                <Image src={img} alt="image" preview={false} />
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-light-300 font-poppins text-2xl text-center">
                        {name}
                    </h1>
                    <p className="text-light-400 text-sm text-center ">
                        {description}
                    </p>
                </div>
                <h2 className="text-cake-200 text-3xl">R$ {price}</h2>
            </div>
            <div className="flex  gap-8   text-white pt-3 ">
                <div className="flex items-center gap-2">
                    <button onClick={() => setQuantity(quantity - 1)}>
                        <FaMinus className="w-7 h-7" />
                    </button>

                    <input
                        readOnly={true}
                        value={quantity}
                        className="border-none shadow-none focus:outline-none focus:ring-0  text-center bg-transparent font-bold w-10 text-2xl"
                        type="number"
                    />
                    <button>
                        <FaPlus
                            className="w-7 h-7"
                            onClick={() => setQuantity(quantity + 1)}
                        />
                    </button>
                </div>
                <Button
                    size="large"
                    label="incluir"
                    onClick={() => {
                        dispatch({
                            type: 'addCart',
                            product: {
                                id,
                                name,
                                description,
                                price,
                                quantity,
                                img,
                            },
                        })
                    }}
                />
            </div>
        </Card>
    )
}
