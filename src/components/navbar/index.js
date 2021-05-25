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
            sections: this.props.sections ? this.props.sections : ['home', 'token', 'contribute', 'features', 'contact']
        }
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


        try {
            let accounts = await web3.eth.getAccounts();

            let myBalance = await ico.methods.myBalance().call({ from: accounts[0] });
            myBalance = web3.utils.fromWei(myBalance, 'ether');

            let myBalanceEther = await web3.eth.getBalance(accounts[0]);
            myBalanceEther = web3.utils.fromWei(myBalanceEther, 'ether');
            let myEther = myBalanceEther;

            let myAddress = await ico.methods.myAddress().call({ from: accounts[0] });

            this.setState({ myBalance, myEther, myAddress });
        } catch (err) {
            console.log("metamask isn't installed");
        }

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
            flex: 0 0 10%;
            max-width: 10%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            @media (max-width: 500px) {
                flex: 0 0 100%;
                max-width: 100%;
                justify-content: center;
            }

            b {
                color: #00fafa;
            }

            span.logoEdit {
                font-size: 27px;
                color: #fff;
                font-weight: 700;
                text-transform: uppercase;
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
            .navbar-nav {
                margin: 0 auto;
            }
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




        const ActionBtn = styled.span`
        flex: 0 0 10%;
        max-width: 10%;
        display: grid !important;
        align-items: center;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
        right: 100px !important;
        width: auto;
        height: 70px;
        z-index: 700;
        font-size: 12px;
        line-height: 18px;
        color: #2b3942;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        padding-left: 1rem;
        padding-right: 1rem;

        @media (max-width: 500px) {
                display: none !important;
            }
    
        .adress {
            align-items: center;
            display: flex;
    
            .adressText {
                width: 150px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: white;
    
            }
    
            svg {
                margin-right: .6rem;
            }
        }
    
        .eth {
                align-items: center;
                display: flex;
                color: white;
    
                svg {
                    margin-right: .6rem;
                }
        }
    
        .alpha {
            align-items: center;
            display: flex;
            color: white;
    
            svg {
                margin-right: .6rem;
            }

    }

`




        return (
            <NavbarWrapper className={`header${this.state.sticky === true ? ' sticky' : ''}`}>
                <NavbarContainer>
                    <LogoWrapper className="logo">
                        <span className="logoEdit"><b>A</b>lpha</span>
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
                    <ActionBtn className="vrT">
                        <div className="adress">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                <g id="Gruppe_152" data-name="Gruppe 152" transform="translate(-85 -84)">
                                    <circle id="Ellipse_94" data-name="Ellipse 94" cx="8.5" cy="8.5" r="8.5" transform="translate(85 84)" fill="#2b3942" />
                                    <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M5.084,5.72a2.86,2.86,0,1,0-2.86-2.86A2.861,2.861,0,0,0,5.084,5.72Zm2.542.636H6.532a3.457,3.457,0,0,1-2.9,0H2.542A2.542,2.542,0,0,0,0,8.9v.318a.954.954,0,0,0,.953.953H9.215a.954.954,0,0,0,.953-.953V8.9A2.542,2.542,0,0,0,7.626,6.355Z" transform="translate(88.416 86.876)" fill="aqua" />
                                </g>
                            </svg>


                            <span className="adressText">{"Address: " + this.state.myAddress}</span>
                        </div>
                        <div className="eth">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                <g id="Gruppe_150" data-name="Gruppe 150" transform="translate(-85 -61)">
                                    <circle id="Ellipse_93" data-name="Ellipse 93" cx="8.5" cy="8.5" r="8.5" transform="translate(85 61)" fill="#2b3942" />
                                    <path id="Icon_awesome-ethereum" data-name="Icon awesome-ethereum" d="M8.376,6.706,4.471,9.092.563,6.706,4.471,0ZM4.471,9.858.563,7.472l3.908,5.693L8.379,7.472Z" transform="translate(89.029 62.918)" fill="aqua" />
                                </g>
                            </svg>

                            {"My Ether: " + this.state.myEther}
                        </div>
                        <div className="alpha">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18">
                                <g id="Gruppe_151" data-name="Gruppe 151" transform="translate(-85 -83)">
                                    <circle id="Ellipse_94" data-name="Ellipse 94" cx="8.5" cy="8.5" r="8.5" transform="translate(85 84)" fill="#2b3942" />
                                    <text id="A" transform="translate(94 97)" fill="aqua" font-size="14" font-family="LucidaGrande, Lucida Grande"><tspan x="-4.83" y="0">A</tspan></text>
                                </g>
                            </svg>


                            {"My Alpha: " + this.state.myBalance}
                        </div>
                    </ActionBtn>
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
            margin: 10px 10px;
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