import React from 'react'

import calc from '../../assets/icons/calc.svg'
import cofrinho from '../../assets/icons/cofrinho.svg'
import cartao from '../../assets/icons/forma-de-pagamento.svg'
import banco from '../../assets/icons/museu.svg'

import './index.css'

function Banner() {
    return (
        <div className="algumaCoisa">
            <div className="cards">
                <p className="branco">Formas de pagamento variadas</p>
                <img src={calc} alt="" />
            </div>
            <div className="cards">
                <p>Verifique nossas propostas de desconto</p>
                <img src={cofrinho} alt="" />
            </div>
            <div className="cards">
                <p className="branco">Parcelamos sua conta para você</p>
                <img src={cartao} alt="" />
            </div>
            <div className="cards">
                <p>Nome sujo nunca mais</p>
                <img src={banco} alt="" />
            </div>
        </div>
    )
}


export default Banner;