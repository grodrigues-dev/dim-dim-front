import React, {useEffect, useState} from 'react'

import Proposta from '../../components/contractsTable/Proposta'

import logo from '../../assets/icons/dinheiro.svg'
import api  from '../../services/api'


export default function Home({history}){

    const [contracts, setContracts] = useState([]);
    const [nome,setNome] = useState('')
    const [loadded, setLoadded] = useState(false)
    const user = localStorage.getItem('user'); 
     
    
    useEffect(()=>{
        if (!user) return history.push('/') 
         async function loadContracts(){
            const response = await api.post('/dividas', {
                cpf: user
            })
            setLoadded(true)
            setContracts(response.data.res)
            setNome(response.data.res[0].nome)
        }
        loadContracts();
        
    }, [])
    
    useEffect(()=>{
        console.log(contracts);
        
    },[contracts])

    function logout(){
        localStorage.removeItem('user')
        history.push('/')
    }

    return(
        <>
            <header>
                <img src={logo} alt="" className="icon"/>
                <ul>
                    <li>Perfil</li>
                    <li>Cadastro</li>
                    <li><a onClick={logout}>Sair</a></li>
                </ul>
            </header>
            {loadded && 
            <main className="home-main">
                <Proposta contracts={contracts} nome={nome}/>
            </main>
            }
        </>
    )
}
