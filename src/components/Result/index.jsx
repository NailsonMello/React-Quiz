import React from 'react'

import { formatTime } from '../../utils'
import Button from '../Button'

const ResultPage = ({ data, onReset, onAnswersCheck, time, correctAnswers }) => {

    return (
        <>
            <h3 style={{ fontSize: '1.4em', marginBottom: 10 }}>
                {Math.floor((correctAnswers / data.length) * 100) > 70 ? 'Parabéns👏👏👏' : 'Você não passou... 😌'}</h3>
            <p>Você acertou:<strong> {correctAnswers} de {data.length}</strong></p>
            <p> Total: <strong> {Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
            <p> Tempo: <strong> {formatTime(time)}</strong> </p>
            <Button
                style={{ marginBottom: 10 }}
                onClick={onAnswersCheck}
            >
                Ver resultado
            </Button>
            <Button
                onClick={onReset}
            >
                Tentar novamente
            </Button>
        </>
    )
}

export default ResultPage