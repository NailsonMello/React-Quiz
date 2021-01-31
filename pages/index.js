import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import useSWR from 'swr'

import 'moment/locale/pt-br'

import api from '../src/utils/api'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

import QuizStart from '../src/components/QuizContainer'
import Question from '../src/components/Question'
import ResultPage from '../src/components/Result'
import ShowResult from '../src/components/ShowResult'
import Login from '../src/components/Login'
import UserPage from '../src/components/User'
import Ticket from '../src/components/Ticket'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`
let interval = 0;
const Home = () => {
  const { data, error } = useSWR(`/api/question`, api)

  const [user, setUser] = React.useState('')

  const [step, setStep] = useState(1)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showModalResult, setShowModalResult] = useState(false)
  const [time, setTime] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [percentageCorrect, setPercentageCorrect] = useState(0)
  const [questions, setQuestions] = useState([])
 
  useEffect(() => {
    if (data) {
      setQuestions(data.data)
    }
  }, [data])

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval)
    }
  }, [step])

  useEffect(() => {
    let correct = 0
    answers.forEach((result, index) => {

      if (result.a === questions[index].answer) {
        correct++
      }
    })
    setCorrectAnswers(correct)
    setPercentageCorrect(Math.floor((correct / questions.length) * 100))
  }, [answers])
  useEffect(() => {
    async function data() {
      const userData = await localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
    data();
  }, []);

  const quizStartHandler = () => {
    setStep(2)
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000)
  }

  const resetClickHandler = () => {
    setShowModalResult(false)
    setActiveQuestion(0)
    setAnswers([])
    setStep(2)
    setTime(0)
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000)
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>
          {db.title}
        </title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          {user ? (
            <Widget.Content>
              {step === 1 && <QuizStart onQuizStart={quizStartHandler} />}
              {step === 2 && <Question
                data={questions[activeQuestion]}
                onAnswerUpdate={setAnswers}
                numberOfQuestions={questions.length}
                activeQuestion={activeQuestion}
                onSetActiveQuestion={setActiveQuestion}
                onSetStep={setStep}
              />}
              {step === 3 && <ResultPage
                data={questions}
                onReset={resetClickHandler}
                onAnswersCheck={() => setShowModalResult(true)}
                time={time}
                correctAnswers={correctAnswers}
              />}

              {showModalResult && <ShowResult
                onClose={() => setShowModalResult(false)}
                results={answers}
                data={questions}
                showModalResult={showModalResult}
              />}
            </Widget.Content>
          ) : (
              <Widget.Content>
                <Login
                  onSetUser={setUser}
                />
              </Widget.Content>
            )}
        </Widget>

        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/nailsonmello" />
      {user && <UserPage name={user.name} avatar_url={user.avatar_url} />}
      { step === 3 && Math.floor((correctAnswers / questions.length) * 100) > 70 && (
        <>
          <a
            style={{
              position: 'absolute',
              top: '20px',
              right: '600px',
              color: '#fff',
              fontSize: '1.4em',
              background: 'rgba(0,0,0,0.5)',
              padding: '10px',
              borderRadius: '8px',
            }}
            href={`/api/image-generator?name=${user.name}&login=${user.login}&percentageCorrect=${percentageCorrect}&dateParams=${new Date().toISOString()}`}
            download={`${user.login}.png`}
          >
            Baixar Ticket
          </a>
          <LinkedinShareButton
            style={{
              position: 'absolute',
              top: '20px',
              right: '500px',
              borderRadius: '8px',
              background: 'transparent'
            }}
            url={`https://react-quiz.nailsonmello.vercel.app/api/image-generator?name=${user.name}&login=${user.login}&percentageCorrect=${percentageCorrect}&dateParams=${new Date().toISOString()}`}
            quote={'LinkedIn'}
          >
            <LinkedinIcon size={42} round={true} />
          </LinkedinShareButton>
          <Ticket name={user.name} login={user.login} percentageCorrect={percentageCorrect} />
        </>
      )}
    </QuizBackground>
  )
}

export default Home