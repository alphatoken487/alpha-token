import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import ContactCreativeForm from './parts/ContactCreativeForm.js'
import AnimatedHeading from '../../components/animated-heading';

class ContactCreative extends React.Component {


    render() {

        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #000;
            padding: 100px 0;
        `

        const FormRow = styled(Row)`
           background-color: #111;
        `

        const ContactCol = styled(Col)`
            min-height: 600px;
            max-height: 600px;
            padding: 0;
            display: flex;
            align-items: center;
        `

        const Map = styled.iframe`
            border: none;
            height: 100%;
            width: 100%;
        `

        const IconRow = styled(Row)`
            margin-top: 150px;
        `

        const IconCol = styled(Col)`
            @media (max-width: 500px) {
              margin-bottom: 140px;
            }
        `

        const IconContainer = styled.div`
            width: 150px;
            height: 150px;
            margin: auto;
            padding: 35px;
            text-align: center;
            position: relative;
            bottom: 75px;
            background-color: #04e5e5;
            border-radius: 150px;
            transition: .5s;
        `

        const InfoPart = styled.div`
            min-height: 250px;
            background-color: #111;
            border: 2px solid #444;
            &:hover ${IconContainer} {
              background-color: #009e9e;
            }
        `
        const Icon = styled.img`
            height: 70px;
            width: 70px;
            object-fit: contain;
        `

        const InfoTitle = styled.h4`
            font-size: 35px;
            color: #fff;
            font-family: Teko;
            text-align: center;
        `

        const Info = styled.div`
            position: relative;
            bottom: 30px;
        `

        const InfoLinkContainer = styled.div`
            text-align: center;
        `

        const InfoLink = styled.a`
            color: #04e5e5;
            transition: .5s;
            &:hover {
              color: #fff;
              text-decoration: none;
            }
        `

        return (
            <Section id="contact">
                <Container>
                    <Col md={12}>
                        <AnimatedHeading text="Contact Us" />
                    </Col>
                    <FormRow>
                        <ContactCol md={6}>
                            <ContactCreativeForm />
                        </ContactCol>
                        <ContactCol md={6}>
                            <Map
                                title="map"
                                src="https://mapsengine.google.com/map/embed?mid=zzX-BuFGi82s.kBQeXTGL4SqY" />
                        </ContactCol>
                    </FormRow>
                </Container>
            </Section>
        )
    }

}

export default ContactCreative