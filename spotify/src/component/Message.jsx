import React,{ useState } from 'react'

export default function Message(props) {
    const [message, setMessage] = useState(props.buscando)

    function Testado(e) {
        console.log(e)
    }

    return(
        <div>
            <input type="text" placeholder='Digite' value={message} onChange={e => setMessage(e.target.value)} />
            <h4>{message}</h4>

            

        </div>
    )
}