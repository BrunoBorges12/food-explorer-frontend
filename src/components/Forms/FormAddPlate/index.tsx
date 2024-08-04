import { Select, Upload, UploadProps } from 'antd'
import { Form } from '../Form'
import { UploadOutlined } from '@ant-design/icons'
import { Controller, useForm } from 'react-hook-form'
import { Input } from './components'
import { input } from './components/tailwindcss/variants'
import TagInput from '@/components/TagInput'
import TextArea from 'antd/es/input/TextArea'
import { Button } from '@/components/Button'
import { useState } from 'react'

export const FormAddPlate = () => {
    const [fileList, setFileList] = useState([])

    const { base } = input()

    const methods = useForm({})
    const onSubmit = (data) => console.log(data)

    const handleChange = (info) => {
        setFileList(info.fileList)
        console.log('11')
        if (info.file.status !== 'uploading') {
            methods.setValue('file', info.file.originFileObj) // Set the file to react-hook-form
        }
    }

    const props = {
        onChange: handleChange,
        beforeUpload: () => false, // Prevent auto upload
        fileList: fileList,
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

                        <Upload {...props}>
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
