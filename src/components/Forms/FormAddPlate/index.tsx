import { Select, Upload, UploadProps } from 'antd'
import { Form } from '../Form'
import { UploadOutlined } from '@ant-design/icons'
import { Controller, useForm } from 'react-hook-form'
import { Input } from './components'
import { input } from './components/tailwindcss/variants'
import TagInput from '@/components/TagInput'
import TextArea from 'antd/es/input/TextArea'
import { Button } from '@/components/Button'
import { UploadChangeParam } from 'antd/es/upload'
import axios from 'axios'
import { plateProps } from './@types/plate'
import { zodResolver } from '@hookform/resolvers/zod'
import { plateZod } from './schema/plate'

export const FormAddPlate = () => {
    const { base } = input()

    const methods = useForm<plateProps>({ resolver: zodResolver(plateZod) })
    const onSubmit = async (data: plateProps) => {
        const formData = new FormData()
        if (data.file) {
            formData.append('file', data.file)
        }
        formData.append('name', 'teste1')
        formData.append('description', 'teste1')
        formData.append('   ', '[')
        console.log(data)
        try {
            console.log('foi')

            const response = await axios.post(
                'http://127.0.0.1:8000/v1/api/create_product',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            )
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (info: UploadChangeParam) => {
        if (info.file.status !== 'uploading') {
            methods.setValue('file', info.file.originFileObj as File)
        }
    }

    const props: UploadProps = {
        onChange: handleChange,
    }

    return (
        <div className=" w-full px-5   relative lg:px-28">
            <h2 className="text-5xl text-light-100 font-medium font-poppins pb-10 ">
                Adicionar prato
            </h2>
            <Form methods={methods}>
                <div className="flex gap-9">
                    <p className=" flex flex-col  text-light-400 font-roboto gap-y-3">
                        <label className=" text-base " htmlFor="">
                            Imagem do prato
                        </label>

                        <Upload
                            maxCount={1}
                            {...props}
                            className="!text-tomato-400"
                        >
                            <Button
                                label="Selecione imagem"
                                className="!bg-dark-800 !text-light-100 !rounded-lg !py-5 !flex items-center font-poppins !text-base"
                                icon={
                                    <UploadOutlined
                                        style={{ fontSize: '23px' }}
                                    />
                                }
                            >
                                Selecione imagem
                            </Button>
                        </Upload>
                    </p>
                    <Input.Text
                        name="name"
                        width="463px"
                        label={'Nome'}
                        background="dark-800"
                    />
                    <div
                        className={base({
                            className: 'text-light-200 w-[364px] ',
                        })}
                    >
                        <label htmlFor="">Categoria</label>
                        <Controller
                            defaultValue={'refeicao'}
                            control={methods.control}
                            name="category"
                            render={({ field }) => (
                                <Select
                                    className="!h-10 w-full  [&_.ant-select-arrow]:!text-light-200 [&_.ant-select-clear]:!text-light-200 [&_.ant-select-selector_.ant-select-selection-placeholder]:!text-light-200 [&_.ant-select-selector]:!text-light-200 [&_.ant-select-selector]:!bg-dark-800  !bg-dark-800  !text-light-100"
                                    placeholder="Refeição"
                                    allowClear
                                    {...field}
                                    options={[
                                        {
                                            value: 'refeicao',
                                            label: 'Refeição',
                                        },
                                        {
                                            value: 'sobremesa',
                                            label: 'Sobremesa',
                                        },
                                    ]}
                                />
                            )}
                        />{' '}
                    </div>
                </div>
                <div className="flex items-center pt-7 gap-8        ">
                    <TagInput />
                    <Input.Number
                        name="price"
                        width="290px"
                        label={'Preço'}
                        background="dark-800"
                    />
                </div>
                <div className="pt-5 ">
                    <div className=" flex flex-col  gap-2 text-light-400">
                        <label htmlFor="">Descrição</label>
                        <TextArea
                            className="!bg-dark-800 !text-white placeholder:!text-light-600"
                            rows={4}
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            maxLength={6}
                        />
                    </div>
                </div>
            </Form>
            <div className="pb-5 pt-7 flex justify-end">
                <Button
                    label="Salvar alterações"
                    background="tomato-200"
                    onClick={methods.handleSubmit(onSubmit)}
                />
            </div>
        </div>
    )
}
