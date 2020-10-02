import React from 'react'
import { Modal } from '../Helpers/Helpers'
import { NewsLetterModalContainer, CloseButton } from './style'
import NewsLetter from './NewsLetter'
import { CheckBox } from '../Forms/FormElements/Elements'

const NewsLetterModal = ({ show, setShow }) => {
    const setDontShowNewsLetter = () => {
        if(!localStorage.getItem("__markt-dont-show-news-letter")) localStorage.setItem("__markt-dont-show-news-letter", "09u433d3s832d324e34r5645I098d81d")
    }

    return (
        <Modal show={show} setShow={setShow}>
            <NewsLetterModalContainer>
                <CloseButton onClick={() => setShow(!show)}>Close</CloseButton>
                <div className="__content">
                    <h2>NEWSLETTER</h2>
                    <p>Enter your email address to subscribe our notification of our new post & features by email.</p>
                    <NewsLetter onSubmit={setShow} />
                    <div>
                        <CheckBox onClick={() => setDontShowNewsLetter()} label="Don't show this popup again" />
                    </div>
                </div>
            </NewsLetterModalContainer>
        </Modal>
    )
}

export default NewsLetterModal
