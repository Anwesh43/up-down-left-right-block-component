import React from 'react'
import {useStyle} from './hooks'

const Block = ({style}) => {
    return <div style = {style}>
    </div>
}

const UpDownLeftRightBlock = ({w, h, scale, onClick}) => {
    const {getBlockStyle} = useStyle(w, h, scale)
    const blocks = [0, 1].map(i => <Block key = {`block_${i}`} style = {getBlockStyle(i)}/>)
    return <div onClick = {onClick}>
      {blocks}
    </div>
}

export default UpDownLeftRightBlock
