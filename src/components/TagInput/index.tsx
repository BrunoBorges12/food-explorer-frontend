'use client'
import React, { useEffect, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa6'

const TagInput = () => {
    const [tags, setTags] = useState<string[]>([])
    const [value, setValue] = useState('')
    const [widthInput, setWidthInput] = useState(10)
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const eventValue = e.target.value as string
        if (eventValue.length === 0) {
            setWidthInput(10)
        } else {
            setTags((currentTags) => [...currentTags, eventValue])
            setWidthInput(
                eventValue.length % 2 === 0 ? widthInput + 7 : widthInput + 8,
            )
        }
    }

    return (
        <div className="flex  flex-col ">
            <label htmlFor="">Ingredientes</label>
            <div className="select-none inline-block max-w-full  align-middle  bg-dark-800 border rounded-md relative">
                <div className=" py-2 inline-block">
                    <ul className="  flex">
                        {tags?.map((tag, index) => {
                            return (
                                <li
                                    key={index}
                                    className=" mx-3 overflow-hidden   text-ellipsis  align-top text-nowrap  px-2  py-[2px] relative bg-dark-1000  text-light-400 flex  items-center rounded-md"
                                >
                                    <span>{tag}</span>
                                    <button className="py-[6px] flex justify-end w-full pl-3">
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
                            type="text"
                            onChange={handleInput}
                            className="w-6 outline-none bg-dark-800 text-light-400
                            
                            border-none  h-5 inline-block min-w-4  "
                        />
                    </div>
                </div>
                <span className=" inline-block border-2 border-dashed border-gray-400 rounded px-2 py-1 text-gray-400 hover:text-gray-600 hover:border-gray-600 ">
                    <div className="flex items-center gap-x-2">
                        <span>Adicionar</span>
                        <span>
                            <FaPlus className="text-xs" />
                        </span>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default TagInput
