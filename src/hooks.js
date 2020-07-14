import {useState, useEffect} from 'react'
import {divideScale, sinify} from './utils'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
}

export const useStyle = (w, h, scale) => {
    const position = 'absolute'
    const size = Math.min(w, h) / 5
    const fixedY = h / 2 - size / 2
    const fixedX = w / 2 - size
    const sf = sinify(scale)
    const sf1 = divideScale(sf, 0, 2)
    const sf2 = divideScale(sf, 1, 2)
    return {
        getBlockStyle(i) {
            const si = 1 - 2 * i
            const left = `${fixedX * (1 - si) + size * i}px`
            const top = `${fixedY * (1  - si)}px`
            const width = `${size}px`
            const height = `${size}px`
            const background = '#3F51B5'
            return {position, top, left, width, height}
        }
    }
}
