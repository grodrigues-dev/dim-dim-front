import React, {useState} from 'react'
import api from '../../services/api'
import './index.css'

function Login({history}){

    const [cpf, setCpf] = useState('')

      async function handleSubmit (event) {
        event.preventDefault();
        const response = await api.post('/login', {cpf}); 
        if(response.data.success){
            localStorage.setItem('user', cpf)
            history.push('/home')
        }
    
    }

    return (
    <div className="login">
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
    </div>
    )
}

export default Login;
