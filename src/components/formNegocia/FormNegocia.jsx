import React from 'react'
import './index.css'

function FormNegocia() {
    
    const dates = []
    let n = 3;
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
    
    return (
        <form action="">
            <h2>Selecione a forma de pagamento:</h2>
            <fieldset>
                <label htmlFor="data">Data de Pagamento</label>
                <input type="text" />
            </fieldset>
            <fieldset>
                <label htmlFor="data">Valor</label>
                <input type="number" />
            </fieldset>
            <fieldset>
                <label htmlFor="tipo">Tipo</label>
                <input type="number" />
            </fieldset>
            <fieldset>
                <label htmlFor="tipo">Parcelas</label>
                <input type="number" />
            </fieldset>
            <fieldset>
                <button type="button">Emitir Acordo
                </button>
            </fieldset>
        </form>
    )
}

export default FormNegocia;