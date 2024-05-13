'use client'
import React, { useState } from 'react'
import { AutoComplete, Input } from 'antd'
import type { SelectProps } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const getRandomInt = (max: number, min = 0) =>
    Math.floor(Math.random() * (max - min + 1)) + min

const searchResult = (query: string) =>
    new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((_, idx) => {
            const category = `${query}${idx}`
            return {
                value: category,
                label: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>
                            Found {query} on{' '}
                            <a
                                href={`https://s.taobao.com/search?q=${query}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {category}
                            </a>
                        </span>
                        <span>{getRandomInt(200, 100)} results</span>
                    </div>
                ),
            }
        })

const InputSearch: React.FC = () => {
    const [options, setOptions] = useState<SelectProps<object>['options']>([])

    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : [])
    }

    const onSelect = (value: string) => {
        console.log('onSelect', value)
    }

    return (
        <AutoComplete
            className="w-full "
            style={{ width: 600 }}
            popupMatchSelectWidth={500}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
        >
            <Input
                prefix={<SearchOutlined />}
                className="!bg-dark-900 !h-full  !rounded-sm !text-light-100 placeholder:!text-light-100/80 before:pr-12 !flex items-center"
                classNames={{
                    input: '  placeholder:!text-light-100/80  ',
                }}
                size="large"
                placeholder="Busque por pratos ou ingredientes"
            />
        </AutoComplete>
    )
}

export default InputSearch
