import React, {useState, useEffect} from 'react'; 

import Banner from '../../components/banner/banner'
import TypingText from '../../components/typingText/typingText'
import LoginComponent from '../../components/login/Login'

import logo from '../../assets/icons/dinheiro.svg'

export default function Login({history}){

    return (
        <>
            <header>
            <img src={logo} alt="" className="icon"/>
            <ul>
                <li>Financiamentos</li>
                <li>Quem somos</li>
                <li>Contrato</li>
            </ul>
            </header>
            <div className="container">
            <LoginComponent history={history}/>
            <Banner/>
            {/* <TypingText/> */}
        </div>
        </>
    )
}
