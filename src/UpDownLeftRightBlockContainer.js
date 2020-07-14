import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import UpDownLeftRightBlock from './UpDownLeftRightBlock'

const UpDownLeftRightBlockContainer = ({props}) => {
    const {scale, start} = useAnimatedScale(0.02, 20)
    const {w, h} = useDimension()
    return (<UpDownLeftRightBlockContainer scale = {scale} onClick = {start} w = {w} h = {h}>
    </UpDownLeftRightBlockContainer>)
}

export default UpDownLeftRightBlockContainer
