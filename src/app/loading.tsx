import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

export default function Loading() {
    return (
        <div className="absolute flex   items-center w-full h-full justify-center">
            <Spin
                spinning={true}
                indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />}
                size="small"
            />
        </div>
    )
}
