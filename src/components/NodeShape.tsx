import React, { useState } from 'react'
import { Rect, Text, Line, Group } from 'react-konva';

function NodeShape() {

    const [helpTextEnable, setHelpTextEnable] = useState(false)

    return (
        <Group draggable >
            <Rect
                width={200}
                height={100}
                fill="#119a7a"
                stroke="#118d70"
                strokeWidth={2}
                shadowColor="grey"
                shadowBlur={15}
                shadowOffset={{ x: 0, y: 0 }}
            />
            <Text
                text="4233"
                fontSize={16}
                width={140}
                height={100}
                align="center"
                verticalAlign="middle"
            />
            <Text
                x={145}
                text="37FF"
                fontSize={16}
                width={50}
                height={100}
                align="center"
                verticalAlign="middle"
            />
            <Text
                visible={helpTextEnable}
                x={145}
                y={110}
                text="Next"
                fontSize={20}
                width={50}
                align="center"
                verticalAlign="middle"
            />
            <Text
                visible={helpTextEnable}
                x={0}
                y={110}
                text="Data"
                fontSize={20}
                width={150}
                align="center"
                verticalAlign="middle"
            />
            <Line
                points={[140, 0, 140, 100, 140, 0, 0]}
                stroke="black"
                strokeWidth={2}
            />
        </Group>
    )
}

export default NodeShape;