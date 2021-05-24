import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import web3 from '../../web3'
import ico from '../../ethereum/ico'

var scrollToElement = require('scroll-to-element')

class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            collapse: false,
            sticky: false,
            sections: this.props.sections ? this.props.sections : ['home', 'token', 'features', 'roadmap', 'how to buy', 'contact']
        }
    }

    state = {
        myBalance: '',
        myEther: '',
        myAddress: ''
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (window.pageYOffset >= 50 && this.state.sticky) {
            if (this.state.collapse !== nextState.collapse) {
                return true
            }
            return false
        } else {
            return true
        }
    }

    handleScroll = event => {
        if (window.pageYOffset >= 50) {
            this.setState({ sticky: true })
        } else {
            this.setState({ sticky: false })
        }
    }

    collapseNav() {
        console.log(this.state, 'col')
        if (!this.state.collapse) {
            this.setState({ collapse: true })
        } else {
            this.setState({ collapse: false })
        }
    }

    state = {
        myBalance: '',
        myEther: '',
        myAddress: ''
    }

    async componentDidMount() {

        let accounts = await web3.eth.getAccounts();

        let myBalance = await ico.methods.myBalance().call({ from: accounts[0] });
        myBalance = web3.utils.fromWei(myBalance, 'ether');

        let myBalanceEther = await web3.eth.getBalance(accounts[0]);
        myBalanceEther = web3.utils.fromWei(myBalanceEther, 'ether');
        let myEther = myBalanceEther;

        let myAddress = await ico.methods.myAddress().call({ from: accounts[0] });

        this.setState({ myBalance, myEther, myAddress });
    }

    render() {

        const NavbarWrapper = styled.div`
            position: absolute;
            z-index: 1;
            width: 100%;
            padding: 20px 0;
            z-index: 100;
            &.sticky {
                position: fixed;
                background-color: rgba(0,0,0,.8);
                padding: 0 0;
                @media (max-width: 500px) {
                    padding: 20px 0;
                }
            }
        `

        const NavbarContainer = styled(Container)`
            display: flex;
            position: relative;
            @media (max-width: 500px) {
                display: block;
                padding: 0;
            }
            
        `

        const Nav = styled.nav`
            flex: 0 0 80%;
            max-width: 80%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            @media (max-width: 500px) {
                flex: 0 0 100%;
                max-width: 100%;
                justify-content: center;
                background-color: rgba(0,0,0,.8);
                margin-top: 20px;
                &.hidden_mobile {
                    display: none;
                }
            }
        `

        const LogoWrapper = styled.div`
            flex: 0 0 20%;
            max-width: 20%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            @media (max-width: 500px) {
                flex: 0 0 100%;
                max-width: 100%;
                justify-content: center;
            }

            span.logoEdit {
                font-size: 27px;
                color: #fff;
                font-weight: 700;
                text-transform: uppercase;
                background: -webkit-linear-gradient(left,#00ffff ,#007a7a);
                background: -o-linear-gradient(right,#00ffff,#007a7a);
                background: -moz-linear-gradient(right,#00ffff,#007a7a);
                background: linear-gradient(to right,#00ffff ,#007a7a);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        `

        const Logo = styled.img`
            height: 40px;
            @media (max-width: 1023px) {
                height: 30px;
            }
        `

        const NavInner = styled.div`
            justify-content: flex-end;
        `

        const Toggler = styled.button`
            color: #fff;
            position: absolute;
            right: 0;
            top: 0;
            @media (min-width: 500px) {
                display: none;
            }
        `


        return (
            <NavbarWrapper className={`header${this.state.sticky === true ? ' sticky' : ''}`}>
                <NavbarContainer>
                    <LogoWrapper className="logo">
                        <span className="logoEdit">Alpha</span>
                    </LogoWrapper>
                    <Toggler
                        onClick={() => this.collapseNav()}
                        className="navbar-toggler navbar-toggler-right"
                    >
                        <FontAwesomeIcon icon={faBars} className="bars" />
                    </Toggler>
                    <Nav className={`navbar navbar-expand-sm ${this.state.collapse === true ? 'expand' : 'hidden_mobile'}`}>
                        <NavInner className={`navbar-collapse collapse ${this.state.collapse === true ? 'show' : ''}`}>
                            <div className="navbar-nav">{this.navItems()}</div>
                        </NavInner>
                    </Nav>
                    <div class="myAccountBox">
                        <div class="address">{"Address: " + this.state.myAddress}</div>
                        <div class="eth">{"My Ether: " + this.state.myEther}</div>
                        <div class="dctoken">{"My DC: " + this.state.myBalance}</div>
                    </div>
                </NavbarContainer>
            </NavbarWrapper>
        )
    }

    navigate(id) {
        if (this.props.scroll) {
            const el = document.getElementById(id)
            scrollToElement(el, {
                offset: 0,
                ease: 'in-out-expo',
                duration: 2000
            })
        } else {
            window.location.href = `./#${id}`;
        }
    }

    navItems() {
        const NavItem = styled.button`
            background: none;
            border: none;
            color: #fff;
            text-transform: capitalize;
            font-weight: 500;
            margin: 10px 5px;
            transition: .5s;
            &:hover {
                color: #04e5e5;
            }
            &:focus {
                outline: none;
            }
            @media (min-width: 501px) and (max-width: 1023px) {
                font-size: 11px;
                margin: 2px;
            }
        `

        return this.state.sections.map((value, index) => {
            return (
                <NavItem key={index} onClick={() => this.navigate(value)}>
                    {value}
                </NavItem>
            )
        })
    }
}

export default Navbar