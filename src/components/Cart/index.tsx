'use client'
import { Flex, Image, QRCode, Space } from 'antd'
import { FaCreditCard, FaPix } from 'react-icons/fa6'
import { Form } from '../Forms/Form'
import { Input } from '../Input'
import { useForm } from 'react-hook-form'
import { Button } from '../Button'
import Ticket from '../Navigation/components/Icons/Ticket'
import { useState } from 'react'
import classNames from 'classnames'

export const Cart = () => {
    const [tabs, setTabs] = useState('pix')
    const methods = useForm()
    return (
        <Flex className="text-white pt-40" justify="space-between">
            <div className="container lg:px-28">
                <Space
                    wrap={true}
                    className="w-1/2"
                    direction={'vertical'}
                    size={70}
                >
                    <h1 className="text-2xl">Meu Pedido</h1>
                    <Space>
                        <Flex wrap={true} align="center" gap={14}>
                            <Image
                                className="!w-20  !h-20"
                                src="./product.png"
                                alt="pe"
                            />
                            <Flex vertical align="start">
                                <div className="flex gap-5">
                                    <p className="text-2xl">
                                        {' '}
                                        1 x Salada Radish
                                    </p>
                                    <span className="text-sm text-light-400">
                                        R$ 25,97
                                    </span>
                                </div>

                                <button className="text-red-500  text-xs">
                                    Excluir
                                </button>
                            </Flex>
                        </Flex>
                    </Space>
                </Space>
                <Space className="w-1/2" direction={'vertical'} size={70}>
                    <h1 className="text-2xl">Pagamento</h1>
                    <Flex vertical className="border bg-dark-500">
                        <Flex className="border">
                            <Space
                                onClick={() => setTabs('pix')}
                                className={classNames(
                                    'flex items-center transition-all  w-1/2 border-r  py-5 justify-center  cursor-pointer',
                                    tabs === 'pix' ? 'bg-dark-800' : '',
                                )}
                            >
                                <FaPix />
                                Pix
                            </Space>
                            <Space
                                onClick={() => setTabs('card')}
                                className={classNames(
                                    'flex items-center transition-all  w-1/2 py-5  justify-center cursor-pointer ',
                                    tabs === 'card' ? 'bg-dark-800' : '',
                                )}
                            >
                                <FaCreditCard />
                                Crédico
                            </Space>
                        </Flex>
                        <Flex justify="center" className="py-10 w-full">
                            <QRCode
                                className="!hidden"
                                value="pix"
                                color="#76797B"
                                size={250}
                            />
                            <div className="w-full ">
                                <Form methods={methods}>
                                    <div className=" flex flex-col justify-center px-32">
                                        <Input
                                            className=""
                                            placeholder="0000 0000 0000 0000"
                                            label="Número do Cartão"
                                            id="credit"
                                        />
                                        <div className="flex mt-5 ">
                                            <Input
                                                className="!w-[70%]"
                                                placeholder="04/25"
                                                label="Validade"
                                                id="valid"
                                            />
                                            <Input
                                                className="!w-[70%]"
                                                placeholder="000"
                                                label="CVC"
                                                id="cvc"
                                            />
                                        </div>
                                        <Button
                                            icon={<Ticket />}
                                            className="w-full flex justify-center !mt-5"
                                            label="Finalizar pagamento"
                                        />
                                    </div>
                                </Form>
                            </div>
                        </Flex>
                    </Flex>
                </Space>
            </div>
        </Flex>
    )
}
