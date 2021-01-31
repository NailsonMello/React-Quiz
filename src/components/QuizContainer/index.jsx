import React from 'react'
import Button from '../Button'

const Quiz = ({ onQuizStart }) => {
    return (
        <>
            <h1 style={{textAlign: 'center', marginBottom: 5, fontSize: '1.4em'}}>Comece agora</h1>
            <p>Se você acertar mais de 70% das questões, ganhará um ticket personalizado para compartilhar no
                   <strong> LinkedIn</strong>.</p>
            <p>Boa sorte!!!</p>
            <Button onClick={onQuizStart}>Iniciar</Button>
        </>
    )
}
export default Quiz