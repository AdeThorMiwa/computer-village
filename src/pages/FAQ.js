import React from 'react'
import { FAQContainer } from '../style'
import FAQTable from '../components/FAQTable/FAQTable'

const FAQ = () => {
    return (
        <FAQContainer>
            <h2 className="__faq-header">Frequently Asked Question</h2>
            <FAQTable />
        </FAQContainer>
    )
}

export default FAQ
