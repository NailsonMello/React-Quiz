import React, { useEffect } from 'react'
import styled from 'styled-components';
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
`
const TicketProfileDisplay = styled.div`
   display: flex;
   flex-direction: row;
`
const TicketImage = styled.img`
  width: calc(82px * ${size});
  height: calc(82px * ${size});
  border-radius: 50%;
`
const TicketProfileText = styled.div`
   margin: 0;
`
const TicketProfileName = styled.p`
  font-size: calc(32px * ${size});
  margin: 10px 0 5px 20px;
  font-weight: 700;
`

const TicketProfileUserName = styled.p`
  margin: 0 0 5px 20px;
  color: #8a8f98;
  display: flex;
`
const TicketProfileGithHubIcon = styled.span`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`
const TicketProfileGithHubIconImg = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`
const TicketEvent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  margin-left: -10px;
`
const TicketEventCreator = styled.p`
  font-size: 1em;
  font-weight: 200;
  color: #c1c1c1;
`
const TicketVisualQuiz = styled.div`
  position: absolute;
  right: 35px;
  bottom: 0;
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
`

const TicketVisualInfoUser = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
`
const TicketEventResult = styled.p`
  font-size: 1.2em;
  font-weight: 500;
  color: #fff;
  margin-bottom: -10px;
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
              <p>
                Realizado: {new Date().toLocaleDateString()}
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