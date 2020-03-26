import React, {useState, useEffect} from 'react'
import './index.css'
import BusinessDay from '../businessDay/businessDay'

function Proposta({contracts, nome}){
    
    const [proposta, setProposta] = useState('')
    const [parcelas, setParcelas] = useState([1])
    const [qtdParcelas, setQtdParcelas] = useState(2);
    const [entrada, setEntrada] = useState(15)
    const [valorEntrada, setValorEntrada] = useState('')
    const [valorParcela, setValorParcela] = useState('')
    const [valorTotal, setValorTotal] = useState('')

    const dates = BusinessDay(3)
   

    function showProposta(proposta){
        setProposta(proposta)
        setValorTotal(proposta.valorTotal)
        
    }

    function setPagamento(tipo){
        if (tipo == 'AP') {
            setParcelas([2,3])
        } else {
            setParcelas([1])
        }
    }

    const calcValores = ()=>{
        let valor = ((proposta.valorTotal-valorEntrada)/qtdParcelas).toFixed(2); 
        setValorEntrada(((proposta.valorTotal/100)*entrada).toFixed(2));
        setValorParcela(valor);
        console.log('teste', valor);
        
    }
    
    return(
    <>
    <h4>Seja bem vindo {nome} </h4>
    <table>
        <tbody>
            <tr>
                <th>Contrato</th>
                <th>Produto</th>
                <th>Data de vencimento</th>
                <th>Valor para pagamento</th>
                <th>Pagamento</th>
            </tr>
            {contracts.map(contract => (
                <tr key={contract.contrato}>
                    <td>{contract.contrato}</td>
                    <td>{contract.descricao_produto}</td>
                    <td>{contract.data_vencimento}</td>
                    <td>{contract.valorTotal}</td>
                    <td><button onClick={()=>showProposta(contract)}>Negociar</button></td>
                </tr>
            ))}
        </tbody>
    </table>

    <form action="">
            <h2>Selecione a forma de pagamento:</h2>
            <fieldset>
                <label htmlFor="data">Data de Pagamento</label>
                <select name="" id="data">
                    {proposta && dates.map(date => (
                        <option value={date} key={date}>{date}</option>
                    ))}
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="data">Valor Total</label>
                <input type="number" readOnly={true} value={valorTotal}/>
            </fieldset>
            <fieldset>
                <label htmlFor="tipo">Tipo</label>
                <select name="" id="tipo" onChange={(e)=>setPagamento(e.target.value)}>
                    <option value="AV">Pagamento a vista</option>
                    <option value="AP">Pagamento parcelado</option>
                </select>
            </fieldset>
            { parcelas.length>1 && 
            <>
            <fieldset>
                <label htmlFor="tipo">Quantidade de Parcelas</label>
                <select name="" id="" onChange={(e)=> setQtdParcelas(e.target.value)}>
                    {proposta && parcelas.map(parcela => (
                        <option value={parcela} key={parcela}>{parcela}</option>
                    ))}
                </select>
            </fieldset>
                <fieldset>
                    <label htmlFor="entrada">Percentual entrada</label>
                    <select name="" id="" onChange={(e)=> setEntrada(e.target.value)}>
                        <option value="15">15%</option>
                        <option value="30">30%</option>
                    </select>
                </fieldset>
                <fieldset>
                    <button type="button" onClick={calcValores}>Calcular</button>
                </fieldset>
                <fieldset>
                    <label htmlFor="valor_entrada">Valor da entrada</label>
                    <input type="text" name="" id="" readOnly={true} value={valorEntrada}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="valor_entrada">Valor das Parcelas</label>
                    <input type="text" name="" id="" readOnly={true} value={valorParcela}/>
                </fieldset>
            </>
            }
            
            <fieldset>
                <button type="button">Emitir Acordo</button>
            </fieldset>
        </form>
    </>
    )
}

export default Proposta;