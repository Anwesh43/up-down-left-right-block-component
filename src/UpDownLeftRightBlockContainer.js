import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import UpDownLeftRightBlock from './UpDownLeftRightBlock'

const UpDownLeftRightBlockContainer = ({props}) => {
    const {scale, start} = useAnimatedScale(0.005, 20)
    const {w, h} = useDimension()
    return (<UpDownLeftRightBlock scale = {scale} onClick = {start} w = {w} h = {h}>
    </UpDownLeftRightBlock>)
}

export default UpDownLeftRightBlockContainer
