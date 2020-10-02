import React, { Component,  createRef } from 'react';
import { SliderContainer } from './style';
import img from '../../../assets/img/04.png';
import img2 from '../../../assets/img/03.png';

import { lerp, number } from './utils';
const data = [
    'Slide 1',
    'Slide 2',
    'Slide 3',
    'Slide 4',
    'Slide 5',
    'Slide 6',
    'Slide 7'
];

class SingleSlider extends Component {
    constructor(options = {}) {
        super();
        this.bind(this)
        this.opts = {
          el: options.el || '.js-slider',
          ease: options.ease || 0.2,
          speed: options.speed || 3,
          velocity: 10,
          scroll: options.scroll || true
        }
        
        this.rAF = undefined
        this.state = {
            currentSlide: 0,
            slides: [...data]
        }
        
        this.sliderWidth = 0
        
        this.onX = 0
        this.offX = 0
        
        this.currentX = 0
        this.lastX = 0
        
        this.min = 0
        this.max = 0;
    
        this.centerX = window.innerWidth / 2;
        this.slides = null;
    }

    reference = []
    containerRef = createRef()
    sliderRef = createRef()

    componentDidMount() {
        this.slider = this.sliderRef.current;
        this.sliderInner = this.containerRef.current;
        this.slides = this.reference.map(ref => ref.current)
        console.log(this.slides)
        this.slidesNumb = this.slides.length;


        console.log(this.slidesNumb)
        this.init()
    }

    bind = (app) => {
        ['setPos', 'run', 'on', 'off', 'resize', 'getFirstIndex'].forEach((fn) => this[fn] = this[fn].bind(app)) 
    }

    getFirstIndex = () => {
        if(this.state.currentSlide > 0) return this.state.currentSlide - 1;
        return data.length - 1;
    }

    getLastIndex = () => {
        if(this.state.currentSlide === data.length - 1) return 0
        return this.state.currentSlide + 1;
    }
    
    setBounds = () => {
        const bounds = this.slides[0].getBoundingClientRect()
        const slideWidth = bounds.width
        const slideHeight = bounds.height
    
        this.sliderWidth = this.slidesNumb * slideWidth
        this.max = -(this.sliderWidth - window.innerWidth)
        
        this.slides.forEach((slide, index) => {
          slide.style.left = `${index * slideWidth}px`
        })

        this.slider.style.height = `${slideHeight}px`
        this.slider.style.width = `${slideWidth}px`

        this.sliderInner.style.height = `${slideHeight}px`
    }

    setPos = e => {
        if (!this.isDragging) return;
        this.currentX = this.offX + ((e.clientX - this.onX) * this.opts.speed)
        this.clamp()
    }

    clamp = () => {
        this.currentX = Math.max(Math.min(this.currentX, this.min), this.max)
    }

    toNearestAppropiateHundred = (x) => {
        const y = this.slides[0].getBoundingClientRect().width;
        const isNegative = x < 0;
        let z;
    
        if (isNegative) x = -(x);
        if(x > y) {
            z = y * Math.round(x/y);
        }else {
            z = x >= (y/2) ? y : 0;
        }
    
        return isNegative ? -(z) : z;
    }

    run = () => {
        this.lastX = lerp(this.lastX, this.currentX, this.opts.ease)
        this.lastX = Math.floor(this.lastX * 100) / 100;
        // console.log('shitting', this.lastX)
    
        const sd = this.currentX - this.lastX
        const acc = sd / window.innerWidth
        let velo =+ acc
        
        this.sliderInner.style.transform = `translate3d(${Math.ceil(this.lastX)}px, 0, 0) skewX(${Math.floor(velo * this.opts.velocity)}deg)`
    
        this.requestAnimationFrame()
    }

    on = e => {
        console.log('onnnnn')
        this.isDragging = true
        this.onX = e.clientX
        this.sliderInner.classList.add('is-grabbing')
    }
      
    off = e => {
        this.isDragging = false
        this.snap()
        this.offX = this.currentX
        this.sliderInner.classList.remove('is-grabbing')
    }
      
    closest = () => {
        const numbers = []
        this.slides.forEach((slide, index) => {
            const bounds = slide.getBoundingClientRect()
            const diff = this.currentX - this.lastX
            const center = (bounds.x + diff) + (bounds.width / 2)
            const fromCenter = this.centerX - center
            numbers.push(fromCenter)
        })
    
        let closest = number(0, numbers)
        closest = numbers[closest]
        return {
          closest
        }
    }
    
    snap = () => {
        const { closest } = this.closest();
        
        this.currentX = this.currentX + closest
        console.log('currents', this.currentX)
        this.clamp()
    }
    
    requestAnimationFrame = () => {
        this.rAF = requestAnimationFrame(this.run)
    }
    
    cancelAnimationFrame = () => {
        cancelAnimationFrame(this.rAF)
    }

    addEvents = () => {
        this.run()
        
        this.slider.addEventListener('mousemove', this.setPos, { passive: true })
        this.slider.addEventListener('mousedown', this.on, false)
        this.slider.addEventListener('mouseup', this.off, false)
        this.slider.addEventListener('mouseout', this.off)
        
        window.addEventListener('resize', this.resize, false)
    }

    removeEvents = () => {
        this.cancelAnimationFrame(this.rAF)
        
        this.slider.removeEventListener('mousemove', this.setPos, { passive: true })
        this.slider.removeEventListener('mousedown', this.on, false)
        this.slider.removeEventListener('mouseup', this.off, false)
    }
      
    resize = () => {
        this.setBounds()
    }
      
    destroy = () => {
        this.removeEvents()
        
        this.opts = {}
    }
      
    init = () => {
        this.setBounds()
        this.addEvents()
    }

    render() {
        return (
            <SliderContainer ref={this.sliderRef}>
                <div ref={this.containerRef} className={`wrapper`}>
                    {this.state.slides.map((item, i) => {
                        let r = createRef();
                        this.reference = [...this.reference, r]
                        return <div key={i} style={{background: `rgb(${Math.floor(Math.random() * 225)},${Math.floor(Math.random() * 225)},${Math.floor(Math.random() * 225)})`}} ref={r} className={`slide`}>{item}</div>
                    })}
                </div>
            </SliderContainer>
        )
    }
}

export default SingleSlider;
