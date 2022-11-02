import styled from "styled-components";

export const Container = styled.div`
    background: repeating-radial-gradient(#223 0%, #191970 100% 0.5px);
    display: grid;
    flex-direction: column;
    grid-column: 2;
    color: #ffffff;
`

export const First = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-areas: 
    "Header Header"
    "Leftside Rightside";
    grid-template-columns: 70% 30%;
    grid-template-rows: 10% 90%;
`

export const Header = styled.div`
    backdrop-filter: blur(15px);
    grid-area: Header;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.1);
    color: #ffffff;
    width: 100%;
    height: 10%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    padding-right: 35px;
    font-weight: bold ;
    border: 1px solid #727272;
    overflow: hidden;
`
export const Leftside = styled.div`
    top: 250px;
    padding: 10% 5%;
    justify-content: center;
    grid-area: Leftside;
    text-align: justify;
    grid-template-rows: repeat(6, 1fr);
`

export const Rightside = styled.div`
    overflow: hidden;
    display: grid;
    height: 80%;
    justify-content: center;
    align-content: end;
    grid-area: Rightside;
    opacity: 0.4;
    -webkit-filter: grayscale(100%);
	filter: grayscale(100%);
	filter: gray;
    padding: 30% 0 0 0;
    transition: all 1s linear 0.5s;
    bottom: 0;

&:hover {
    opacity: 0.9;
    -webkit-filter: none; 	
	filter: none;
    transition: all 1.5s linear 0.5s;
    }
`

export const Hiperlinks = styled.a`
    text-decoration: none;
    color: #fff;
    align-self: center;
    padding: 15px 60px;
    cursor: pointer;

    &:hover {
        text-shadow: 1px 1px 2px #ffffff;
    }
`

export const Title = styled.h1`
    font-size: 150px;
    padding: 0 25px;
    margin: 0;
    background-image: linear-gradient(to bottom, #727272, #fff, #000);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #727272;
`

export const Subtitle = styled.h2`
    font-size: 40px;
    padding: 0 25px;
    margin: 0;
    background-image: linear-gradient(to bottom, #727272, #fff, #000);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #727272;
`

export const Description = styled.p`
    font-size: 25px;
    padding: 20px 25px;
    margin: 0;
    font-weight: bold;
    background-image: linear-gradient(to bottom, #727272, #fff, #000);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #727272;
`

export const List = styled.li`
    list-style-type: none;
    font-size: 20px;
`

export const Ul = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    position: fixed;
`

export const Middle = styled.div`
    width: 100vw;
    height: 120vh;
    display: grid;
    padding-top: 10vh;
    grid-template-areas: 
    "Section1 Section2";
    grid-template-columns: 30% 70%;
    grid-template-rows: 100%;
`

export const Aside1 = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: Section1;
    padding: 10px;
    align-items: center;
    gap: 15px;
`

export const Skills = styled.div`
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 5em;
    border-radius: 15px ;
    align-items: center;
    justify-content: space-around;
    box-shadow: 2px 2px 4px #000000;
    color: #ffffff;
    opacity: 0.8;
    transition: all 0.5s linear 0.5s;
    

    &:hover {
        transition: all 0.5s linear 0.5ms;
        box-shadow: 2px 2px 4px #fff;
        opacity: 1;
    }
`

export const Skillscontent = styled.p`
    /*background-image: linear-gradient(to bottom, #fff, #727272);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;*/
    color: #fff;
    //font-weight: bold;
    font-size: 20px;
`

export const Aside2 = styled.div`
    grid-area: Section2;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-right: 30px;
`
export const Project = styled.div`
    overflow: auto;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    gap: 35px 9%;
    padding: 60px 0;
    justify-items: center;

    ::-webkit-scrollbar{
        background-color: #191970;
        height: 5px;
        border-radius: 300px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #fff;
        border-radius: 300px;
    }
`

export const ProjectTitle = styled.h4`
    font-weight: 2.5rem;
    height: 50px;
    font-size: 2.5rem;
`

export const ProjectLink = styled.a`
    font-size: 15px;
    text-decoration: none;
    color: #fff;
    padding: 2px 15px;
    background-color: rgba(25,25,112, 0.8);
    margin-bottom: 5px;
    border-radius: 30px;
`

export const Projectimg = styled.img`
    border-radius: 30px 30px 0 0;
    width: 100% ;
    height: 100%;
    cursor: pointer;
    display: block;
    align-items: flex-start;
    display: grid;
    position: relative;
    top: 0;
`
export const Boxproject = styled.div`
    border: 1px solid #727272;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    color: black;
    width: 45%;
    min-width: 45%;
    max-width: 80%;
    opacity: 0.8;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 4px #000;
    justify-content: space-between;
    transition: all 0.5s linear 0.5s;

    &:hover {
        transition: all 0.5s linear 0.5ms;
        box-shadow: 2px 2px 4px #fff;
        opacity: 1;
    }
`

export const Footer = styled.footer`
    height: 80vh;
    display: grid;
    grid-template-columns: 50% 50% ;
    align-items: center;
    padding-top: 10%;
`
export const Form = styled.footer`
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    width: 80%;
    background: rgba(255, 255, 255, 0.5);
    gap: 10px;
    padding: 15px;
    border-radius: 15px;
    border: 1px solid #727272;
    height: 250px;
`

export const Wrongimg = styled.img`
    padding-left: 25px;
`

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 80%;
    width: 70%;
`

export const SocialDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr;
    align-items: center;
    justify-content: center;
`

export const Social = styled.a`
    color: #fff;
    text-decoration: none;
    width: 70%;
    font-size: 25px;
    font-weight: bold;
    padding-left: 15px;
    background: rgba(255, 255, 255, 0.5);    
    border-radius: 15px;
    box-shadow: 2px 2px 4px #000;
    transition: all 0.3s linear;

    &:hover {
        transition: all 0.5s linear 0.5ms;
        box-shadow: 2px 2px 4px #fff;
        opacity: 1;}
        border: .1px solid #727272;
`

export const Gratz = styled.div`
    color: #f2f2f2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 25px;
`