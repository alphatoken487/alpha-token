import React from 'react'
import styled, { keyframes } from 'styled-components'


const Wrapper = styled.div`
.Separator {
height: 5px;
width: 50px;
background-color: #04e5e5;
margin-bottom: 30px;
margin-left: 6px;
}
.ContactForm {
    padding: 40px;
    width: 100%;
}
.Heading {
    font-size: 70px;
    font-family: Teko;
    color: #fff;   
}

.InputElement {
    margin: 20px 0;

}
.Input {
    width: 100%;
    background-color: #111;
    border: none;
    border-bottom: 1px solid #444;
    padding: 10px 5px;
    border-radius: 0;
    color: #fff;
    transition: .5s;
    &:focus {
      border-bottom: 1px solid #04e5e5;
      outline: none;
    }
}

.Message {
    width: 100%;
background-color: #111;
border: none;
border-bottom: 1px solid #444;
padding: 10px 5px;
border-radius: 0;
color: #fff;
transition: .5s;
&:focus {
border-bottom: 1px solid #04e5e5;
outline: none;
}
}
.Textarea {
    width: 100%;
    background-color: #111;
    border: none;
    border-bottom: 1px solid #444;
    padding: 10px 5px;
    border-radius: 0;
    color: rgb(255, 255, 255);
    transition: all 0.5s ease 0s;
    min-height: 100px;
    margin-top: 0px;
    margin-bottom: 0px;
    height: 100px;
    &:focus {
      border-bottom: 1px solid #04e5e5;
      outline: none;
    } 
}

.Submit {
    display: block;
    height: 50px;
    width: 186px;
    position: relative;
    border: none;
    overflow: hidden;
    transition: .5s;
    &::after {
      position: absolute;
      content:'';
      display: inline-block;
      background: rgba(59,173,227,1);
      background: linear-gradient(45deg, rgba(41, 153, 153, 1) 0%, rgba(50, 189, 189, 1) 25%, rgba(4, 229, 229, 1) 51%, rgba(41, 153, 153, 1) 100%);
      height: 100%;
      width:  140%;
      top: 0;
      left: 0;
      transition: .5s;
    }
    
    &:hover {
      &::after {
        transform: translateX(-20%);
      }
    }
    span {
      position: relative;
      top: 0;
      color: #fff;
      z-index: 10;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
}
`


export default function ContactOneForm() {

    return (
        <Wrapper>
            <form className="ContactForm" name="contact" netlify netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <h3 className="Heading">
                    Get In Touch
              </h3>
                <div className="seperator" />
                <input className="InputElement">
                    <input className="Input" type="text" name="name" className="name" placeholder="Name" />
                </input>
                <input className="InputElement">
                    <input className="Input" type="email" name="email" className="email" placeholder="Email" />
                </input>
                <input className="InputElement">
                    <input className="Input" type="text" className="phone" placeholder="Phone" />
                </input>
                <input className="InputElement">
                    <textarea className="Textarea" placeholder="Message" className="message" />
                </input>
                <button className="Submit" type="submit" value="Submit message">
                    <span>
                        Submit
                </span>
                </button>
            </form>
        </Wrapper>
    )
}