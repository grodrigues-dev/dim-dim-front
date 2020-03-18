import React from 'react'
import './index.css'

function TableContracts({contracts, nome}){
     return(
    <table>
        <h4>Seja bem vindo </h4>
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
                    <td><button>Negociar</button></td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}

export default TableContracts;