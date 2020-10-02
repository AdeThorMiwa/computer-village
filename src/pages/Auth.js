import React, { Fragment } from 'react'
import AuthForm from '../components/Forms/Auth/AuthForm'

const Auth = ({ ...props }) => {
    return (
        <Fragment>
            <AuthForm {...props } />
        </Fragment>
    )
}

export default Auth
