import React, { useState } from 'react'
import { AuthFormContainer } from './style'
import Login from '../Login/Login'
import Register from '../Register/Register'

const AuthForm = ({ match }) => {
    let page = match.params.page || 'login';
    const [isActive, setIsActive] = useState(page)
    return (
        <AuthFormContainer>
            <div className="row m-0">
                <div className="col-12 col-md-7 col-lg-5 mx-auto">
                    <div className="tab_header">
                        <label className={`tab_header__heading ${isActive === 'login' && 'active'}`} onClick={() => setIsActive('login')}>Login</label>
                        <label className={`tab_header__heading ${isActive === 'register' && 'active'}`} onClick={() => setIsActive('register')}>Register</label>
                    </div>
                    {isActive === 'login' && <Login />}
                    {isActive === 'register' && <Register />}
                </div>
            </div>
        </AuthFormContainer>
    )
}

export default AuthForm
