import React from 'react'
import logo from '../../assets/icons/dinheiro.svg'

function Home(){
    return(
        <>
            <header>
                <img src={logo} alt="" className="icon"/>
                <ul>
                    <li>Perfil</li>
                    <li>Cadastro</li>
                    <li>Sair</li>
                </ul>
            </header>
        </>
    )
}

export default Home;