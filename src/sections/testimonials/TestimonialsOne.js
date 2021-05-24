import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import RevealContent from '../../components/reveal-content'
import TestimonialsOnePart from '../../sections/testimonials/parts/TestimonialsOnePart.js'
import AnimatedHeading from '../../components/animated-heading'

class TestimonialsOne extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 0
        }
    }
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #000;
            background-size: cover;
            .heading {
              margin-bottom: 50px !important;
            }
          }
        `

        const TestimonialContainer = styled.div`
            padding: 100px 0;
            @media (max-width: 767px) {
                padding: 50px 10px;
            }
        `

        return (
            <Section id="how to buy">
                <TestimonialContainer>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <AnimatedHeading text="Recent testimonials" />
                            </Col>
                            <Col md={12}>
                                <RevealContent>
                                    <TestimonialsOnePart />
                                </RevealContent>
                            </Col>
                        </Row>
                    </Container>
                </TestimonialContainer>
            </Section>
        )
    }

}

export default TestimonialsOne