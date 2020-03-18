import React, {useState, useEffect} from 'react'; 

import Banner from '../../components/banner/banner'
import TypingText from '../../components/typingText/typingText'

import logo from '../../assets/icons/dinheiro.svg'

import api from '../../services/api'


export default function Login({history}){

    const [text, setText] = useState('')
    const [cpf, setCpf] = useState('')

    useEffect(()=>{
        function typintText(){
         const text = "Quer negociar com a gente?, Temos uma proposta para você!"
         let newText = "";
         setInterval(() => {
             if (text == newText) {
                 newText = ""
             } else {
                 newText = `${newText}${text.charAt(newText.length)}`
                 setText(`${newText}`)
             }
         }, 300)
        }
        typintText()
    }, [])

      async function handleSubmit (event) {
        event.preventDefault();
        const response = await api.post('/login', {cpf}); 
        if(response.data.success){
            localStorage.setItem('user', cpf)
            history.push('/home')
        }
    
    }

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
                    <form >
                        <h1 className="txt-negocie">Ganhe Tempo</h1>
                        <p className="txt-negocie"> Evite filas, ganhe tempo, negocie online com a gente!</p>
                        <fieldset>
                            <label htmlFor="cpf">CPF</label>
                            <input 
                                type="text"
                                placeholder="000.000.000-00"
                                id="cpf"
                                value={cpf}
                                onChange={e => setCpf(e.target.value)}
                               />
                        </fieldset>
                        <fieldset>
                            <button type="button" onClick={handleSubmit}>Consultar</button>
                      </fieldset> 
                    </form>
                </div>
            </main>
            <Banner/>
            <TypingText/>
        </div>
        </>
    )
}
