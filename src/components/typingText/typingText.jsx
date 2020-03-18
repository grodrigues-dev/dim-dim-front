import React, {useState, useEffect} from 'react'
import './index.css'

function TypingText(){

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
                 setText(`${newText}`)
             }
         }, 300)
        }
        typintText()
    }, [])

    return(
        <div className="typingText">
            <p id="text">{text}</p>
        </div>
    )

}

export default TypingText