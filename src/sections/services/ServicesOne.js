import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import AnimationContainer from '../../components/animation-container'
import AnimatedHeading from '../../components/animated-heading'

class ServicesOne extends React.Component {


    shouldComponentUpdate() {
        return false
    }


    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #111;
            background-size: cover;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            background-color: rgba(0,0,0,.9);
            padding: 100px 0;
        `


        const ServiceElement = styled.div`
            margin-bottom: 20px;
            text-align: center;
            padding: 40px;
            border-radius: 20px;
            transition: .2s;
            &:hover {
                background-color: #000;
                box-shadow: 0 28px 60px rgb(4, 229, 229, .1);
                transform: translateY(-10px);
            }
        `
        const ServiceHeading = styled.h4`
            font-size: 30px;
            font-weight: 500;
            font-family: Teko;
            color: #fff;
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 10px;
            margin: auto;
         `
        const ServiceIcon = styled.div`
            margin-bottom: 20px;
            img {
                max-height: 70px;
            }
        `

        const ServiceList = styled.ul`
            padding: 0;
            margin: 11px 0 0 0;
        `

        const ServiceListElement = styled.li`
            list-style: none;
            color: #c5c5c5;
            font-weight: 300;
            font-size: 14px;
            margin: 5px 0px;
            &::before {
                display: inline-block;
                content: '';
                border-radius: 2.5px;
                height: 5px;
                width: 5px;
                margin-right: 10px;
                background-color:#04e5e5;
                position: relative;
                bottom: 2.5px;
            }
        `

        return (
            <Section id="features">
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="The Features" />
                        <Row>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={200}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Decentralized Token
                                            </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                                Lorem ipsum dolor sit amet
                                                </ServiceListElement>
                                            <ServiceListElement>
                                                In vitae ultricies lacus vitae
                                                </ServiceListElement>
                                            <ServiceListElement>
                                                Pellentesque blandit libero
                                                </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInDown" delay={400}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Fully Fair Launch
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                                Lorem ipsum dolor sit amet
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                In vitae ultricies lacus vitae
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Pellentesque blandit libero
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Advanced Liquidity
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                                Lorem ipsum dolor sit amet
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                In vitae ultricies lacus vitae
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Pellentesque blandit libero
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Explosive Growth
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                                Lorem ipsum dolor sit amet
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                In vitae ultricies lacus vitae
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Pellentesque blandit libero
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInUp" delay={1000}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Network Management
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                                Lorem ipsum dolor sit amet
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                In vitae ultricies lacus vitae
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Pellentesque blandit libero
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInRight" delay={1200}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Advanced Development
                                            </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                                Lorem ipsum dolor sit amet
                                                </ServiceListElement>
                                            <ServiceListElement>
                                                In vitae ultricies lacus vitae
                                                </ServiceListElement>
                                            <ServiceListElement>
                                                Pellentesque blandit libero
                                                </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default ServicesOne