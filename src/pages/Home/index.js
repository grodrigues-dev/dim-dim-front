import React, {useEffect, useState} from 'react'
import logo from '../../assets/icons/dinheiro.svg'
import api  from '../../services/api'

export default function Home(){

    const [contracts, setContracts] = useState([]);
    const [nome,setNome] = useState('')
    const [loadded, setLoadded] = useState(false)
    const user = localStorage.getItem('user'); 
     
    
    useEffect(()=>{
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
            {loadded && 
            <main>
                 <h4>Seja bem vindo {nome}</h4>
                <table>
                    <tbody>
                    <tr>
                        <th>Contrato</th>
                        <th>Produto</th>
                        <th>Data de vencimento</th>
                        <th>Valor para pagamento</th>
                        <th>Pagamento</th>
                    </tr>
                    { contracts.map(contract=>(
                        <tr key={contract.contrato}>
                            <td>{contract.contrato}</td>
                            <td>{contract.descricao_produto}</td>
                            <td>{contract.data_vencimento}</td>
                            <td>{contract.valor_parcela}</td>
                            <td><button>Negociar</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {/* <form action="">
                        <fieldset>
                            <label htmlFor="data">Data de Pagamento</label>
                            <input type="text"/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="data">Valor</label>
                            <input type="number"/>
                        </fieldset>
                </form> */}

            </main>
            }
        </>
    )
}
