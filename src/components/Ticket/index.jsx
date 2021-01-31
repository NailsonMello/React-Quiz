import React, { useEffect } from 'react'
import styled from 'styled-components';
import moment from 'moment'
import 'moment/locale/pt-br'

import QuizLogo from './svg';

const size = 1
const background = '#000'
const color1 = '#d25778'
const color2 = '#ec585c'
const color3 = '#e7d155'
const color4 = '#56a8c6'

const TicketVisual = styled.div`
  width: 650px;
  height: 320px;
  margin: 100px auto;
  position: absolute;
  z-index: 5;
  top: 30px;
  right: 80px;
  transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;
  background: linear-gradient(
    to right,
    ${color1},
    ${color2},
    ${color3},
    ${color4}
  );
  border-radius: 20px;
  padding: 5px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 120px;
    margin: 0px;
    position: relative;
    right: 2px;
    top: 10px;
  }
`
const TicketWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${background};
  border-radius: 15px;
`
const TicketProfile = styled.div`
padding: calc(39px * ${size}) calc(155px * ${size})
    calc(39px * ${size}) calc(58px * ${size});
    @media screen and (max-width: 500px) {
      padding: calc(14px * ${size}) calc(25px * ${size})
    calc(14px * ${size}) calc(18px * ${size});
    }
`
const TicketProfileDisplay = styled.div`
   display: flex;
   flex-direction: row;
`
const TicketImage = styled.img`
  width: calc(82px * ${size});
  height: calc(82px * ${size});
  border-radius: 50%;
  @media screen and (max-width: 500px) {
    width: calc(40px * ${size});
    height: calc(40px * ${size});
  }
`
const TicketProfileText = styled.div`
   margin: 0;
`
const TicketProfileName = styled.p`
  font-size: calc(32px * ${size});
  margin: 10px 0 5px 20px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: calc(16px * ${size});
    margin: 0 0 0 8px;
  }
`

const TicketProfileUserName = styled.p`
  margin: 0 0 5px 20px;
  color: #8a8f98;
  display: flex;
  @media screen and (max-width: 500px) {
    margin: 0 0 0 8px;
    font-size: calc(12px * ${size});
  }
`
const TicketProfileGithHubIcon = styled.span`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  @media screen and (max-width: 500px) {
    width: 12px;
    height: 12px;
  }
`
const TicketProfileGithHubIconImg = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  @media screen and (max-width: 500px) {
    width: 12px;
    height: 12px;
  }
`
const TicketEvent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  margin-left: -10px;
  @media screen and (max-width: 500px) {
    margin-top: 2px;
    margin-left: 0px;
    width: 99%;
    svg{
      width: 50px;
      height: 23px;
    }
  }
`
const TicketEventCreator = styled.p`
  font-size: 1em;
  font-weight: 200;
  color: #c1c1c1;
  @media screen and (max-width: 500px) {
    font-size: 0.6em;
  }
`
const TicketVisualQuiz = styled.div`
  position: absolute;
  right: 35px;
  bottom: 0;
  @media screen and (max-width: 500px) {
    right: 0px;
  }
`
const TicketVisualQuizNumber = styled.div`
  transform: rotate(90deg) translateY(calc(100px * ${size}));
  transform-origin: bottom right;
  font-size: calc(20px * ${size});
  font-weight: 700;
  text-align: center;
  padding-bottom: 35px;
  width: calc(320px - 10px);
  border-bottom: 2px dashed #333;
  @media screen and (max-width: 500px) {
    transform: rotate(90deg) translateY(calc(35px * ${size}));
    font-size: calc(12px * ${size});
    padding-bottom: 5px;
    width: calc(120px - 10px);
  }
`

const TicketVisualInfoUser = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    .date-quiz-result{
      font-size: 0.7em;
      margin-bottom: -5px;
    }
    margin-right: 13px;
  }
  
`
const TicketEventResult = styled.p`
  font-size: 1.2em;
  font-weight: 500;
  color: #fff;
  margin-bottom: -10px;
  @media screen and (max-width: 500px) {
    font-size: 0.7em;
    margin-bottom: -5px;
  }
`

const Ticket = ({ name, login, percentageCorrect }) => {
  useEffect(() => {
    if (name && login) {
      let ticketElm = document.getElementById("ticket");
      if (ticketElm) {
        const { x, y, width, height } = ticketElm.getBoundingClientRect();
        const centerPoint = { x: x + width / 2, y: y + height / 2 };

        window.addEventListener("mousemove", (e) => {
          const degreeX = (e.clientY - centerPoint.y) * 0.008;
          const degreeY = (e.clientX - centerPoint.x) * -0.008;

          ticketElm.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
        });
      }
    }
  }, [name, login])
  return (
    <TicketVisual id="ticket">
      <TicketWrapper >
        <TicketProfile>
          <TicketProfileDisplay>
            <TicketImage
              src={`https://github.com/${login}.png`}
              alt={name}
            />
            <TicketProfileText>
              <TicketProfileName>{name}</TicketProfileName>
              <TicketProfileUserName>
                <TicketProfileGithHubIcon>
                  <TicketProfileGithHubIconImg src="https://github.com/fluidicon.png" alt="" />
                </TicketProfileGithHubIcon>
                {login}
              </TicketProfileUserName>
            </TicketProfileText>
          </TicketProfileDisplay>
          <TicketEvent>
            <div>
              <QuizLogo />
              <TicketEventCreator>
                Create by Nailson Melo
              </TicketEventCreator>
            </div>
            <TicketVisualInfoUser>
              <TicketEventResult>
                Acertou <strong> {percentageCorrect}% </strong> das questões
              </TicketEventResult>
              <p className="date-quiz-result">
                Realizado: {moment(new Date()).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}
              </p>
              <TicketEventCreator>
                https://react-quiz.nailsonmello.vercel.app
              </TicketEventCreator>
            </TicketVisualInfoUser>
          </TicketEvent>
        </TicketProfile>
        <TicketVisualQuiz>
          <TicketVisualQuizNumber>
            Quiz - ReactJS
                    </TicketVisualQuizNumber>
        </TicketVisualQuiz>
      </TicketWrapper>
    </TicketVisual>
  )
}
export default Ticket