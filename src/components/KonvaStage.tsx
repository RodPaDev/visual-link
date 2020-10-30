import React from 'react';
import { Stage, Layer } from 'react-konva';

import NodeShape from './NodeShape';

function KonvaStage() {


    return (
        <Stage width={500} height={500}>
            <Layer>
                <NodeShape />
            </Layer>
        </Stage>
    )
}

export default KonvaStage;