'use client'
import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa6'
import { useFormContext } from 'react-hook-form'

const TagInput = () => {
    const { setValue } = useFormContext() // retrieve all hook methods

    const [tags, setTags] = useState<string[]>([])
    const [inputValue, setInputValue] = useState('')
    const [widthInput, setWidthInput] = useState(10)
    setValue('tags', tags)
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const eventValue = e.target.value as string
        const lengthDifference = eventValue.length - inputValue.length // verifica se está deletado  ou não

        setWidthInput((prevWidth) => prevWidth + lengthDifference * 8) // sempre vai aumenta 8 e diminuitr 8 caso seja deletado

        setInputValue(eventValue)
    }
    const clearTagsID = (e: React.MouseEvent<HTMLElement>) => {
        const filterTags: string[] = tags.filter(
            (_, i) => `${i}` != e.currentTarget.id,
        )
        setTags(filterTags)
    }
    const addTags = () => {
        if (inputValue.length >= 1) {
            setTags((currentTags) => [...currentTags, inputValue])
            setWidthInput(10)
        }
        setInputValue('')
    }
    return (
        <div className="flex  flex-col   relative gap-2 w-[805px] ">
            <label className="text-light-400" htmlFor="">
                Ingredientes{' '}
            </label>
            <div className="select-none inline-block max-w-full py-1  align-middle  bg-dark-800 border rounded-lg relative">
                <div className=" relative  max-w-full py-2 inline-block">
                    <ul className="  flex flex-wrap gap-1 ml-3">
                        {tags?.map((tag, index) => {
                            return (
                                <li
                                    key={index}
                                    className=" overflow-hidden   text-ellipsis  align-top text-nowrap  px-2   relative bg-cake-100  text-light-100 text-sm flex font-roboto   items-center rounded-md"
                                >
                                    <span>{tag}</span>
                                    <button
                                        onClick={clearTagsID}
                                        id={`${index}`}
                                        className="py-[6px] flex justify-end w-full pl-3"
                                    >
                                        <IoCloseOutline />
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="min-w-3  inline-block">
                    <div className="inline-block mt-1 pl-3 ">
                        <input
                            style={{
                                width: widthInput + 'px',
                            }}
                            value={inputValue}
                            type="text"
                            onChange={handleInput}
                            className="w-6 outline-none bg-dark-800 text-light-400
                            
                            border-none  h-5 inline-block min-w-4  mr-2 "
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                visibility: 'hidden',
                                height: '0px',
                                overflow: 'scroll',
                                whiteSpace: 'pre',
                                fontSize: '14px',
                                fontFamily:
                                    'Apple-System, Arial, Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", STXihei, sans-serif',
                                fontWeight: 400,
                                fontStyle: 'normal',
                                letterSpacing: 'normal',
                                textTransform: 'none',
                            }}
                        >
                            {inputValue}
                        </div>
                    </div>
                </div>
                <button
                    onClick={addTags}
                    className=" inline-block border-2 border-dashed border-gray-400 rounded-md px-2 py-1 text-gray-400 hover:text-gray-600 hover:border-gray-600 "
                >
                    <div className="flex items-center gap-x-2">
                        <span>Adicionar</span>
                        <span>
                            <FaPlus className="text-xs" />
                        </span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default TagInput
