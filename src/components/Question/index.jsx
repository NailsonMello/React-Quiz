import React, { useState, useEffect, useRef } from 'react'
import Button from '../Button'
import Widget from '../Widget'

const QuestionPage = ({
    data,
    onAnswerUpdate,
    numberOfQuestions,
    activeQuestion,
    onSetActiveQuestion,
    onSetStep
}) => {
    const [selected, setSelected] = useState('')
    const [error, setError] = useState('')
    const radiosWrapper = useRef()

    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked')
        if (findCheckedInput) {
            findCheckedInput.checked = false
        }
    }, [data])

    const changeHandler = (e) => {
        setSelected(e.target.value)
        if (error) {
            setError('')
        }
    }

    const nextClickHandler = (e) => {
        if (selected === '') {
            return setError('Por favor selecione uma opção!')
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }])
        setSelected('')
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1)
        } else {
            onSetStep(3)
        }
    }

    return (
        <>
            <img
                alt={data.question}
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    marginBottom: 10
                }}
                src={data.image}
            />
            <h2 style={{marginBottom: 10}}>{data.question}</h2>
            <div ref={radiosWrapper}>
                {data.choices.map((choice, i) => (
                    <Widget.Topic as="label"
                        key={i}>
                        <input type="radio" name="answer" value={choice} onChange={changeHandler} style={{marginRight: 5}} />
                        {choice}
                    </Widget.Topic>
                ))}
            </div>
            {error && <div>
                {error}
            </div>}
            <Button
                onClick={nextClickHandler}>
                Avançar
            </Button>
        </>
    )
}

export default QuestionPage