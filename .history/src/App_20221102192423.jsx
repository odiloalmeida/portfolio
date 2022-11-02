import React from 'react';
import { v4 as uuid } from 'uuid';
import { AiOutlineHeart, AiOutlineCopyrightCircle } from "react-icons/ai";

import {
  Ul, List, Description, Container, First, ProjectLink, Wrongimg,
  Header, Leftside, Rightside, Hiperlinks, Form, Project,
  Title, Subtitle, Middle, Aside1, Aside2, Skills, Footer,
  Projectimg, Boxproject, Contact , Social , SocialDiv, Gratz, Skillscontent
} from "./style";


function App() {


  return (
    <Container className="App" id='uuid'>
      <First id='content1'>
        <Header id='uuid'>
          <Ul id='uuid'>
            <List id='uuid'><Hiperlinks id='uuid' href="#content1">Início</Hiperlinks></List>
            <List id='uuid'><Hiperlinks id='uuid' href="#content2">Portfólio</Hiperlinks></List>
            <List id='uuid'><Hiperlinks id='uuid' href="#footer">Contatos</Hiperlinks></List>
          </Ul>
        </Header>

        <Leftside id='uuid'>
          <Title id='uuid'>Odilo</Title>
          <Title id='uuid'>Almeida</Title>
          <Subtitle id='uuid'>Desenvolvedor Front-End React</Subtitle>
          <Description id='uuid'>Sou desenvolvedor focado no Front-End e na interação com o usuário</Description>
        </Leftside>

        <Rightside id='uuid'>
          <img id='uuid' src="./assets/me.png" height='700px' />
        </Rightside>
      </First >

      <Middle id='content2' >
        <Aside1 id='uuid' >
          <Subtitle id='uuid'>Skills</Subtitle>
          <Skills id='uuid'>
            <img id='uuid' src="./src/assets/react.png" width='35px' />
            <Skillscontent id='uuid'>React Js</Skillscontent>
          </Skills >

          <Skills id='uuid'>
            <img id='uuid' src="./src/assets/java-script.png" width='35px' />
            <Skillscontent id='uuid'>Java Script</Skillscontent>
          </Skills>

          <Skills id='uuid'>
            <Wrongimg id='uuid' src="./src/assets/styled-components.png" width='35px' />
            <Skillscontent id='uuid'>Styled Components</Skillscontent>
          </Skills>

          <Skills id='uuid'>
            <img id='uuid' src="./src/assets/css.png" width='35px' />
            <Skillscontent id='uuid'>CSS Flex</Skillscontent>
          </Skills>

          <Skills id='uuid'>
            <img id='uuid' src="./src/assets/css.png" width='35px' />
            <Skillscontent id='uuid'>CSS Grid</Skillscontent>
          </Skills>

          <Skills id='uuid'>
            <img id='uuid' src="./src/assets/html.png" width='35px' />
            <Skillscontent id='uuid'>HTML5</Skillscontent>
          </Skills>

          <Skills id='uuid'>
            <img id='uuid' src="./src/assets/github.png" width='35px' />
            <Skillscontent id='uuid'>Git Hub</Skillscontent>
          </Skills>

          <Skills id='uuid'>
            <img id='uuid' src="./src/assets/figma.png" width='35px' />
            <Skillscontent id='uuid'>Figma</Skillscontent>
          </Skills>

          <Skills id='uuid'>
            <img id='uuid' src="./src/assets/python.png" width='35px' />
            <Skillscontent id='uuid'>Python</Skillscontent>
          </Skills>

        </Aside1>

        <Aside2 id="projects">

          <Subtitle id='uuid'>Meus Projetos</Subtitle>

          <Project id='uuid'>
            <Boxproject id='uuid'>

              <a id='uuid' target="_blank" href='https://sapientiamnullam.weebly.com/uploads/6/4/1/2/64128749/1435528_orig.jpg'><Projectimg src="./src/assets/to-do-list.png"/></a>
              <Description id='uuid'>To-do List | React </Description>
              <ProjectLink id='uuid' href="https://sapientiamnullam.weebly.com/uploads/6/4/1/2/64128749/1435528_orig.jpg" target="_blank">Link Repositório</ProjectLink>

            </Boxproject>

            <Boxproject id='uuid'>
              <a id='uuid' target="_blank" href='https://sapientiamnullam.weebly.com/uploads/6/4/1/2/64128749/1435528_orig.jpg'><Projectimg src="./src/assets/coin-converter.png"/></a>
              <Description id='uuid'>Conversor Monetário | JavaScript</Description>
              <ProjectLink id='uuid' href="https://sapientiamnullam.weebly.com/uploads/6/4/1/2/64128749/1435528_orig.jpg" target="_blank">Link Repositório</ProjectLink>
            </Boxproject>

            <Boxproject id='uuid'>
              <a id='uuid' target="_blank" href='https://odiloalmeida.github.io/ps5-store/'><Projectimg src="./src/assets/ps5store.png"/></a>
              <Description id='uuid'>Ps5 Store | JavaScript</Description>
              <ProjectLink id='uuid' href="https://github.com/odiloalmeida/ps5-store" target="_blank">Link Repositório</ProjectLink>
            </Boxproject>

            <Boxproject id='uuid'>
              <a id='uuid' target="_blank" href='https://sapientiamnullam.weebly.com/uploads/6/4/1/2/64128749/1435528_orig.jpg'><Projectimg src="./src/assets/coin-converter.png"/></a>
              <Description id='uuid'>(Não sei | nem pq)</Description>
              <ProjectLink id='uuid' href="https://sapientiamnullam.weebly.com/uploads/6/4/1/2/64128749/1435528_orig.jpg" target="_blank">Link Repositório</ProjectLink>
            </Boxproject>

          </Project>

        </Aside2>

      </Middle>

      <Footer id='uuid'>
        <Contact id='uuid'>
          <Subtitle id='footer'>Minhas redes</Subtitle>

            <Social id='uuid' target='_blank' href='https://www.linkedin.com/in/odilo-almeida-7538a4236/'><SocialDiv>
              <img src="./src/assets/social/linkedin.png" width='45px' />
              <Skillscontent>Odilo Almeida</Skillscontent>
            </SocialDiv></Social>

            <Social id='uuid' target='_blank' href='https://github.com/odiloalmeida'><SocialDiv>
              <img src="./src/assets/social/github.png" width='45px' />
              <Skillscontent>Odilo Almeida</Skillscontent>   
            </SocialDiv></Social>

            <Social id='uuid' target='_blank' href="mailto:odilolima@hotmail.com"><SocialDiv>
              <img src="./src/assets/social/email.png" width='45px' />
              <Skillscontent>E-mail</Skillscontent>   
            </SocialDiv></Social>

            <Social id='uuid' target='_blank' href='https://www.instagram.com/odilolalmeida/'><SocialDiv>
              <img src="./src/assets/social/instagram.png" width='45px' />
              <Skillscontent>@odiloalmeida</Skillscontent>
            </SocialDiv></Social>

        </Contact>

        <Form id='uuid' action="https://formsubmit.co/odilolima@hotmail.com" method="POST">Entre em contato comigo:
          <input id='uuid' className='input' type="text" color="#fff" name="name" placeholder='Nome' required />
          <input id='uuid' type="email" name="email" placeholder='E-mail' required />
          <textarea id='uuid' cols="30" rows="10" name="message" placeholder='Digite sua mensagem' required></textarea>
          <button id='uuid' type="submit">Enviar</button>
          <button id='uuid' type="reset">Limpar</button>
          <input id='uuid' type="hidden" name="_next" value="https://cdn.leroymerlin.com.br/products/placa_decorativos_mdf_30x33_joia_like_joinha_1570446829_17eb_600x600.jpg" />
          <input id='uuid' type="hidden" name="_captcha" value="false" />
        </Form>
      </Footer>

      <Gratz>
        <p id='uuid'>Copyright all rights reserved to Odilo Almeida <AiOutlineCopyrightCircle/></p>
        <p>Made with <AiOutlineHeart color='red'/></p>
      </Gratz>
    </Container>
  )
}

export default App