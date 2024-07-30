import { Button, Select, Upload } from 'antd'
import { Form } from '../Form'
import { UploadOutlined } from '@ant-design/icons'
import { useForm } from 'react-hook-form'
import { Input } from './components'
import { input } from './components/tailwindcss/variants'
import TagInput from '@/components/TagInput'

export const FormAddPlate = () => {
    const { base } = input()

    const methods = useForm({})
    return (
        <div className=" w-full px-5   relative lg:px-28">
            <h2 className="text-5xl text-light-100 font-mediu5 font-poppins pb-16 ">
                Adicionar prato
            </h2>
            <Form methods={methods}>
                <div className="flex gap-9">
                    <p className=" flex flex-col  text-light-400 font-roboto gap-y-3">
                        <label className=" text-base " htmlFor="">
                            Imagem do prato
                        </label>
                        <Upload>
                            <Button
                                className="!bg-dark-800 !text-light-100 !rounded-lg    !py-5 !flex items-center font-poppins !text-base"
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
                    <p
                        className={base({
                            className: 'text-light-200 w-[364px] ',
                        })}
                    >
                        <label htmlFor="">Categoria</label>

                        <Select
                            className="!h-10 w-full  [&_.ant-select-arrow]:!text-light-200 [&_.ant-select-clear]:!text-light-200 [&_.ant-select-selector_.ant-select-selection-placeholder]:!text-light-200 [&_.ant-select-selector]:!text-light-200 [&_.ant-select-selector]:!bg-dark-800  !bg-dark-800  !text-light-100"
                            placeholder="Refeição"
                            allowClear
                            defaultValue={'Refeição'}
                            options={[
                                { value: 'refeicao', label: 'Refeição' },
                                { value: 'sobremesa', label: 'Sobremesa' },
                            ]}
                        />
                    </p>
                </div>
                <div>
                    <TagInput />
                </div>
            </Form>
        </div>
    )
}
