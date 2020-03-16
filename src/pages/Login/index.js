import React, {useState, useEffect} from 'react'; 

import logo from '../../assets/icons/dinheiro.svg'
import calc from '../../assets/icons/calc.svg'
import cofrinho from '../../assets/icons/cofrinho.svg'
import cartao from '../../assets/icons/forma-de-pagamento.svg'
import banco from '../../assets/icons/museu.svg'


export default function Login(){

    const [text, setText] = useState('')

    useEffect(()=>{
        function typintText(){
         const text = "Quer negociar com a gente?, Temos uma proposta para você!"
         let newText = "";
         setInterval(() => {
             if (text == newText) {
                 newText = ""
             } else {
                 newText = `${newText}${text.charAt(newText.length)}`
                 setText(newText)
             }
         }, 100)
        }
        typintText()
    }, [])
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
            <main className="login">
                <div className="form">
                    <form action="">
                        <h1 className="txt-negocie">Ganhe Tempo</h1>
                        <p className="txt-negocie"> Evite filas, ganhe tempo, negocie online com a gente!</p>
                        <fieldset>
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" placeholder="000.000.000-00" id="cpf" />
                        </fieldset>
                        <fieldset>
                            <button>Consultar</button>
                      </fieldset> 
                    </form>
                </div>
            </main>
            <div className="algumaCoisa">
                <div className="cards">
                    <p className="branco">Formas de pagamento variadas</p>
                    <img src={calc} alt=""/>
                </div>
                <div className="cards">
                    <p>Verifique nossas propostas de desconto</p>
                    <img src={cofrinho} alt=""/>  
                </div>
                <div className="cards">
                    <p className="branco">Parcelamos sua conta para você</p>
                    <img src={cartao} alt=""/>
                </div>
                <div className="cards">
                    <p>Nome sujo nunca mais</p>
                    <img src={banco} alt=""/>
                </div>
            </div>
            <div className="typingText">
        <p id="text">{text}</p>
        </div>
        </div>
        </>
    )
}
