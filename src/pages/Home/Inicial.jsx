import React from "react";
import styled, {keyframes} from "styled-components";
import Button01 from "../../components/Buttons/button01";
import Button02 from "../../components/Buttons/button02";

const zoomAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const BackgroundHome = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    background: #000;

    @media (max-width: 768px){
        display: none;
    }

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734820227/backgroundHome_jwfxii.jpg');
        background-position: center;
        background-size: cover;
        top: 0;
        left: 0;
        opacity: .3;
        border-image: fill 0 linear-gradient(#0000, #000);
    }
`

const InicialContainer = styled.section`
    width: 100%;
    height: 100vh;
    max-width: 1280px;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        height: 100dvh;
        padding: 10% 5%;
        background: #000;
    }

    &::before{
        @media (max-width: 768px) {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734820227/backgroundHome_jwfxii.jpg');
            background-position: center;
            background-size: cover;
            top: 0;
            left: 0;
            opacity: .3;
            border-image: fill 0 linear-gradient(#0000, #000);
        }
    }
`

const InicialTexts = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
    }

    & > h1 {
        font-family: var(--font--poppins);
        font-size: 40px;
        line-height: 100%;
        font-weight: 200;
        color: var(--color--white);

        @media (max-width: 768px) {
            text-align: center;
            font-size: 28px;
            line-height: 110%;
        }

        & > b{
            font-weight: 400;
            background: linear-gradient(120deg, var(--color--purple), var(--color--white), var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
        }
    }

    & > div{
        width: 100%;
        display: flex;
        gap: 10px;

        & > button:nth-child(2){
            @media (max-width: 768px) {
                display: none;
            }
        }

        @media (max-width: 768px) {
            flex-direction: column;
            width: 100%;
            align-items: center;
        }
    }

    & > p{
        font-weight: 300;
        color: var(--color--white);
        font-size: 16px;
        line-height: 120%;
        font-family: var(--font--poppins);
        opacity: .6;
        width: 95%;

        @media (max-width: 768px) {
            width: 100%;
            text-align: center;
            opacity: 0.8;
            font-size: 14px;
            font-weight: 200;
            line-height: 120%;
        }
    }

    & > span {
        width: 90%;
        font-size: 14px;
        font-family: var(--font--roboto);
        font-weight: 300;
        line-height: 120%;
        opacity: .3;
        color: var(--color--white);
        margin-top: -15px;
        

        @media (max-width: 768px) {
            text-align: center;
            width: 100%;
            font-size: 12px;
            font-weight: 100;
            opacity: .6;
        }
    }
`

const InicialImage = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    
    @media (max-width: 768px) {
        width: 80%;
    }

    & > img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const InicialDiv = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    height: 50px;

    @media (max-width: 768px) {
        border: 1px solid red;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        width: 250px!important;
        display: none!important;
    }

    & > article {
        position: relative;
        left: 125px;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 100%;

        @media (max-width: 768px) {
            left: 0px;
            border: 1px solid red;
        }

        & > span {
            font-weight: 400;
            background: linear-gradient(120deg, var(--color--purple), var(--color--blue));
            -webkit-background-clip: text;
            color: transparent;
            font-family: var(--font--poppins);
            font-size: 22px;
        }

        & > img {
            width: 18px;
        }
    }

    & > div{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;

        @media (max-width:768px) {
            border: 1px solid red;
        }

        &:nth-child(1){
            top: 0;
            left: 0;
            z-index: 1;
            background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734834438/perfil1_hvoboh.jpg');
            background-position: center;
            background-size: cover;
            opacity: 0.6;
            transition: all .2s ease;

            &:hover{
                z-index: 4;
                opacity: 1;
                transform: translateY(-5px) scale(1.05);
            }
        }

        &:nth-child(2){
            top: 0;
            left: 20px;
            z-index: 2;
            background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734834439/perfil3_qg8mhu.jpg');
            background-position: center;
            background-size: cover;
            opacity: .7;
            transition: all .2s ease;

            &:hover{
                z-index: 4;
                opacity: 1;
                transform: translateY(-5px) scale(1.05);
            }
        }

        &:nth-child(3){
            top: 0;
            left: 40px;
            z-index: 3;
            background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734834439/perfil2_yhzm7x.jpg');
            background-position: center;
            background-size: cover;
            opacity: .8;
            transition: all .2s ease;

            &:hover{
                z-index: 5;
                opacity: 1;
                transform: translateY(-5px) scale(1.05);
            }
        }

        &:nth-child(4){
            top: 0;
            left: 60px;
            z-index: 4;
            background-image: url('https://res.cloudinary.com/dabucfkmg/image/upload/v1734834440/perfil4_smjprm.jpg');
            background-position: center;
            background-size: cover;
            opacity: 1;
            transition: all .2s ease;

            &:hover{
                transform: translateY(-5px) scale(1.05);
            }
        }
    }
`

const Inicial = () => {
    
    return (
        <>
            <BackgroundHome></BackgroundHome>
            <InicialContainer>
                <InicialTexts>
                    <h1 data-aos="fade-up-right" data-aos-delay="100">Já imaginou ter um <b>site de altíssimo</b> padrão?</h1>
                    <p data-aos="fade-up" data-aos-delay="200">Um site de altíssimo padrão é muito mais do que uma página na internet: é uma experiência online única, que combina layout refinado, tecnologia de ponta.</p>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <Button01/>
                        <Button02 /> 
                    </div>
                    <span data-aos="fade-in" data-aos-delay="1000">Todas as informações coletadas nesse site serão para fins de contato, seus dados estão protegidos.</span>
                    <InicialDiv data-aos="fade-in" data-aos-delay="500">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <article>
                            <span data-aos="fade-in" data-aos-delay="1000">4.9</span>
                            <img data-aos="fade-in" data-aos-delay="1000" src="https://res.cloudinary.com/dabucfkmg/image/upload/v1735248918/iconX_ybqztg.png" /> 
                        </article>
                    </InicialDiv>
                </InicialTexts>
                <InicialImage>
                    <img data-aos="fade-up-right" data-aos-delay="0" src="https://res.cloudinary.com/dabucfkmg/image/upload/v1734822642/mockupSite2_1_ggycxy.png" />
                </InicialImage>
            </InicialContainer>
        </>
    )
}

export default Inicial;