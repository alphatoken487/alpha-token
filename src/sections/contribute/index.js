import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import web3 from '../../web3';
import ico from '../../ethereum/ico';
import AnimatedHeading from '../../components/animated-heading'



const Wrapper = styled.div`
padding: 100px 0;
padding-bottom: 0px;
.contributeContainer {
    width: 1000px;
    margin: 0 auto;
    border: 1px solid #CACACA;
    margin-bottom: 80px;
    margin-top:20px;
    padding:20px;
  }
  .buyCoins {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .amountToBuy {
    font-weight:bold;
    color:black;
    opacity: 0.87;
    font-size:20px;
    margin-right:15px;
  }
  .etherDC {
    margin-left:10px;
    color:black;
    opacity:0.77;
  }
  .successfully {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-size:25px;
    width: 500px;
    margin: 0 auto;
    background-color:#43A047;
    margin-top: 10px;
    color: white;
    padding: 20px;
  }
  .buttonBuy {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:25px;
    margin-bottom: 20px;
  }
  .errorMessage {
    width: 500px;
    margin: 0 auto;
    background-color:#D32E30;
    margin-top: 10px;
    color: white;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .errorMessage > i {
    margin-right: 10px;
    font-size: 30px;
  }
  .loadingText {
    font-size:25px;
    color:black;
    opacity:0.87;
    font-weight: bold;
  }
  .loadTextSub {
    font-size:18px;
    color:black;
    opacity:0.77;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  .loadingContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  .loadingContainer > div {
    margin-right: 20px;
  }

  .buyCoins {
      color: white;
  }

  .amountToBuy {
      color: white;
  }

  .etherDC {
      color: white;
  }

  .MuiInput-underline:before {
    border-bottom: 1px solid rgb(255 255 255 / 73%) !important;
}

input.MuiInputBase-input.MuiInput-input {
    color: white;
}

button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary {
    background: #00e5e4;
    color: black;
}

.loadingText {
    color: white;
}

.loadTextSub {
    color: white;
}

.MuiCircularProgress-colorPrimary {
    color: #00e5e4;
}

.titleTokenSale {
    font-size: 40px;
    font-weight: 400;
    font-family: Teko;
    color: white;
}

.tokenSaleEnds {
    font-size: 30px;
    font-weight: 400;
    font-family: Teko;
    color: white;
}

.tokenSaleRightSide {
    text-align: center;
}

.time.flex.space-around {
    display: inline-flex;
    padding-bottom: 5rem;
    padding-top: 2rem;
    color: white;
}

.headerTime {
    font-size: 120px;
    font-family: Teko;
    color: #fff;
    line-height: 90px;
}

.dateTwo {
    padding-left: 2rem;
    padding-right: 2rem;
}

.dateThree {
    padding-right: 2rem;
}

`

class Contribute extends Component {

    state = {
        value: '',
        statusError: false,
        statusLoading: false,
        success: false,
        errorMessage: '',
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    }

    async componentDidMount() {

        let icoEndTime = await ico.methods.icoEnds().call();
        let timeNow = Math.round((new Date()).getTime() / 1000);
        let timeLeft = icoEndTime - timeNow;

        let date = new Date(timeLeft * 1000);

        let days = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        this.setState({ days, hours, minutes, seconds })
    }

    onSubmit = async event => {
        event.preventDefault();

        try {
            this.setState({ statusError: false, statusLoading: true })
            let accounts = await web3.eth.getAccounts();
            await ico.methods.buyTokens().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            this.setState({ statusLoading: false, success: true })
        } catch (err) {
            this.setState({ errorMessage: "Error" + err.message, statusLoading: false, success: false, statusError: true })
        }

    };


    render() {
        return (
            <Wrapper id="contribute">
                <AnimatedHeading text="To Contribute" />
                <div class=" contributeContainer">

                    <div class="tokenSaleRightSide">
                        <div class="titleTokenSale">TOKEN SALE IS LIVE</div>
                        <div class="tokenSaleEnds"> TOKEN SALE ENDS IN </div>
                        <div class="time flex space-around">
                            <div>
                                <div class="headerTime">{this.state.days}</div>
                                <div>Days</div>
                            </div>
                            <div className="dateTwo">
                                <div class="headerTime" >{this.state.hours}</div>
                                <div>Hours</div>
                            </div>
                            <div className="dateThree">
                                <div class="headerTime" >{this.state.minutes}</div>
                                <div>Min</div>
                            </div>
                            <div>
                                <div class="headerTime" >{this.state.seconds}</div>
                                <div>Sec</div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={this.onSubmit}>
                        <div class="buyCoins">
                            <div class="amountToBuy">Amount of ether to buy:</div>
                            <TextField value={this.state.value} onChange={event => this.setState({ value: event.target.value })} className="inputText" > </TextField>
                            <div> ≈ {this.state.value * 125} Alpha </div>
                            <div class="etherDC"> (1 ETH ≈ 100 + 25 (Bonus) AP) </div>
                        </div>
                        <div class="buttonBuy">
                            <Button type="submit" variant="contained" color="primary" value="Submit">Buy Alpha Tokens | 25% Bonus </Button>
                        </div>
                    </form>

                    {this.state.statusError ? (

                        <div class="flex errorMessage">
                            <i class="material-icons">error_outline</i>
                            <div >{this.state.errorMessage}</div>
                        </div>
                    ) : null}

                    {this.state.statusLoading ? (

                        <div class="flex loadingContainer">
                            <div>
                                <div class="loadingText"> Waiting For Confirmation</div>
                                <div class="loadTextSub">(this can take up to 30 seconds)</div>
                            </div>
                            <CircularProgress />
                        </div>
                    ) : null}

                    {this.state.success ? (

                        <div class="flex successfully">You successfully bought DC Coins!</div>
                    ) : null}

                </div>
            </Wrapper>
        );
    }
}

export default Contribute;
