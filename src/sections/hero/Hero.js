import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import Video from "../../images/videos/x.mp4"

class Hero extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
    }

    updateDimensions = () => {
        if (this.state.height !== window.innerHeight) {
            this.setState({ height: window.innerHeight })
        }
        if (this.state.width !== window.innerWidth) {
            this.setState({ width: window.innerWidth })
        }
    }


    componentDidMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth })
        window.addEventListener('resize', this.updateDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render() {

        const Section = styled.section`
            position: relative;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            background-size: cover;
            background-repeat: no-repeat;
        `

        const VideoBg = styled.video`
            width: 100%;
            height: 100%;
            object-fit: fill;
            position: absolute
        `

        const Overlay = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            background-color: rgba(0,0,0,.5);
        `

        const Heading1 = styled.h1`
            font-size: 80px;
            font-family: Teko;
            line-height: 40px;
            color: #fff;
            font-weight: 400;
            text-transform: uppercase;
            @media (min-width:768px) {
                margin-left: 4px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 40px;
            }
            @media (max-width:767px) {
                font-size: 20px;
                line-height: 20px;
            }
        `

        const Heading2 = styled.h2`
            font-size: 120px;
            color: #fff;
            font-weight: 700;
            text-transform: uppercase;
            background: -webkit-linear-gradient(left, #00ffff , #007a7a);
            background: -o-linear-gradient(right, #00ffff, #007a7a);
            background: -moz-linear-gradient(right, #00ffff, #007a7a);
            background: linear-gradient(to right, #00ffff , #007a7a); 
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
            @media (max-width:767px) {
                font-size: 40px;
                line-height: 40px;
            }
           @media (min-width:768px) and (max-width:1500px) {
                font-size: 70px;
            }
        `

        const Type = styled.div`
            font-size: 50px;
            line-height: 50px;
            color: #fff;
            text-transform: uppercase;
            @media (min-width:768px) {
                margin-left: 6px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 23px;
                line-height: 20px;
            }
            @media (max-width:767px) {
                font-size: 20px;
                line-height: 20px;
            }
            span {
                font-family: Teko;
            }
        `
        const Content = styled.div`
            position: relative;
            z-index: 10
        `

        const Separator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 30px;
            @media (min-width:768px) {
                margin-left: 6px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
        `

        const BottomContent = styled.div`
            position: absolute;
            width: 100%;
            bottom: -14%;
            z-index: 2;
            @media (min-width:1025px) and (max-width: 1400px) {    
                bottom: -35%;
            }
            @media (max-width:767px) {
                position: relative;
                bottom: 0;
            } 
            @media (min-width:768px) and (max-width: 1023px) {    
                bottom: -25%;
            }
        `

        const ServiceCol = styled(Col)`
            padding: 0;
            border-right: #444;
            &.no-border {
                border-right: none;
            }
            @media (max-width:500px) {
                border-right:none;
            }
        `

        const Service = styled.div`
            min-height: 300px;
            background-color: #111;
            transition: .2s;
            display: flex;
            justify-content: center;
            flex-direction: column;
            &:hover {
                background-color: #222;
            }
        `
        const ServiceContent = styled.div`
            padding: 40px;
            color: #fff;
        `
        const ServiceHeading = styled.h4`
            font-size: 30px;
            font-weight: 400;
            font-family: Teko;
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 10px;
        `

        const ServiceIcon = styled.div`
            margin-bottom: 20px;
            img {
                max-height: 70px;
            }
        `

        const ServiceText = styled.p`
            font-size: 14px;
            font-weight: 300;
            color: #c5c5c5;
        `

        return (
            <Section id="home">
                <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
                <Overlay style={{ height: `${this.state.width > 500 ? this.state.height : 350}px` }}>
                    <Container>
                        <Content>
                            <Heading1>
                                Creating
                                </Heading1>
                            <Heading2>
                                Alpha Token 1.0
                                </Heading2>
                            <Separator />
                            <Type>
                                <Typewriter
                                    options={{
                                        strings: [
                                            'App Developers',
                                            'Web Designers',
                                            'UX Designers',
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Type>
                        </Content>
                    </Container>
                </Overlay>
                <BottomContent>
                    <Container>
                        <Row>
                            <ServiceCol md={4} style={{ borderRight: this.state.width > 500 ? "1px solid #444" : "none" }}>
                                <Service>
                                    <ServiceContent>
                                        <ServiceIcon>
                                            <figure>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="78.275" height="78.274" viewBox="0 0 78.275 78.274">
                                                    <defs>
                                                        <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
                                                            <stop offset="0" stop-color="#02e5e5" />
                                                            <stop offset="0.5" stop-color="#02e5e5" />
                                                            <stop offset="1" stop-color="#3d5d49" />
                                                        </linearGradient>
                                                    </defs>
                                                    <path id="_041-new_project" data-name="041-new project" d="M94.274,92.97V77.315a1.3,1.3,0,0,0-.579-1.084c-2.278-1.525-5.034-1.525-7.249-1.525a13.066,13.066,0,0,0-12,7.936,9.124,9.124,0,0,0-9.255-3.865,7.193,7.193,0,0,0-1.181-3.551,1.3,1.3,0,0,0-1.043-.52H59.051V72.1h7.827a1.3,1.3,0,0,0,1.3-1.3v-1.8l8.549,4.274A1.3,1.3,0,0,0,78.62,72.1V62.965a1.3,1.3,0,0,0-.286-.815L68.183,49.462V40.787c0-5.6-2.11-11.609-6.1-17.376A42.967,42.967,0,0,0,56,16.33a1.3,1.3,0,0,0-1.733,0,42.959,42.959,0,0,0-6.077,7.081c-3.992,5.767-6.1,11.775-6.1,17.376v8.674L31.941,62.149a1.3,1.3,0,0,0-.286.815V72.1a1.3,1.3,0,0,0,1.888,1.167l8.549-4.274v1.8a1.3,1.3,0,0,0,1.3,1.3h7.827v2.609H47.31a1.3,1.3,0,0,0-1.185.758,10.767,10.767,0,0,0-.938,3.333,9.124,9.124,0,0,0-9.356,3.845,13.066,13.066,0,0,0-12-7.936c-2.215,0-4.971,0-7.249,1.525A1.3,1.3,0,0,0,16,77.315V92.97a1.3,1.3,0,0,0,1.3,1.3H92.97A1.3,1.3,0,0,0,94.274,92.97ZM55.137,79.924a3.9,3.9,0,0,0,2.687-1.072A8.432,8.432,0,0,1,55.068,84.9c-1.644-1.2-2.293-3.774-2.5-5.943A3.9,3.9,0,0,0,55.137,79.924Zm-1.3-3.914V55.137a1.3,1.3,0,1,1,2.609,0V76.011a1.3,1.3,0,1,1-2.609,0ZM76.01,63.422v6.564l-7.827-3.914V53.638Zm-20.872-44.3c2.534,2.554,9.78,10.661,10.393,20.365H62.854a7.826,7.826,0,0,0-15.433,0H44.743C45.358,29.8,52.606,21.675,55.138,19.118Zm5.217,21.669a5.218,5.218,0,1,1-5.218-5.218,5.218,5.218,0,0,1,5.218,5.218Zm-26.091,29.2V63.422l7.827-9.784V66.072Zm10.437-.5v-27.4h2.72a7.826,7.826,0,0,0,15.433,0h2.72v27.4H59.051V55.137a3.914,3.914,0,1,0-7.827,0v14.35Zm3.486,7.827h1.693c.015,2.689.554,8.409,4.714,10.318a1.3,1.3,0,0,0,1.166-.039c.215-.116,4.965-2.787,4.7-10.279h1.731a6.184,6.184,0,0,1,.359,3.123c-.287,2.343-1.833,6.1-7.468,10.884a25.479,25.479,0,0,1-4.406-4.242C47.942,83.661,47.108,80.38,48.186,77.315Zm-29.577.75a11.793,11.793,0,0,1,5.218-.75A10.448,10.448,0,0,1,34.264,87.752a1.3,1.3,0,1,0,2.609,0,6.525,6.525,0,0,1,8.362-6.259,15.191,15.191,0,0,0,3.4,7.216,26.292,26.292,0,0,0,2.785,2.957H18.609Zm73.056,13.6H58.6c4.218-4.027,5.914-7.482,6.434-10.17a6.526,6.526,0,0,1,8.37,6.257,1.3,1.3,0,1,0,2.609,0A10.448,10.448,0,0,1,86.447,77.315a11.781,11.781,0,0,1,5.218.75ZM55.137,38.178a2.609,2.609,0,1,1-2.609,2.609,2.609,2.609,0,0,1,2.609-2.609ZM33.1,33.543a1.3,1.3,0,0,0,2.334,0,7.494,7.494,0,0,1,3.33-3.33,1.3,1.3,0,0,0,0-2.334,7.494,7.494,0,0,1-3.33-3.33,1.3,1.3,0,0,0-2.334,0,7.494,7.494,0,0,1-3.33,3.33,1.3,1.3,0,0,0,0,2.334A7.494,7.494,0,0,1,33.1,33.543Zm1.167-6.016a10.192,10.192,0,0,0,1.519,1.519,10.192,10.192,0,0,0-1.519,1.519,10.192,10.192,0,0,0-1.519-1.519A10.192,10.192,0,0,0,34.264,27.527Zm-6.523,6.737a1.3,1.3,0,0,0-1.167.721,13.363,13.363,0,0,1-5.94,5.94,1.3,1.3,0,0,0,0,2.334,13.363,13.363,0,0,1,5.94,5.94,1.3,1.3,0,0,0,2.334,0,13.363,13.363,0,0,1,5.94-5.94,1.3,1.3,0,0,0,0-2.334,13.363,13.363,0,0,1-5.94-5.94A1.3,1.3,0,0,0,27.741,34.264Zm3.978,7.827a16.069,16.069,0,0,0-3.978,3.978,16.069,16.069,0,0,0-3.978-3.978,16.069,16.069,0,0,0,3.978-3.978A16.068,16.068,0,0,0,31.719,42.092ZM80.508,27.879a7.494,7.494,0,0,1-3.33-3.33,1.3,1.3,0,0,0-2.334,0,7.494,7.494,0,0,1-3.33,3.33,1.3,1.3,0,0,0,0,2.334,7.494,7.494,0,0,1,3.33,3.33,1.3,1.3,0,0,0,2.334,0,7.494,7.494,0,0,1,3.33-3.33,1.3,1.3,0,0,0,0-2.334Zm-4.5,2.685a10.192,10.192,0,0,0-1.519-1.519,10.191,10.191,0,0,0,1.519-1.519,10.192,10.192,0,0,0,1.519,1.519,10.193,10.193,0,0,0-1.519,1.519Zm14.35,11.527a1.3,1.3,0,0,0-.721-1.167,13.363,13.363,0,0,1-5.94-5.94,1.3,1.3,0,0,0-2.334,0,13.363,13.363,0,0,1-5.94,5.94,1.3,1.3,0,0,0,0,2.334,13.363,13.363,0,0,1,5.94,5.94,1.3,1.3,0,0,0,2.334,0,13.363,13.363,0,0,1,5.94-5.94A1.3,1.3,0,0,0,90.361,42.092ZM82.533,46.07a16.069,16.069,0,0,0-3.978-3.978,16.069,16.069,0,0,0,3.978-3.978,16.068,16.068,0,0,0,3.978,3.978A16.068,16.068,0,0,0,82.533,46.07ZM23.827,60.356a1.3,1.3,0,1,1-2.609,0V55.137a1.3,1.3,0,1,1,2.609,0Zm0,5.218v2.609a1.3,1.3,0,1,1-2.609,0V65.574a1.3,1.3,0,0,1,2.609,0ZM16,70.792V57.747a1.3,1.3,0,1,1,2.609,0V70.792a1.3,1.3,0,0,1-2.609,0ZM89.056,60.356a1.3,1.3,0,1,1-2.609,0V55.137a1.3,1.3,0,1,1,2.609,0Zm0,5.218v2.609a1.3,1.3,0,1,1-2.609,0V65.574a1.3,1.3,0,0,1,2.609,0Zm5.218,5.218a1.3,1.3,0,0,1-2.609,0V57.747a1.3,1.3,0,1,1,2.609,0Z" transform="translate(-16 -16)" fill="url(#linear-gradient)" />
                                                </svg>



                                            </figure>
                                        </ServiceIcon>
                                        <ServiceHeading>Original Supply</ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceText>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ultricies lacus, vitae varius velit.
                                            Pellentesque blandit libero eu turpis condimentum bibendum.
                                                </ServiceText>
                                    </ServiceContent>
                                </Service>
                            </ServiceCol>
                            <ServiceCol md={4} style={{ borderRight: this.state.width > 500 ? "1px solid #444" : "none" }}>
                                <Service>
                                    <ServiceContent>
                                        <ServiceIcon>
                                            <figure>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="75.749" height="78.274" viewBox="0 0 75.749 78.274">
                                                    <defs>
                                                        <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
                                                            <stop offset="0" stop-color="#02e5e5" />
                                                            <stop offset="0.5" stop-color="#02e5e5" />
                                                            <stop offset="1" stop-color="#3d5d49" />
                                                        </linearGradient>
                                                    </defs>
                                                    <path id="_035-pie_chart" data-name="035-pie chart" d="M71.549,8a12.551,12.551,0,0,0-7.193,2.258A31.362,31.362,0,0,0,52.612,8,1.262,1.262,0,0,0,51.35,9.262v30.3a1.262,1.262,0,0,0,1.262,1.262h30.3a1.262,1.262,0,0,0,1.262-1.262,31.361,31.361,0,0,0-2.258-11.744A12.615,12.615,0,0,0,71.549,8Zm10.1,12.625a10.1,10.1,0,1,1-10.1-10.1A10.1,10.1,0,0,1,81.649,20.625ZM53.874,38.3V10.551A28.8,28.8,0,0,1,62.2,12.145,12.619,12.619,0,0,0,80.029,29.97,28.8,28.8,0,0,1,81.623,38.3ZM72.812,23.15a1.264,1.264,0,0,0-1.262-1.262,3.787,3.787,0,0,1-1.262-7.358v-.217a1.262,1.262,0,0,1,2.525,0h1.262a1.262,1.262,0,1,1,0,2.525H71.549a1.262,1.262,0,0,0,0,2.525,3.787,3.787,0,0,1,1.262,7.358v.217a1.262,1.262,0,0,1-2.525,0H69.024a1.262,1.262,0,1,1,0-2.525h2.525A1.264,1.264,0,0,0,72.812,23.15ZM29.887,76.174H17.262A1.262,1.262,0,0,0,16,77.437v5.05a1.262,1.262,0,0,0,1.262,1.262H29.887a1.262,1.262,0,0,0,1.262-1.262v-5.05A1.262,1.262,0,0,0,29.887,76.174Zm-1.262,5.05h-10.1V78.7h10.1ZM17.262,15.575H29.887a1.262,1.262,0,0,0,1.262-1.262V9.262A1.262,1.262,0,0,0,29.887,8H17.262A1.262,1.262,0,0,0,16,9.262v5.05a1.262,1.262,0,0,0,1.262,1.262Zm1.262-5.05h10.1V13.05h-10.1ZM70.287,78.7H57.662A1.262,1.262,0,0,0,56.4,79.962v5.05a1.262,1.262,0,0,0,1.262,1.262H70.287a1.262,1.262,0,0,0,1.262-1.262v-5.05A1.262,1.262,0,0,0,70.287,78.7Zm-1.262,5.05h-10.1V81.224h10.1Zm21.462-20.2H77.862A1.262,1.262,0,0,0,76.6,64.812v5.05a1.262,1.262,0,0,0,1.262,1.262H90.487a1.262,1.262,0,0,0,1.262-1.262v-5.05A1.262,1.262,0,0,0,90.487,63.549ZM89.224,68.6h-10.1V66.074h10.1ZM60.353,75.538a1.262,1.262,0,0,0,2.192-1.253l-.836-1.465A31.773,31.773,0,0,0,75.98,58.338l5.1,2.552a1.262,1.262,0,1,0,1.129-2.258l-5.224-2.612a31.4,31.4,0,0,0,2.133-11.409,1.262,1.262,0,0,0-1.262-1.262H48.825V14.312a1.262,1.262,0,0,0-1.262-1.262,31.4,31.4,0,0,0-19.236,6.558l-1.4-1.2a1.263,1.263,0,1,0-1.643,1.917l1.084.929a31.515,31.515,0,0,0-.621,46.145l-3.176,4.235a1.262,1.262,0,0,0,2.02,1.515l3.054-4.072a31.511,31.511,0,0,0,31.76,4.8ZM74.721,54.886,69.589,52.32a1.262,1.262,0,1,0-1.129,2.258l5.261,2.63a29.168,29.168,0,0,1-5.368,7.651L50.484,45.874H76.572a28.849,28.849,0,0,1-1.851,9.012ZM28.3,22.907l5.82,4.988a1.263,1.263,0,1,0,1.643-1.917l-5.472-4.691A28.878,28.878,0,0,1,46.3,15.6V42.382L23.345,28.61a29.265,29.265,0,0,1,4.951-5.7Zm7.4,33.319a1.262,1.262,0,0,0-1.767.252l-6.66,8.879a28.985,28.985,0,0,1-5.225-34.586L46.3,45.327V73.62a28.9,28.9,0,0,1-17.146-6.567l6.793-9.058A1.262,1.262,0,0,0,35.695,56.227ZM48.825,73.62V47.8l17.691,18.8a29.14,29.14,0,0,1-6.06,4.035L57.5,65.448A1.262,1.262,0,1,0,55.3,66.7l2.832,4.954a28.841,28.841,0,0,1-9.311,1.965Z" transform="translate(-16 -8)" fill="url(#linear-gradient)" />
                                                </svg>

                                            </figure>

                                        </ServiceIcon>
                                        <ServiceHeading>Fair Sale</ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceText>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ultricies lacus, vitae varius velit.
                                            Pellentesque blandit libero eu turpis condimentum bibendum.
                                                </ServiceText>
                                    </ServiceContent>
                                </Service>
                            </ServiceCol>
                            <ServiceCol md={4}>
                                <Service>
                                    <ServiceContent>
                                        <ServiceIcon>
                                            <figure>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="78.274" height="78.274" viewBox="0 0 78.274 78.274">
                                                    <defs>
                                                        <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
                                                            <stop offset="0" stop-color="#02e5e5" />
                                                            <stop offset="0.5" stop-color="#02e5e5" />
                                                            <stop offset="1" stop-color="#3d5d49" />
                                                        </linearGradient>
                                                    </defs>
                                                    <path id="_011-presentation" data-name="011-presentation" d="M31.655,69.488a1.3,1.3,0,1,1-1.3-1.3A1.3,1.3,0,0,1,31.655,69.488Zm46.965,1.3a1.3,1.3,0,1,0-1.3-1.3A1.3,1.3,0,0,0,78.619,70.792Zm-26.091-1.3a1.3,1.3,0,1,0-1.3,1.3A1.3,1.3,0,0,0,52.528,69.488Zm6.523-1.3a1.3,1.3,0,1,0,1.3,1.3A1.3,1.3,0,0,0,59.051,68.183Zm35.223-6.536V92.97a1.3,1.3,0,0,1-1.3,1.3H76.01a1.3,1.3,0,0,1-1.3-1.3V89.056a1.305,1.305,0,0,1,.219-.723l2.39-3.585V81.566a6.961,6.961,0,0,1-2.435-1.807,6.725,6.725,0,0,1-1.542-3.87c-.277-.036-.58-.083-.884-.141-.746-.144-3.015-.581-3.015-2.346,0-.792.486-1.792,1.5-3.8A43.737,43.737,0,0,0,73.4,64.056v-2.4a6.53,6.53,0,0,1,6.523-6.523h2.609V31.655H77.315V48.614a1.3,1.3,0,0,1-1.3,1.3H56.441v5.218h6.523a1.3,1.3,0,0,1,.923.382L66.5,58.128a1.3,1.3,0,0,1,.382.922V72.1a11.735,11.735,0,0,1-5.086,9.665l.123.617,9.406,4.18a1.3,1.3,0,0,1,.775,1.192V92.97a1.3,1.3,0,0,1-1.3,1.3H38.177a1.3,1.3,0,0,1-1.3-1.3V87.752a1.3,1.3,0,0,1,.82-1.211l10.688-4.275.1-.5A11.735,11.735,0,0,1,43.4,72.1V59.051a1.3,1.3,0,0,1,.382-.923l2.609-2.609a1.3,1.3,0,0,1,.922-.382h6.523V49.919H34.264a1.3,1.3,0,0,1-1.3-1.3V31.655H27.741V55.137H40.787a1.3,1.3,0,0,1,1.085,2.028L36.714,64.9c.034.089.067.179.1.27a23.373,23.373,0,0,0,2.616,5.194c.82,1.315,1.361,2.184,1.361,3.034,0,1.765-2.269,2.2-3.015,2.346-.3.059-.606.1-.884.141a6.724,6.724,0,0,1-1.542,3.87,6.942,6.942,0,0,1-2.387,1.785v2.083L34.2,87.339a1.31,1.31,0,0,1,.067.413V92.97a1.3,1.3,0,0,1-1.3,1.3H17.3a1.3,1.3,0,0,1-1.3-1.3V90.361a1.3,1.3,0,0,1,.382-.923L22.522,83.3v-2.14a10.089,10.089,0,0,1-3.871-4.612,16.5,16.5,0,0,1-1.344-5.636l-1.295-9.065a1.3,1.3,0,0,1-.013-.2c.024-2.252,1.144-6.509,5.218-6.509h3.914V30.35a1.3,1.3,0,0,1,1.3-1.3h6.523V23.827h-1.3a1.3,1.3,0,0,1-1.3-1.3V17.3a1.3,1.3,0,0,1,1.3-1.3H78.619a1.3,1.3,0,0,1,1.3,1.3v5.218a1.3,1.3,0,0,1-1.3,1.3h-1.3v5.218h6.523a1.3,1.3,0,0,1,1.3,1.3V55.137h3.914C93.13,55.137,94.25,59.4,94.274,61.647ZM31.655,91.665V88.612l-7.53-3.227L18.609,90.9v.764Zm-1.3-7.827v-1.51a15.714,15.714,0,0,1-2.609.205,11.037,11.037,0,0,1-2.609-.3v.743l5.671,2.43-.386-1.158a1.309,1.309,0,0,1-.067-.412Zm3.977-17.863a2.691,2.691,0,0,0-.168-.4H27.175l-3.534,5.889a1.3,1.3,0,0,1-1.119.633H20.046c.387,2.549,1.889,7.827,7.694,7.827a8.194,8.194,0,0,0,5-1.274A12.619,12.619,0,0,1,27.1,77.145a1.3,1.3,0,1,1,1.288-2.269,10.721,10.721,0,0,0,5.732,1.143,1.331,1.331,0,0,1,.139-.008,4.25,4.25,0,0,0,.025-1.1A1.3,1.3,0,0,1,35.5,73.4a11.973,11.973,0,0,0,2.475-.383c-.2-.365-.5-.852-.764-1.273A25.9,25.9,0,0,1,34.327,65.975Zm4.022-8.228H21.218c-2.332,0-2.58,3.238-2.606,3.841l1.128,7.9h2.044L25.318,63.6a1.3,1.3,0,0,1,1.119-.633H34.87ZM53.832,83.764a11.637,11.637,0,0,1-2.945-.725l-.61,3.05,3.555-.711Zm-14.35,7.9h14.35V88.038l-4.962.993A1.3,1.3,0,0,1,47.335,87.5l.435-2.176-8.288,3.315Zm23.06-6.153.4,1.983A1.3,1.3,0,0,1,61.4,89.031l-4.962-.993v3.627H69.487V88.6Zm-3.156-2.474a11.637,11.637,0,0,1-2.945.725v1.614L60,86.089Zm4.877-10.745-2.24-6.72H48.25l-2.24,6.72a9.128,9.128,0,1,0,18.256,0Zm-1.84-14.548H47.85L46,59.591v4.466l.067-.2a1.3,1.3,0,0,1,1.238-.892H62.964a1.3,1.3,0,0,1,1.238.892l.067.2V59.591ZM32.959,21.218H77.315V18.609H32.959Zm2.609,2.609V44.544l2.785-3.9a3.912,3.912,0,0,1,6.8-3.6l5.328-1.332,2.639-3.3a3.913,3.913,0,1,1,7.012-3.369h5.008L72.1,23.827Zm20.873,7.827a1.3,1.3,0,1,0-1.3-1.3A1.3,1.3,0,0,0,56.441,31.655Zm-14.35,9.132a1.3,1.3,0,1,0-1.3-1.3,1.3,1.3,0,0,0,1.3,1.3ZM36.8,47.31h6.6V43.4a1.307,1.307,0,0,1,.022-.232,3.9,3.9,0,0,1-3.4-.364Zm11.815,0V44.7H46V47.31Zm10.437,0V40.787H56.441V47.31Zm10.437,0V36.873H66.878V47.31Zm5.218,0V25.132l-8.349,6.262a1.3,1.3,0,0,1-.783.261H60.131a3.911,3.911,0,0,1-4.975,2.391l-2.914,3.643a1.3,1.3,0,0,1-.7.451L46,39.523a3.9,3.9,0,0,1-1,2.568h4.914a1.3,1.3,0,0,1,1.3,1.3V47.31h2.609V39.482a1.3,1.3,0,0,1,1.3-1.3h5.218a1.3,1.3,0,0,1,1.3,1.3V47.31h2.609V35.569a1.3,1.3,0,0,1,1.3-1.3h5.218a1.3,1.3,0,0,1,1.3,1.3V47.31Zm1.3,15.655h7.827a1.3,1.3,0,0,1,1.3,1.16l2.48,22.322h4.051V61.671c0-.234-.121-3.925-2.609-3.925H79.924A3.918,3.918,0,0,0,76.01,61.66Zm-.338,10.923a1.306,1.306,0,0,1,.272,1.027,4.582,4.582,0,0,0,.213,1.882l.21-.736-.015,0a2.567,2.567,0,0,0,2.568-.881,1.3,1.3,0,1,1,2,1.67,5.029,5.029,0,0,1-3.392,1.842,8.278,8.278,0,0,0,4.95,1.237,8.559,8.559,0,0,0,1.761-.176L82.67,65.574H75.633a51.279,51.279,0,0,1-2.367,5.2c-.384.763-.837,1.663-1.07,2.23a11.729,11.729,0,0,0,2.53.4A1.3,1.3,0,0,1,75.672,73.887Zm4.251,8.449v2.806a1.305,1.305,0,0,1-.219.723l-1.392,2.089,6.533-2.8-.311-2.8a11.292,11.292,0,0,1-2.05.183,15.8,15.8,0,0,1-2.56-.2Zm11.741,9.329V89.056H86.447a1.3,1.3,0,0,1-1.3-1.16l0-.031-7.832,3.356v.444ZM50.5,77.1a8.338,8.338,0,0,0,9.275,0,1.3,1.3,0,1,0-1.447-2.171,5.736,5.736,0,0,1-6.38,0A1.3,1.3,0,1,0,50.5,77.1Z" transform="translate(-16 -16)" fill="url(#linear-gradient)" />
                                                </svg>

                                            </figure>
                                        </ServiceIcon>
                                        <ServiceHeading>Community Involvement</ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceText>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ultricies lacus, vitae varius velit.
                                            Pellentesque blandit libero eu turpis condimentum bibendum.
                                                </ServiceText>
                                    </ServiceContent>
                                </Service>
                            </ServiceCol>
                        </Row>
                    </Container>
                </BottomContent>
            </Section >
        )
    }
}

export default Hero