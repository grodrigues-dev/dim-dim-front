import React, {useState, useEffect} from 'react'
import './index.css'
import moment from 'moment'

function Proposta({contracts, nome}){
    
    const [proposta, setProposta] = useState('')
    const [parcelas, setParcelas] = useState([1])
    const [entrada, setEntrada] = useState(15)
    const [valorEntrada, setValorEntrada] = useState('')

    const dates = []
    let n = 0;
    let day = moment().add(n, 'days').format('dddd')

    while(dates.length<3){
      if(day!='Saturday' && day!="Sunday"){
        dates.push(moment().add(n, 'days').format('DD/MM/YYYY'))
        n++
        day = moment().add(n, 'days').format('dddd')
      } 
      else {
        n++;
        day = moment().add(n, 'days').format('dddd')
      }
    }

    function showProposta(proposta){
        setProposta(proposta)
        console.log(proposta);
        
    }

    function setPagamento(tipo){
        if (tipo == 'AP') {
            setParcelas([2,3])
        } else {
            setParcelas([1])
        }
    }
    
    useEffect(()=>{
        setValorEntrada((proposta.valor_parcela * (entrada/100)).toFixed(2))
    }, [parcelas])


    return(
    <>
    <table>
        <h4>Seja bem vindo {nome} </h4>
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
                    <td>{contract.valor_parcela}</td>
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
                        <option value={date}>{date}</option>
                    ))}
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="tipo">Tipo</label>
                <select name="" id="tipo" onChange={(e)=>setPagamento(e.target.value)}>
                    <option value="AV">Pagamento a vista</option>
                    <option value="AP">Pagamento parcelado</option>
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="tipo">Quantidade de Parcelas</label>
                <select name="" id="">
                    {proposta && parcelas.map(parcela => (
                        <option value={parcela}>{parcela}</option>
                    ))}
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="data">Valor</label>
                <input type="number" value={proposta.valor_parcela}/>
            </fieldset>
            { parcelas.length>1 && 
            <>
                <fieldset>
                    <label htmlFor="entrada">Percentual entrada</label>
                    <select name="" id="" onChange={(e)=> setEntrada(e.target.value)}>
                        <option value="15">15%</option>
                        <option value="30">30%</option>
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="valor_entrada">Valor da entrada</label>
                    <input type="text" name="" id="" value={valorEntrada}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="valor_entrada">Valor das Parcelas</label>
                    <input type="text" name="" id=""value={
                        (proposta.valor_parcela - (proposta.valor_parcela * (entrada/100)))/(parcelas.length+1)
                    }/>
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