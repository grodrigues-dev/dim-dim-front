import React from 'react'

function FormNegocia() {
    return (
        <form action="">
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
        </form>
    )
}

export default FormNegocia;