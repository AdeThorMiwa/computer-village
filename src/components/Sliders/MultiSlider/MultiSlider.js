import React, {useState, useRef, useEffect } from 'react'
import { SliderContainer } from './style';
import { number, lerp } from './utils'

let currentX = 0;
let lastX = 0;
let centerX = 0;
let max = 0;
let min = 0;

const MultiSlider = () => {
    let sliderWidth = 0;
    const data = [
        'Slide 1',
        'Slide 2',
        'Slide 3'
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const getFirstIndex = () => {
        if(currentSlide > 0) return currentSlide - 1;
        return data.length - 1;
    }

    const getLastIndex = () => {
        if(currentSlide === data.length - 1) return 0
        return currentSlide + 1;
    }

    const slides = [
        data[getFirstIndex()],
        data[currentSlide],
        data[getLastIndex()]
    ];

    const containerRef = useRef()
    const ref0 = useRef()
    const ref1 = useRef()
    const ref2 = useRef()

    const refs = [ref0, ref1, ref2];

    const on = e => {
        setIsDragging(true);
    }

    const off = e => {
        snap()
        setIsDragging(false);
    }

    const setBounds = () => {
        const bounds = refs[0].current.getBoundingClientRect()
        const slideWidth = bounds.width;
        const slideHeight = bounds.height;

        const slidesNumb = 3;

    
        sliderWidth = slidesNumb * slideWidth;
        max = -(sliderWidth - window.innerWidth)
        
        refs.forEach(({current}, index) => {
          current.style.left = `${(index -1) * slideWidth}px`
        })

        containerRef.current.style.width = slideWidth + 'px'
        containerRef.current.style.height = slideHeight + 'px';

        centerX = containerRef.current.getBoundingClientRect().width;
    }

    const handleDrag = e => {
        if(!isDragging) return;

        
        
    }

    const closest = () => {
        const numbers = []
        refs.forEach(({current}, index) => {
            const bounds = current.getBoundingClientRect()
            const diff = currentX - lastX
            const center = (bounds.x + diff) + (bounds.width / 2)
            const fromCenter = centerX - center;
            numbers.push(fromCenter)
        })
    
        let closest = number(0, numbers)
        closest = numbers[closest]
        
        console.log(closest)
        return {
          closest
        }
    }

    const snap = () => {
        const { closest } = closest()
        
        currentX = currentX + closest
        clamp()
    }

    const clamp = () => {
        currentX = Math.max(Math.min(currentX, min), max)
    }

    useEffect(() => {
        setBounds()
    }, [])

    return (
        <SliderContainer>
            <div ref={containerRef} className={`wrapper ${isDragging ? 'is-dragging': ''}`} onMouseDown={e => on(e)} onMouseUp={e => off(e)} onMouseOut={e => off(e)} onMouseMove={e => handleDrag(e)}>
                {slides.map((item, i) => <div key={i} ref={refs[i]} className={`slide`}>{item}</div>)}
            </div>
        </SliderContainer>
    )
}

export default MultiSlider
